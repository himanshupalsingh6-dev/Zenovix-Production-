import { useState } from 'react';
import { Link, useParams } from 'wouter';
import { motion } from 'framer-motion';
import {
  ChevronRight, ArrowRight, CheckCircle2, Star,
  Phone, Mail, MessageCircle, Calendar, ArrowLeft,
} from 'lucide-react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';
import { getServiceBySlug, WHY_ZENOVIX, TESTIMONIALS, IllustrationType } from '@/data/services-data';
import { ProjectInquiryForm } from '@/components/ProjectInquiryForm';
import { CONTACT, getWhatsappHref } from '@/lib/site-config';
import NotFound from '@/pages/not-found';

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const vp = { once: true, margin: '-80px' };

// ─── Illustration components ──────────────────────────────────────────────────
function BrowserIllustration() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <div className="absolute inset-0 -bottom-4 bg-primary/15 rounded-3xl blur-3xl" />
      <div className="relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md shadow-2xl shadow-black/30 overflow-hidden">
        <div className="flex items-center gap-2.5 px-4 h-10 border-b border-border/50 bg-muted/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/90" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/90" />
            <div className="w-3 h-3 rounded-full bg-green-400/90" />
          </div>
          <div className="flex-1 h-5 bg-background/40 rounded px-3 flex items-center">
            <span className="text-[10px] text-muted-foreground/60 font-mono">zenovix.com/project</span>
          </div>
        </div>
        <div className="p-4 bg-background/10 space-y-3">
          <div className="h-28 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/20 flex items-end p-3">
            <div className="space-y-1.5">
              <div className="h-2.5 w-32 bg-primary/50 rounded-full" />
              <div className="h-2 w-24 bg-foreground/20 rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {['bg-primary/15 border-primary/25', 'bg-accent/10 border-accent/20', 'bg-secondary/10 border-secondary/20'].map((c, i) => (
              <div key={i} className={`h-16 rounded-lg border ${c} flex flex-col items-center justify-center gap-1`}>
                <div className="w-6 h-6 rounded-md bg-current/10" />
                <div className="h-1.5 w-10 bg-foreground/15 rounded-full" />
              </div>
            ))}
          </div>
          <div className="space-y-1.5 px-1">
            {[100, 80, 60].map((w, i) => (
              <div key={i} className="h-1.5 bg-foreground/10 rounded-full" style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="flex gap-2">
            <div className="h-7 flex-1 rounded-lg bg-primary/20 border border-primary/30" />
            <div className="h-7 flex-1 rounded-lg bg-muted border border-border" />
          </div>
        </div>
        <div className="flex items-center justify-between px-4 h-7 border-t border-border/50 bg-primary/5">
          <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground/70 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Build successful · Lighthouse 98
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileIllustration() {
  return (
    <div className="relative mx-auto w-52">
      <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl" />
      <div className="relative mx-auto w-full rounded-[2.5rem] border-4 border-border/60 bg-card/80 shadow-2xl shadow-black/30 overflow-hidden">
        <div className="h-7 bg-muted/30 flex items-center justify-center">
          <div className="w-20 h-4 bg-background/40 rounded-full" />
        </div>
        <div className="p-3 space-y-2 bg-background/10">
          <div className="h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/15 border border-primary/20 flex items-center justify-center">
            <div className="space-y-1.5 text-center px-4">
              <div className="h-2 w-20 bg-primary/50 rounded-full mx-auto" />
              <div className="h-1.5 w-14 bg-foreground/20 rounded-full mx-auto" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-14 rounded-xl bg-muted/50 border border-border/40 flex items-center justify-center">
                <div className="w-7 h-7 rounded-lg bg-accent/15" />
              </div>
            ))}
          </div>
          <div className="h-9 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
            <div className="h-1.5 w-16 bg-primary/60 rounded-full" />
          </div>
        </div>
        <div className="h-11 bg-muted/20 border-t border-border/40 flex items-center justify-around px-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`w-5 h-5 rounded-md ${i === 0 ? 'bg-primary/40' : 'bg-foreground/10'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardIllustration() {
  const bars = [55, 80, 40, 95, 65, 50];
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <div className="absolute inset-0 -bottom-4 bg-accent/15 rounded-3xl blur-3xl" />
      <div className="relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md shadow-2xl shadow-black/30 overflow-hidden">
        <div className="flex items-center gap-2.5 px-4 h-10 border-b border-border/50 bg-muted/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/90" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/90" />
            <div className="w-3 h-3 rounded-full bg-green-400/90" />
          </div>
          <span className="text-[10px] text-muted-foreground/60 font-mono">Analytics · Dashboard</span>
        </div>
        <div className="p-4 bg-background/10 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Revenue', val: '+24%', c: 'text-secondary', bg: 'bg-secondary/10' },
              { label: 'Users', val: '12.4k', c: 'text-accent', bg: 'bg-accent/10' },
              { label: 'Orders', val: '98%', c: 'text-primary', bg: 'bg-primary/10' },
            ].map((s) => (
              <div key={s.label} className={`p-2.5 rounded-lg border border-border/40 ${s.bg}`}>
                <div className={`text-sm font-bold ${s.c}`}>{s.val}</div>
                <div className="text-[9px] text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-lg bg-muted/20 border border-border/40">
            <div className="text-[9px] text-muted-foreground mb-2 font-semibold uppercase tracking-wider">Monthly Revenue</div>
            <div className="flex items-end gap-1 h-14">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t transition-all"
                  style={{
                    height: `${h}%`,
                    background: i === 3
                      ? 'hsl(var(--primary) / 0.8)'
                      : 'hsl(var(--accent) / 0.35)',
                  }}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[{ label: 'Active Users', val: '2,841', pct: 72 }, { label: 'Conversion', val: '4.8%', pct: 48 }].map((m) => (
              <div key={m.label} className="p-2.5 rounded-lg bg-muted/30 border border-border/40 space-y-1.5">
                <div className="text-[9px] text-muted-foreground">{m.label}</div>
                <div className="text-xs font-bold text-foreground">{m.val}</div>
                <div className="h-1 bg-border rounded-full">
                  <div className="h-1 bg-accent/60 rounded-full" style={{ width: `${m.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AIIllustration() {
  const nodes = [
    { cx: 210, cy: 60, r: 18, color: 'hsl(var(--primary))' },
    { cx: 90, cy: 130, r: 14, color: 'hsl(var(--accent))' },
    { cx: 210, cy: 130, r: 22, color: 'hsl(var(--accent))' },
    { cx: 330, cy: 130, r: 14, color: 'hsl(var(--secondary))' },
    { cx: 50, cy: 220, r: 12, color: 'hsl(var(--muted-foreground))' },
    { cx: 145, cy: 220, r: 14, color: 'hsl(var(--primary))' },
    { cx: 270, cy: 220, r: 14, color: 'hsl(var(--accent))' },
    { cx: 370, cy: 220, r: 12, color: 'hsl(var(--secondary))' },
  ];
  const edges = [
    [0, 1], [0, 2], [0, 3],
    [1, 4], [1, 5], [2, 5], [2, 6], [3, 6], [3, 7],
  ];
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-3xl" />
      <div className="relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md shadow-2xl shadow-black/30 overflow-hidden p-6">
        <div className="text-xs font-semibold text-muted-foreground mb-3 font-mono">AI Neural Network</div>
        <svg viewBox="0 0 420 280" className="w-full h-auto">
          {edges.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a].cx} y1={nodes[a].cy}
              x2={nodes[b].cx} y2={nodes[b].cy}
              stroke="hsl(var(--border))" strokeWidth="1.5" strokeOpacity="0.6"
            />
          ))}
          {nodes.map((n, i) => (
            <g key={i}>
              <circle cx={n.cx} cy={n.cy} r={n.r + 4} fill={n.color} fillOpacity="0.15" />
              <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.color} fillOpacity="0.85" />
            </g>
          ))}
          <text x="210" y="295" textAnchor="middle" fontSize="9" fill="hsl(var(--muted-foreground))" fontFamily="monospace">Processing 2.4M tokens/day</text>
        </svg>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {['LLM', 'NLP', 'Vision', 'Predict'].map((t) => (
            <span key={t} className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatIllustration() {
  const messages = [
    { text: 'Hi! I\'d like a quote for a project.', me: false },
    { text: 'Hello! I\'d be happy to help. What type of project?', me: true },
    { text: 'A restaurant ordering system with QR menus.', me: false },
    { text: 'Great choice! I\'ll send you a detailed proposal shortly.', me: true },
  ];
  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      <div className="absolute inset-0 bg-secondary/10 rounded-3xl blur-3xl" />
      <div className="relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md shadow-2xl shadow-black/30 overflow-hidden">
        <div className="flex items-center gap-3 px-4 h-12 border-b border-border/50 bg-muted/30">
          <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-secondary" />
          </div>
          <div>
            <div className="text-xs font-semibold text-foreground">Zenovix Support</div>
            <div className="flex items-center gap-1 text-[10px] text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Online · Replies instantly
            </div>
          </div>
        </div>
        <div className="p-4 space-y-3 bg-background/10 min-h-[180px]">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.me ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed ${
                  m.me
                    ? 'bg-secondary text-white rounded-br-sm'
                    : 'bg-muted border border-border/50 text-foreground rounded-bl-sm'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div className="flex gap-1.5 items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-2.5 border-t border-border/50 bg-muted/20">
          <div className="flex-1 h-7 rounded-full bg-background/60 border border-border/50 px-3 flex items-center">
            <span className="text-[10px] text-muted-foreground/50">Type a message…</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CloudIllustration() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-3xl" />
      <div className="relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md shadow-2xl shadow-black/30 overflow-hidden p-5">
        <div className="text-xs font-semibold text-muted-foreground mb-4 font-mono">Infrastructure · AWS</div>
        <div className="flex flex-col items-center gap-3">
          {/* Cloud */}
          <div className="w-28 h-16 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center">
            <span className="text-[10px] font-bold text-accent">☁ AWS Cloud</span>
          </div>
          {/* Lines */}
          <div className="flex gap-6 items-start">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-4 bg-border" />
              <div className="w-16 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center">
                <span className="text-[9px] font-semibold text-primary">EC2</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-4 bg-border" />
              <div className="w-16 h-10 rounded-xl bg-secondary/10 border border-secondary/25 flex items-center justify-center">
                <span className="text-[9px] font-semibold text-secondary">RDS</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-4 bg-border" />
              <div className="w-16 h-10 rounded-xl bg-muted border border-border flex items-center justify-center">
                <span className="text-[9px] font-semibold text-muted-foreground">S3</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[{ label: 'Uptime', val: '99.97%', c: 'text-secondary' }, { label: 'Latency', val: '18 ms', c: 'text-primary' }, { label: 'CDN', val: 'Global', c: 'text-accent' }].map((m) => (
            <div key={m.label} className="p-2 rounded-lg bg-muted/30 border border-border/40 text-center">
              <div className={`text-xs font-bold ${m.c}`}>{m.val}</div>
              <div className="text-[9px] text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsIllustration() {
  const points = [20, 35, 28, 50, 42, 65, 58, 78, 70, 90];
  const w = 380; const h = 120;
  const xs = points.map((_, i) => (i / (points.length - 1)) * (w - 40) + 20);
  const ys = points.map((p) => h - (p / 100) * (h - 20) - 10);
  const path = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x},${ys[i]}`).join(' ');
  const area = `${path} L${xs[xs.length - 1]},${h} L${xs[0]},${h} Z`;
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <div className="absolute inset-0 bg-secondary/10 rounded-3xl blur-3xl" />
      <div className="relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md shadow-2xl shadow-black/30 overflow-hidden p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-muted-foreground font-mono">Organic Traffic Growth</span>
          <span className="text-xs font-bold text-secondary">+340%</span>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: 100 }}>
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#areaGrad)" />
          <path d={path} fill="none" stroke="hsl(var(--secondary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {xs.map((x, i) => <circle key={i} cx={x} cy={ys[i]} r="3.5" fill="hsl(var(--secondary))" />)}
        </svg>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[{ label: '#1 Rankings', val: '47 keywords', c: 'text-primary' }, { label: 'Monthly Visits', val: '28,400', c: 'text-secondary' }, { label: 'Lighthouse', val: '98 / 100', c: 'text-accent' }].map((m) => (
            <div key={m.label} className="p-2 rounded-lg bg-muted/30 border border-border/40 text-center">
              <div className={`text-xs font-bold ${m.c}`}>{m.val}</div>
              <div className="text-[9px] text-muted-foreground mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Illustration({ type }: { type: IllustrationType }) {
  switch (type) {
    case 'mobile': return <MobileIllustration />;
    case 'dashboard': return <DashboardIllustration />;
    case 'ai': return <AIIllustration />;
    case 'chat': return <ChatIllustration />;
    case 'cloud': return <CloudIllustration />;
    case 'analytics': return <AnalyticsIllustration />;
    default: return <BrowserIllustration />;
  }
}

// ─── Mock portfolio projects ──────────────────────────────────────────────────
const MOCK_PROJECTS = [
  { title: 'Enterprise SaaS Platform', client: 'FinEdge Technologies', result: 'Reduced operational cost by 60%' },
  { title: 'Multi-Vendor Marketplace', client: 'ShopNow India', result: '₹45L GMV in first 3 months' },
  { title: 'Healthcare Management System', client: 'LifeCare Hospital Group', result: '10,000+ patients managed digitally' },
];

// ─── Main component ───────────────────────────────────────────────────────────
export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug ?? '');
  const [formOpen, setFormOpen] = useState(false);

  if (!service) return <NotFound />;

  const testimonials = TESTIMONIALS.slice(0, 3);

  return (
    <>
      <ProjectInquiryForm open={formOpen} onClose={() => setFormOpen(false)} defaultService={service.title} />

      <div className="overflow-hidden">

        {/* ─── 1. HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[88vh] flex items-center pt-8 pb-16 px-6 md:px-12">
          {/* Backgrounds */}
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

          <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-7"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-foreground font-medium">{service.title}</span>
              </nav>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
                <span className="text-gradient">{service.title}</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {service.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setFormOpen(true)}
                  className="inline-flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/25"
                >
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href={getWhatsappHref(`Hi, I'm interested in ${service.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-full bg-card border border-border text-foreground font-medium hover:bg-muted transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-secondary" /> WhatsApp Now
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-secondary" /> Free consultation</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-secondary" /> Detailed proposal in 24h</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4.5 h-4.5 text-secondary" /> No commitment required</div>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <Illustration type={service.illustration} />
            </motion.div>
          </div>
        </section>

        {/* ─── 2. OVERVIEW ─────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 border-y border-border bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
              className="grid lg:grid-cols-2 gap-16 items-start"
            >
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                  Overview
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">What we deliver</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-6">
                <div className="p-6 rounded-2xl bg-card border border-border space-y-5">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Industries We Serve</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((ind) => (
                      <span key={ind} className="px-3 py-1.5 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/50 transition-colors">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Projects Delivered', val: '40+' },
                    { label: 'Client Satisfaction', val: '98%' },
                    { label: 'Years Experience', val: '5+' },
                    { label: 'Support SLA', val: '4hrs' },
                  ].map((s) => (
                    <div key={s.label} className="p-4 rounded-xl bg-card border border-border text-center">
                      <div className="text-2xl font-extrabold text-primary">{s.val}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─── 3. FEATURES ─────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 bg-background">
          <div className="container mx-auto max-w-6xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} className="max-w-2xl mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-sm font-medium mb-5">
                Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Everything you need, nothing you don't</h2>
            </motion.div>

            <motion.div
              variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {service.features.map((f, i) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <f.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 4. TECHNOLOGY STACK ─────────────────────────────────────────────── */}
        <section className="py-20 px-6 md:px-12 bg-muted/20 border-y border-border">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} className="space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium">
                Technology Stack
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built with the best tools</h2>
              <p className="text-muted-foreground">We use proven, battle-tested technologies — not trends.</p>
            </motion.div>
            <motion.div
              variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
              className="flex flex-wrap justify-center gap-3"
            >
              {service.tech.map((t) => (
                <motion.span
                  key={t.name}
                  variants={fadeUp}
                  className={`text-sm font-semibold px-4 py-2 rounded-full border ${t.color} hover:scale-105 transition-transform cursor-default`}
                >
                  {t.name}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 5. DEVELOPMENT PROCESS ──────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 bg-background">
          <div className="container mx-auto max-w-4xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} className="text-center mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">How we bring your vision to life</h2>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

              {[
                { step: '01', title: 'Discovery & Requirements', desc: 'We understand your business, goals, users, and constraints in depth before writing a line of code.' },
                { step: '02', title: 'Planning & Architecture', desc: 'System design, technology decisions, timeline, and detailed project plan delivered for your approval.' },
                { step: '03', title: 'UI/UX Design', desc: 'Wireframes and high-fidelity prototypes — you see and approve the design before development begins.' },
                { step: '04', title: 'Development', desc: 'Agile sprints with fortnightly demos. You see real progress every two weeks, not just at the end.' },
                { step: '05', title: 'Testing & QA', desc: 'Automated testing, manual QA, performance audits, and cross-device verification before launch.' },
                { step: '06', title: 'Deployment', desc: 'Zero-downtime launch with monitoring configured, backups running, and your team trained.' },
                { step: '07', title: 'Support & Evolution', desc: '90-day post-launch support included. Ongoing retainer available for continuous improvements.' },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  className={`relative flex gap-6 md:gap-8 mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center shrink-0 z-10">
                    <span className="text-xs font-bold text-primary">{item.step}</span>
                  </div>
                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-[46%] p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <h3 className="font-bold text-foreground mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 6. WHY ZENOVIX ──────────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 bg-muted/20 border-y border-border">
          <div className="container mx-auto max-w-6xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} className="text-center mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-sm font-medium">
                Why Zenovix
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The difference you'll notice from day one</h2>
            </motion.div>

            <motion.div
              variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {WHY_ZENOVIX.map((w) => (
                <motion.div
                  key={w.title}
                  variants={fadeUp}
                  className="group p-7 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <w.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 7. PORTFOLIO SHOWCASE ───────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 bg-background">
          <div className="container mx-auto max-w-6xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} className="max-w-2xl mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium">
                Recent Work
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects that speak for themselves</h2>
            </motion.div>

            <motion.div
              variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
              className="grid md:grid-cols-3 gap-6"
            >
              {MOCK_PROJECTS.map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  className="group rounded-2xl bg-card border border-border hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 overflow-hidden"
                >
                  {/* Mockup preview */}
                  <div className="h-44 bg-gradient-to-br from-primary/8 to-accent/8 border-b border-border flex items-center justify-center p-5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_70%)]" />
                    <div className="relative w-full max-w-[200px] rounded-xl border border-border/60 bg-card/90 shadow-lg overflow-hidden">
                      <div className="flex items-center gap-1.5 px-3 h-7 border-b border-border/50 bg-muted/30">
                        {['bg-red-400/80', 'bg-yellow-400/80', 'bg-green-400/80'].map((c, j) => (
                          <div key={j} className={`w-2 h-2 rounded-full ${c}`} />
                        ))}
                      </div>
                      <div className="p-2.5 space-y-1.5">
                        <div className="h-10 rounded-md bg-gradient-to-r from-primary/15 to-accent/10" />
                        <div className="grid grid-cols-2 gap-1">
                          <div className="h-6 rounded bg-muted/40" />
                          <div className="h-6 rounded bg-muted/40" />
                        </div>
                        <div className="h-2 bg-foreground/8 rounded-full w-3/4" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-foreground">{p.title}</h3>
                    <p className="text-xs text-muted-foreground">{p.client}</p>
                    <div className="flex items-center gap-2 pt-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span className="text-xs font-medium text-secondary">{p.result}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} className="mt-10 text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                View full portfolio <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── 8. FAQ ──────────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 bg-muted/20 border-y border-border">
          <div className="container mx-auto max-w-3xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Questions we hear most often</h2>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
              <Accordion type="single" collapsible className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/40 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* ─── 9. TESTIMONIALS ─────────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 bg-background">
          <div className="container mx-auto max-w-6xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} className="text-center mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-medium">
                Client Reviews
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">What our clients say</h2>
            </motion.div>

            <motion.div
              variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
              className="grid md:grid-cols-3 gap-6"
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeUp}
                  className="p-7 rounded-2xl bg-card border border-border hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1 italic">"{t.text}"</p>
                  <div className="mt-5 pt-5 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── 10. FINAL CTA ───────────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-foreground dark:bg-card" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            className="container mx-auto relative z-10 text-center max-w-3xl space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-background dark:text-foreground leading-tight">
              Ready to build your{' '}
              <span className="text-primary">{service.title.toLowerCase()}</span>?
            </h2>
            <p className="text-lg text-background/75 dark:text-muted-foreground">
              Get a free consultation and detailed proposal within 24 hours. No commitment required.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <button
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/20"
              >
                Get Free Quote
              </button>
              <a
                href={getWhatsappHref(`Hi, I'm interested in ${service.title}. Let's discuss my project.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-full bg-secondary text-white font-bold hover:bg-secondary/90 hover:scale-105 transition-all shadow-xl shadow-secondary/20"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </a>
              <a
                href={CONTACT.primaryPhoneHref}
                className="inline-flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-full bg-white/10 text-background dark:text-foreground border border-white/20 font-medium hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-full bg-white/10 text-background dark:text-foreground border border-white/20 font-medium hover:bg-white/20 transition-all"
              >
                <Calendar className="w-5 h-5" /> Schedule Meeting
              </Link>
            </div>

            <p className="text-sm text-background/50 dark:text-muted-foreground/60">
              {CONTACT.primaryPhone} · {CONTACT.email}
            </p>
          </motion.div>
        </section>

      </div>
    </>
  );
}
