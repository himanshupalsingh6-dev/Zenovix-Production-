import { useEffect, useRef, useState, useCallback } from "react";
import {
  Search, Download, RefreshCw, Phone, MessageCircle,
  Copy, Trash2, Eye, X, Bell, FileSpreadsheet, FileText,
  CheckCircle2, Clock, Users, TrendingUp,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────
type Status = "new" | "contacted" | "in-progress" | "completed" | "closed";

interface Enquiry {
  _id: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  whatsapp?: string;
  service: string;
  budget?: string;
  deadline?: string;
  message: string;
  status: Status;
  ip?: string;
  browser?: string;
  country?: string;
  city?: string;
  createdAt: string;
  updatedAt: string;
}

interface Stats { total: number; today: number; new: number; closed: number }

const SERVICE_LABELS: Record<string, string> = {
  web: "Website Dev", app: "Mobile App", custom: "Custom Software",
  ecommerce: "E-Commerce", whatsapp: "WhatsApp Auto", seo: "SEO / Cloud", other: "Other",
};

const STATUS_META: Record<Status, { label: string; color: string }> = {
  "new":         { label: "New",         color: "bg-blue-100 text-blue-800" },
  "contacted":   { label: "Contacted",   color: "bg-yellow-100 text-yellow-800" },
  "in-progress": { label: "In Progress", color: "bg-purple-100 text-purple-800" },
  "completed":   { label: "Completed",   color: "bg-green-100 text-green-800" },
  "closed":      { label: "Closed",      color: "bg-gray-100 text-gray-600" },
};

const API = "/api/admin";

// ── Main component ─────────────────────────────────────────────────────────────
export default function Admin() {
  // Auth
  const [token, setToken]         = useState(() => localStorage.getItem("zx_admin_token") || "");
  const [authed, setAuthed]       = useState(false);
  const [authError, setAuthError] = useState("");
  const [authInput, setAuthInput] = useState("");

  // Data
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [stats, setStats]         = useState<Stats>({ total: 0, today: 0, new: 0, closed: 0 });
  const [total, setTotal]         = useState(0);
  const [loading, setLoading]     = useState(false);

  // Filters
  const [search,  setSearch]  = useState("");
  const [status,  setStatus]  = useState("");
  const [service, setService] = useState("");
  const [sort,    setSort]    = useState("newest");
  const [page,    setPage]    = useState(1);
  const LIMIT = 20;

  // UI state
  const [selected, setSelected]   = useState<Enquiry | null>(null);
  const [notifs,   setNotifs]     = useState<Enquiry[]>([]);
  const [notifBadge, setNotifBadge] = useState(0);
  const [toast, setToast]         = useState("");
  const sseRef = useRef<EventSource | null>(null);

  // ── Helpers ──────────────────────────────────────────────────────────────────
  const headers = useCallback(() => ({
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }), [token]);

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(""), 3000); };

  const fetchStats = useCallback(async () => {
    const r = await fetch(`${API}/enquiries/stats`, { headers: headers() });
    if (r.ok) setStats(await r.json());
  }, [headers]);

  const fetchEnquiries = useCallback(async (pg = page) => {
    setLoading(true);
    const params = new URLSearchParams({ sort, page: String(pg), limit: String(LIMIT) });
    if (search)  params.set("search",  search);
    if (status)  params.set("status",  status);
    if (service) params.set("service", service);
    const r = await fetch(`${API}/enquiries?${params}`, { headers: headers() });
    if (r.ok) {
      const data = await r.json();
      setEnquiries(data.enquiries);
      setTotal(data.total);
    }
    setLoading(false);
  }, [page, sort, search, status, service, headers]);

  // ── Auth ─────────────────────────────────────────────────────────────────────
  const tryAuth = async (tkn: string) => {
    const r = await fetch(`${API}/enquiries/stats`, {
      headers: { Authorization: `Bearer ${tkn}` },
    });
    if (r.ok || r.status === 404) {
      localStorage.setItem("zx_admin_token", tkn);
      setToken(tkn);
      setAuthed(true);
    } else {
      setAuthError("Incorrect password. Try again.");
    }
  };

  // Auto-login if token is stored
  useEffect(() => {
    if (token) tryAuth(token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Data loading after auth ───────────────────────────────────────────────────
  useEffect(() => {
    if (!authed) return;
    fetchStats();
    fetchEnquiries(1);
  }, [authed]); // eslint-disable-line react-hooks/exhaustive-deps

  // Re-fetch when filters change
  useEffect(() => {
    if (!authed) return;
    setPage(1);
    fetchEnquiries(1);
  }, [search, status, service, sort]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── SSE ───────────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!authed) return;
    const url = token ? `${API}/events?token=${encodeURIComponent(token)}` : `${API}/events`;
    const es = new EventSource(url);
    sseRef.current = es;
    es.addEventListener("new_enquiry", (e) => {
      const data = JSON.parse(e.data) as Enquiry;
      setNotifBadge(n => n + 1);
      setNotifs(prev => [data, ...prev].slice(0, 5));
      fetchEnquiries(1);
      fetchStats();
    });
    return () => es.close();
  }, [authed, token]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Actions ───────────────────────────────────────────────────────────────────
  const updateStatus = async (id: string, s: Status) => {
    await fetch(`${API}/enquiries/${id}/status`, {
      method: "PATCH", headers: headers(), body: JSON.stringify({ status: s }),
    });
    setEnquiries(prev => prev.map(e => e._id === id ? { ...e, status: s } : e));
    if (selected?._id === id) setSelected(prev => prev ? { ...prev, status: s } : prev);
    fetchStats();
    showToast("Status updated");
  };

  const deleteEnquiry = async (id: string) => {
    if (!confirm("Delete this enquiry permanently?")) return;
    await fetch(`${API}/enquiries/${id}`, { method: "DELETE", headers: headers() });
    setEnquiries(prev => prev.filter(e => e._id !== id));
    if (selected?._id === id) setSelected(null);
    fetchStats();
    showToast("Enquiry deleted");
  };

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied!`);
  };

  const exportFile = (type: "xlsx" | "csv") => {
    const a = document.createElement("a");
    a.href = `${API}/enquiries/export/${type}${token ? `?_t=${encodeURIComponent(token)}` : ""}`;
    a.download = `Enquiries.${type}`;
    a.click();
  };

  const fmtDate = (d: string) => new Date(d).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

  // ── Login screen ──────────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="text-2xl font-bold text-gray-900">Zenovix Admin</div>
            <div className="text-sm text-gray-500 mt-1">Enter your admin password</div>
          </div>
          <input
            type="password"
            value={authInput}
            onChange={e => setAuthInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && tryAuth(authInput)}
            placeholder="Admin password"
            className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 mb-3"
          />
          {authError && <p className="text-red-500 text-sm mb-3">{authError}</p>}
          <button onClick={() => tryAuth(authInput)} className="w-full h-11 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-xl transition-colors">
            Sign In
          </button>
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil(total / LIMIT);

  // ── Dashboard ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 right-4 z-50 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-in fade-in">
          {toast}
        </div>
      )}

      {/* New enquiry popup */}
      {notifs.length > 0 && (
        <div className="fixed top-4 right-4 z-50 space-y-2 max-w-xs">
          {notifs.slice(0, 1).map(n => (
            <div key={n._id} className="bg-white border border-amber-200 rounded-xl shadow-xl p-4 flex gap-3 items-start">
              <Bell className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 text-sm">New Enquiry!</div>
                <div className="text-xs text-gray-600 truncate">{n.name} — {SERVICE_LABELS[n.service] || n.service}</div>
              </div>
              <button onClick={() => setNotifs([])} className="text-gray-400 hover:text-gray-600"><X className="w-4 h-4" /></button>
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="font-bold text-lg text-gray-900">Zenovix Admin</div>
            <div className="text-xs text-gray-500">Lead Management Dashboard</div>
          </div>
          <div className="flex items-center gap-3">
            {notifBadge > 0 && (
              <button onClick={() => setNotifBadge(0)} className="relative p-2 rounded-lg hover:bg-gray-100">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">{notifBadge}</span>
              </button>
            )}
            <button onClick={() => { fetchEnquiries(); fetchStats(); }} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-600">
              <RefreshCw className="w-4 h-4" /> Refresh
            </button>
            <button onClick={() => exportFile("xlsx")} className="flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors">
              <FileSpreadsheet className="w-4 h-4" /> Excel
            </button>
            <button onClick={() => exportFile("csv")} className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
              <FileText className="w-4 h-4" /> CSV
            </button>
            <button onClick={() => { localStorage.removeItem("zx_admin_token"); setAuthed(false); setToken(""); }} className="text-sm text-gray-500 hover:text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100">
              Sign out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Enquiries", value: stats.total,  icon: Users,       color: "bg-blue-50 text-blue-600" },
            { label: "Today",           value: stats.today,  icon: Clock,       color: "bg-amber-50 text-amber-600" },
            { label: "New Leads",       value: stats.new,    icon: TrendingUp,  color: "bg-purple-50 text-purple-600" },
            { label: "Closed",          value: stats.closed, icon: CheckCircle2,color: "bg-green-50 text-green-600" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{value}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
          <div className="flex flex-wrap gap-3">
            <div className="flex-1 min-w-48 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search name, email, phone…"
                className="w-full h-10 pl-9 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
              />
            </div>
            <select value={status} onChange={e => setStatus(e.target.value)} className="h-10 px-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm text-gray-600">
              <option value="">All Statuses</option>
              {(Object.keys(STATUS_META) as Status[]).map(s => <option key={s} value={s}>{STATUS_META[s].label}</option>)}
            </select>
            <select value={service} onChange={e => setService(e.target.value)} className="h-10 px-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm text-gray-600">
              <option value="">All Services</option>
              {Object.entries(SERVICE_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
            <select value={sort} onChange={e => setSort(e.target.value)} className="h-10 px-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm text-gray-600">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-16 text-gray-400">Loading…</div>
          ) : enquiries.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <Users className="w-10 h-10 mb-3 opacity-40" />
              <div className="font-medium">No enquiries found</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    {["Date","Name","Contact","Service","Budget","Status","Actions"].map(h => (
                      <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {enquiries.map(e => (
                    <tr key={e._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap text-xs">{fmtDate(e.createdAt)}</td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-gray-900">{e.name}</div>
                        {e.company && <div className="text-xs text-gray-500">{e.company}</div>}
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-gray-700">{e.email}</div>
                        <div className="text-gray-500 text-xs">{e.phone}</div>
                      </td>
                      <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{SERVICE_LABELS[e.service] || e.service}</td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap text-xs">{e.budget || "—"}</td>
                      <td className="px-4 py-3">
                        <select
                          value={e.status}
                          onChange={ev => updateStatus(e._id, ev.target.value as Status)}
                          className={`text-xs font-semibold px-2 py-1 rounded-full border-0 cursor-pointer ${STATUS_META[e.status].color}`}
                        >
                          {(Object.keys(STATUS_META) as Status[]).map(s => <option key={s} value={s}>{STATUS_META[s].label}</option>)}
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <button title="View details" onClick={() => setSelected(e)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700"><Eye className="w-4 h-4" /></button>
                          <a title="Call" href={`tel:${e.phone}`} className="p-1.5 rounded-lg hover:bg-green-50 text-gray-500 hover:text-green-600"><Phone className="w-4 h-4" /></a>
                          <a title="WhatsApp" href={`https://wa.me/${(e.whatsapp || e.phone).replace(/\D/g,"")}`} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-green-50 text-gray-500 hover:text-green-600"><MessageCircle className="w-4 h-4" /></a>
                          <button title="Copy email" onClick={() => copyText(e.email, "Email")} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700"><Copy className="w-4 h-4" /></button>
                          <button title="Delete" onClick={() => deleteEnquiry(e._id)} className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
              <div className="text-sm text-gray-500">Showing {(page - 1) * LIMIT + 1}–{Math.min(page * LIMIT, total)} of {total}</div>
              <div className="flex gap-2">
                <button disabled={page === 1} onClick={() => { setPage(p => p - 1); fetchEnquiries(page - 1); }} className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm disabled:opacity-40 hover:bg-gray-50">← Prev</button>
                <button disabled={page >= totalPages} onClick={() => { setPage(p => p + 1); fetchEnquiries(page + 1); }} className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm disabled:opacity-40 hover:bg-gray-50">Next →</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <div className="font-bold text-gray-900 text-lg">{selected.name}</div>
                {selected.company && <div className="text-sm text-gray-500">{selected.company}</div>}
              </div>
              <button onClick={() => setSelected(null)} className="p-2 rounded-xl hover:bg-gray-100"><X className="w-5 h-5 text-gray-600" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  ["Email",    selected.email],
                  ["Phone",    selected.phone],
                  ["WhatsApp", selected.whatsapp || "—"],
                  ["Service",  SERVICE_LABELS[selected.service] || selected.service],
                  ["Budget",   selected.budget   || "—"],
                  ["Deadline", selected.deadline  || "—"],
                  ["Status",   STATUS_META[selected.status].label],
                  ["Date",     fmtDate(selected.createdAt)],
                  ["IP",       selected.ip       || "—"],
                  ["Country",  [selected.city, selected.country].filter(Boolean).join(", ") || "—"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{k}</div>
                    <div className="font-medium text-gray-800">{v}</div>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Message</div>
                <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 whitespace-pre-wrap">{selected.message}</div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <select value={selected.status} onChange={e => updateStatus(selected._id, e.target.value as Status)} className="h-9 px-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                  {(Object.keys(STATUS_META) as Status[]).map(s => <option key={s} value={s}>{STATUS_META[s].label}</option>)}
                </select>
                <a href={`tel:${selected.phone}`} className="flex items-center gap-2 h-9 px-4 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors">
                  <Phone className="w-4 h-4" /> Call
                </a>
                <a href={`https://wa.me/${(selected.whatsapp || selected.phone).replace(/\D/g,"")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 h-9 px-4 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <button onClick={() => copyText(selected.email, "Email")} className="flex items-center gap-2 h-9 px-4 rounded-lg border border-gray-200 text-sm hover:bg-gray-50 transition-colors">
                  <Copy className="w-4 h-4" /> Copy Email
                </button>
                <button onClick={() => deleteEnquiry(selected._id)} className="flex items-center gap-2 h-9 px-4 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition-colors">
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
