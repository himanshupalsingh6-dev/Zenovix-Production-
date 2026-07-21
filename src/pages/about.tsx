import { motion } from "framer-motion";
import { useState } from "react";
import {
  Bot,
  Code2,
  Globe2,
  GraduationCap,
  Instagram,
  MapPin,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import {
  CheckCircle2,
  Layers,
  Zap,
  Clock,
  Users as UsersIcon,
  Cpu,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { getWhatsappHref } from "@/lib/site-config";
import himanshuPhoto from "@/assets/about/founder-himanshu.jpg";
import abhiPhoto from "@/assets/about/founder-abhi.png";
import certHimanshuNetworking from "@/assets/about/cert-himanshu-networking.jpg";
import certHimanshuCriticalThinking from "@/assets/about/cert-himanshu-critical-thinking.jpg";
import certAbhiNetworking from "@/assets/about/cert-abhi-networking.jpg";
import certHimanshuGoogleAnalytics from "@/assets/about/cert-himanshu-google-analytics.png";

const specializations = [
  "Website Development",
  "Android App Development",
  "E-Commerce Development",
  "Custom Software",
  "Business Automation",
  "WhatsApp Automation",
  "UI/UX Design",
];

const founders = [
  {
    id: "himanshu",
    photo: himanshuPhoto,
    name: "Himanshu Baghel",
    role: "Founder & Lead Developer",
    bio: [
      "Himanshu Baghel is the Founder of Zenovix Technologies and the creator of QuickPress.",
      "He is passionate about Software Development, Artificial Intelligence, UI/UX Design, Website Development and Entrepreneurship.",
      "He leads product development, technology strategy, software architecture and innovation at Zenovix Technologies.",
    ],
    flagship: {
      name: "QuickPress",
      description: "An on-demand multi-service platform designed to simplify everyday services through technology.",
      modules: ["Customer App", "Partner Panel", "Rider Panel", "Admin Dashboard"],
      features: [
        "Online Booking",
        "Live Order Tracking",
        "Secure Payments",
        "Business Dashboard",
        "Pickup & Delivery Management",
        "Analytics",
        "Notifications",
      ],
    },
    education: {
      level: "Class 12 Student",
      school: "Shri Suraj Prasad Daga Saraswati Vidya Mandir Inter College",
      location: "Kasganj, Uttar Pradesh",
    },
    instagram: "who_rishab_",
    projects: ["Zenovix Technologies", "QuickPress"],
  },
  {
    id: "abhi",
    photo: abhiPhoto,
    name: "Abhi Yadav",
    role: "Co-Founder",
    bio: [
      "Abhi Yadav works closely with the founder to support business growth, planning, management and company operations.",
      "He contributes to strategic planning and helps strengthen Zenovix Technologies through teamwork and collaboration.",
    ],
    flagship: null,
    education: {
      level: "Class 12 Student",
      school: "Shri Suraj Prasad Daga Saraswati Vidya Mandir Inter College",
      location: "Kasganj, Uttar Pradesh",
    },
    instagram: "ab.hiyadav_776",
    projects: ["Zenovix Technologies"],
  },
];

const highlights = [
  { icon: Rocket, label: "Founder of Zenovix Technologies" },
  { icon: Sparkles, label: "Creator of QuickPress" },
  { icon: Code2, label: "Full Stack Web Developer" },
  { icon: Smartphone, label: "Android App Developer" },
  { icon: Bot, label: "AI & Automation Enthusiast" },
  { icon: Globe2, label: "Website & Software Developer" },
  { icon: GraduationCap, label: "Class 12 Student" },
  { icon: MapPin, label: "Kasganj, Uttar Pradesh" },
];

const journey = [
  "Studying together in Class 12",
  "Shared interest in technology",
  "Started learning Web Development",
  "Built small projects together",
  "Created QuickPress",
  "Founded Zenovix Technologies",
  "Building software for businesses across India",
];

const certificates = [
  {
    id: "founder-networking",
    holder: "Himanshu Pal",
    role: "Founder",
    name: "Professional Networking for Career Growth",
    issuer: "HP LIFE Foundation",
    image: certHimanshuNetworking,
    link: "https://www.life-global.org/certificate/3bdc29be-cf89-4671-bb17-c6eae76348e9",
  },
  {
    id: "founder-critical-thinking",
    holder: "Himanshu Pal",
    role: "Founder",
    name: "Critical Thinking in the AI Era",
    issuer: "HP LIFE Foundation",
    image: certHimanshuCriticalThinking,
    link: "https://www.life-global.org/certificate/93f41871-5076-401c-b3d8-bbd8a0329715",
  },
  {
    id: "cofounder-networking",
    holder: "Abhi Yadav",
    role: "Co-Founder",
    name: "Professional Networking for Career Growth",
    issuer: "HP LIFE Foundation",
    image: certAbhiNetworking,
    link: "https://www.life-global.org/certificate/fbd13943-001d-4d33-a567-9f8c7f407208",
  },
  {
    id: "founder-google-analytics",
    holder: "Himanshu Pal Singh",
    role: "Founder",
    name: "Google Analytics",
    issuer: "Great Learning Academy",
    image: certHimanshuGoogleAnalytics,
    link: "https://www.mygreatlearning.com/certificate/DPRDHRLK",
  },
];

const whyChoose = [
  { icon: Sparkles, label: "Innovative Solutions" },
  { icon: Cpu, label: "Modern Technology" },
  { icon: Smartphone, label: "Mobile First Development" },
  { icon: ShieldCheck, label: "Secure Applications" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: UsersIcon, label: "Client Focused" },
  { icon: Layers, label: "Scalable Architecture" },
  { icon: Clock, label: "Long Term Support" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const [activeCertificate, setActiveCertificate] = useState<(typeof certificates)[number] | null>(null);

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 md:px-12 bg-muted/50 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center space-y-6 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Sparkles className="w-4 h-4" /> Two Classmates. One Vision.
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
            Meet the People Behind <span className="text-primary">Zenovix</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Zenovix Technologies is a software development company founded by two passionate classmates who share a common vision of building innovative digital products.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="text-sm font-bold text-primary uppercase tracking-widest">Our Story</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Building digital presence for ambitious businesses.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our mission is to help startups, local businesses, educational institutions, hospitals, restaurants, and entrepreneurs build a strong digital presence through modern technology.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {specializations.map((s) => (
                  <span key={s} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass border border-border shadow-2xl p-2 bg-gradient-to-br from-primary/5 to-accent/5"
            >
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="relative z-10 text-center p-8">
                  <div className="text-4xl font-bold text-foreground mb-2">Since 2024</div>
                  <div className="text-muted-foreground font-medium">Two Classmates, Building Together</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-20 px-6 md:px-12 bg-card border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Meet the Team</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet the Founders</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {founders.map((f, i) => (
              <motion.div
                key={f.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-3xl border border-border shadow-sm p-8 hover:shadow-xl hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-border">
                    <img src={f.photo} alt={f.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{f.name}</h3>
                    <div className="text-primary font-semibold text-sm">{f.role}</div>
                    <a
                      href={`https://instagram.com/${f.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mt-1"
                    >
                      <Instagram className="w-4 h-4" /> @{f.instagram}
                    </a>
                  </div>
                </div>

                <div className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                  {f.bio.map((p) => <p key={p}>{p}</p>)}
                </div>

                {f.flagship && (
                  <div className="rounded-2xl bg-muted/50 border border-border p-5 mb-6">
                    <div className="text-sm font-bold text-foreground mb-1">Flagship Project: {f.flagship.name}</div>
                    <p className="text-sm text-muted-foreground mb-3">{f.flagship.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {f.flagship.modules.map((m) => (
                        <span key={m} className="px-2.5 py-1 bg-card text-xs font-medium rounded-md border border-border text-foreground">
                          {m}
                        </span>
                      ))}
                    </div>
                    <ul className="text-sm text-muted-foreground grid grid-cols-2 gap-1.5 list-disc list-inside">
                      {f.flagship.features.map((feat) => <li key={feat}>{feat}</li>)}
                    </ul>
                  </div>
                )}

                <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
                  <GraduationCap className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <div>
                    <div>{f.education.level}</div>
                    <div>{f.education.school}</div>
                    <div>{f.education.location}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {f.projects.map((p) => (
                    <span key={p} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Highlights */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Founder Highlights</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Drives Our Founder</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl border border-border p-6 text-center shadow-sm hover:shadow-lg hover:border-primary/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <h.icon className="w-6 h-6" />
                </div>
                <div className="font-semibold text-foreground text-sm leading-snug">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 md:px-12 bg-card border-y border-border">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Our Journey</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Classmates to Co-Founders</h2>
          </div>
          <div className="relative pl-10">
            <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-border" />
            <div className="space-y-10">
              {journey.map((step, i) => (
                <motion.div
                  key={step}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative"
                >
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="bg-background rounded-xl border border-border px-5 py-4 font-medium text-foreground">
                    {step}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Achievements & Certifications</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Recognized Learning</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-2xl border border-border p-6 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all flex flex-col"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border mb-5">
                  <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{cert.role} · {cert.holder}</div>
                <h3 className="font-bold text-foreground mb-1 leading-snug">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mb-5">Issued by {cert.issuer}</p>
                <div className="mt-auto flex items-center gap-4">
                  <button
                    onClick={() => setActiveCertificate(cert)}
                    className="text-sm font-semibold text-primary hover:underline text-left"
                  >
                    View Certificate
                  </button>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-muted-foreground hover:text-primary hover:underline"
                  >
                    Verify ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!activeCertificate} onOpenChange={(open) => !open && setActiveCertificate(null)}>
        <DialogContent className="max-w-lg">
          {activeCertificate && (
            <div className="space-y-4">
              <DialogTitle>{activeCertificate.name}</DialogTitle>
              <div className="rounded-xl overflow-hidden border border-border">
                <img src={activeCertificate.image} alt={activeCertificate.name} className="w-full h-auto" />
              </div>
              <div className="text-sm text-muted-foreground">
                <div><span className="font-semibold text-foreground">Awarded to:</span> {activeCertificate.holder} ({activeCertificate.role})</div>
                <div><span className="font-semibold text-foreground">Issued by:</span> {activeCertificate.issuer}</div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Why Choose Zenovix */}
      <section className="py-20 px-6 md:px-12 bg-card border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Zenovix</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((w, i) => (
              <motion.div
                key={w.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-background rounded-2xl p-6 border border-border shadow-sm flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <w.icon className="w-5 h-5" />
                </div>
                <div className="font-semibold text-foreground">{w.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Have an idea? Let's build it together.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From websites to full platforms like QuickPress, Zenovix Technologies turns ambitious ideas into working software.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Start a Project
            </a>
            <a
              href={getWhatsappHref("Hi Zenovix Technologies, I saw your About page and want to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground font-semibold px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
