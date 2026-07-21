import { Link } from "wouter";
import { ArrowRight, Code, Layout, Smartphone, Cloud, Search, MessageSquare, Zap, BarChart, CheckCircle2, Mail, GitBranch, Terminal, Gauge, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { getMailtoHref } from "@/lib/site-config";

const services = [
  { icon: Layout,       title: "Website Development",   desc: "Corporate sites, portfolios, and specialized web experiences designed to convert.",         link: "/services" },
  { icon: Smartphone,   title: "App Development",        desc: "Native Android and cross-platform applications with fluid user experiences.",                link: "/services" },
  { icon: Code,         title: "Custom Software",        desc: "Enterprise-grade bespoke software solving complex operational challenges.",                  link: "/services" },
  { icon: MessageSquare,title: "WhatsApp Automation",    desc: "Intelligent chatbot workflows and customer communication automation.",                       link: "/services" },
  { icon: Search,       title: "SEO Optimization",       desc: "Technical and on-page optimization to dominate search engine rankings.",                     link: "/services" },
  { icon: Cloud,        title: "Cloud Deployment",       desc: "Scalable, secure infrastructure setup on AWS, Azure, or Cloudflare.",                       link: "/services" },
];

const stats = [
  { value: "40+",  label: "Projects Delivered" },
  { value: "98%",  label: "Client Retention" },
  { value: "15+",  label: "Technical Experts" },
  { value: "3",    label: "Global Locations" },
];

const techBadges = [
  { label: "React",       color: "text-cyan-400   border-cyan-400/30   bg-cyan-400/10"    },
  { label: "Node.js",     color: "text-green-400  border-green-400/30  bg-green-400/10"   },
  { label: "TypeScript",  color: "text-blue-400   border-blue-400/30   bg-blue-400/10"    },
  { label: "MongoDB",     color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"},
  { label: "AWS",         color: "text-orange-400 border-orange-400/30 bg-orange-400/10"  },
  { label: "PostgreSQL",  color: "text-indigo-400 border-indigo-400/30 bg-indigo-400/10"  },
];

const codeLines = [
  { indent: 0, tokens: [{ t: "const ", c: "text-accent" }, { t: "server", c: "text-primary" }, { t: " = ", c: "text-foreground/70" }, { t: "express", c: "text-secondary" }, { t: "()", c: "text-foreground/70" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: "server", c: "text-primary" }, { t: ".", c: "text-foreground/50" }, { t: "use", c: "text-secondary" }, { t: "(", c: "text-foreground/70" }, { t: "helmet", c: "text-orange-400" }, { t: "())", c: "text-foreground/70" }] },
  { indent: 0, tokens: [{ t: "server", c: "text-primary" }, { t: ".", c: "text-foreground/50" }, { t: "use", c: "text-secondary" }, { t: "(", c: "text-foreground/70" }, { t: "cors", c: "text-orange-400" }, { t: "({ origin: ", c: "text-foreground/70" }, { t: '"*"', c: "text-primary" }, { t: " }))", c: "text-foreground/70" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: "server", c: "text-primary" }, { t: ".", c: "text-foreground/50" }, { t: "listen", c: "text-secondary" }, { t: "(", c: "text-foreground/70" }, { t: "PORT", c: "text-orange-400" }, { t: ", () => {", c: "text-foreground/70" }] },
  { indent: 1, tokens: [{ t: "console", c: "text-accent" }, { t: ".", c: "text-foreground/50" }, { t: "log", c: "text-secondary" }, { t: "(" , c: "text-foreground/70" }, { t: '"🚀 Server online"', c: "text-primary" }, { t: ")", c: "text-foreground/70" }] },
  { indent: 0, tokens: [{ t: "})", c: "text-foreground/70" }] },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 px-6 md:px-12">
        {/* Background */}
        <div className="absolute inset-0 bg-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.08),transparent_60%)]"></div>
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-medium">
              <Zap className="w-3.5 h-3.5" />
              Transforming Ideas into Software
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
              Engineering<br />
              <span className="text-gradient">Digital Growth</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              We are a premium software development agency building enterprise-grade websites, mobile applications, and custom software for ambitious businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-card border border-border text-foreground font-medium hover:bg-muted transition-all">
                View Our Work
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground pt-2">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> Trusted globally</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> Expert team</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> On-time delivery</div>
            </div>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center lg:h-[600px]"
          >
            {/* Glow behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-[90px] pointer-events-none"></div>
            <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-accent/15 rounded-full blur-[60px] pointer-events-none"></div>

            {/* Main code-editor card */}
            <div className="relative w-full max-w-[440px] rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md shadow-2xl shadow-black/30 overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-3 px-4 h-11 border-b border-border/50 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/90"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/90"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/90"></div>
                </div>
                <div className="flex-1 flex items-center gap-1.5 bg-background/40 rounded-md h-6 px-3">
                  <Terminal className="w-3 h-3 text-muted-foreground/60" />
                  <span className="text-xs text-muted-foreground/70 font-mono">api/server.ts</span>
                </div>
                <GitBranch className="w-3.5 h-3.5 text-muted-foreground/50" />
                <span className="text-xs text-muted-foreground/50 font-mono">main</span>
              </div>

              {/* Code body */}
              <div className="p-5 font-mono text-[11.5px] leading-6 space-y-0 bg-background/20">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.07, duration: 0.3 }}
                    className="flex gap-4"
                  >
                    <span className="select-none text-muted-foreground/30 w-4 shrink-0 text-right">{i + 1}</span>
                    <span style={{ paddingLeft: line.indent * 16 }}>
                      {line.tokens.map((tk, j) => (
                        <span key={j} className={tk.c}>{tk.t}</span>
                      ))}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-4 h-8 border-t border-border/50 bg-primary/5">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground/70 font-mono">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  Build successful
                </div>
                <div className="flex items-center gap-3 text-[10px] text-muted-foreground/50 font-mono">
                  <span>TypeScript</span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>

            {/* Floating metric cards */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -top-2 -right-2 lg:right-0 bg-card border border-border/70 rounded-xl px-3.5 py-2.5 shadow-xl shadow-black/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-secondary/15 flex items-center justify-center">
                  <Gauge className="w-3.5 h-3.5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">98 / 100</div>
                  <div className="text-[10px] text-muted-foreground">Performance</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="absolute -bottom-2 -left-2 lg:left-0 bg-card border border-border/70 rounded-xl px-3.5 py-2.5 shadow-xl shadow-black/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">99.9% Uptime</div>
                  <div className="text-[10px] text-muted-foreground">SLA Guaranteed</div>
                </div>
              </div>
            </motion.div>

            {/* Tech badge strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-14 lg:bottom-8 lg:-right-4 flex flex-wrap gap-1.5 max-w-[200px] justify-end"
            >
              {techBadges.map((b) => (
                <span key={b.label} className={`text-[10px] font-semibold px-2 py-1 rounded-full border ${b.color}`}>
                  {b.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 border-y border-border bg-card/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center space-y-1">
                <div className="text-4xl md:text-5xl font-extrabold text-foreground">{s.value}</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Expertise that drives business forward</h2>
            <p className="text-lg text-muted-foreground">We don't just write code. We deliver strategic technical solutions that solve real operational bottlenecks and accelerate growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link key={i} href={service.link} className="group block h-full">
                <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <div className="flex items-center text-primary font-medium text-sm gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all absolute bottom-8">
                    Explore Service <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground dark:bg-card"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-60"></div>
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-background dark:text-foreground mb-6">Ready to scale your operations?</h2>
          <p className="text-lg text-background/80 dark:text-muted-foreground mb-10">
            Partner with an engineering team that understands business context. Let's discuss your requirements and define a technical roadmap.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20">
              Schedule Consultation
            </Link>
            <a href={getMailtoHref("Project inquiry")} className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white/10 text-background dark:text-foreground hover:bg-white/20 transition-all font-medium border border-white/20">
              <Mail className="w-5 h-5" /> Email Us directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
