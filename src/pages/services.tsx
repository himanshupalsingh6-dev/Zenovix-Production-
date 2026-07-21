import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const services = [
  {
    id: "web-dev",
    slug: "website-development",
    title: "Website Development",
    desc: "We build blazing fast, SEO-optimized, and highly converting websites for modern businesses.",
    benefits: ["Sub-second load times", "Responsive across all devices", "SEO architecture out-of-the-box", "Scalable CMS integration"],
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    timeline: "2-6 Weeks",
    suits: "Corporations, Agencies, B2B SaaS"
  },
  {
    id: "ecommerce",
    slug: "ecommerce-development",
    title: "E-Commerce Websites",
    desc: "Custom storefronts that maximize conversion rates and streamline inventory management.",
    benefits: ["Frictionless checkout", "Secure payment gateways", "Inventory syncing", "Marketing tool integrations"],
    tech: ["Next.js", "Stripe", "Node.js", "PostgreSQL"],
    timeline: "4-8 Weeks",
    suits: "Retailers, Direct-to-Consumer Brands"
  },
  {
    id: "hospital",
    slug: "hospital-management",
    title: "Hospital & Clinic Websites",
    desc: "Secure, compliant portals for healthcare providers to manage patients and appointments.",
    benefits: ["HIPAA-compliant architecture", "Patient booking system", "Doctor directory", "Telehealth readiness"],
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    timeline: "4-10 Weeks",
    suits: "Hospitals, Clinics, Private Practices"
  },
  {
    id: "restaurant",
    slug: "restaurant-website",
    title: "Restaurant Websites",
    desc: "Appetizing digital storefronts with integrated menus and direct ordering capabilities.",
    benefits: ["Zero-commission online ordering", "Dynamic QR menus", "Table reservation system", "Location integrations"],
    tech: ["React", "Firebase", "Tailwind CSS"],
    timeline: "2-4 Weeks",
    suits: "Restaurants, Cafes, Cloud Kitchens"
  },
  {
    id: "school",
    slug: "school-website",
    title: "School Websites",
    desc: "Centralized hubs for education institutions to communicate with students and parents.",
    benefits: ["Event calendars", "Application portals", "Parent communication tools", "Staff directories"],
    tech: ["Next.js", "CMS integration"],
    timeline: "3-6 Weeks",
    suits: "Schools, Universities, Training Centers"
  },
  {
    id: "portfolio",
    slug: "portfolio-website",
    title: "Portfolio Websites",
    desc: "High-end visual showcases for creative professionals and agencies.",
    benefits: ["Immersive animations", "High-res media support", "Case study architecture", "Lead generation forms"],
    tech: ["React", "Framer Motion"],
    timeline: "2-4 Weeks",
    suits: "Designers, Photographers, Agencies"
  },
  {
    id: "android",
    slug: "android-app-development",
    title: "Android App Development",
    desc: "Native-feeling mobile applications that engage users and drive retention.",
    benefits: ["Offline capabilities", "Push notifications", "Hardware integration", "Play Store deployment"],
    tech: ["Flutter", "Firebase", "REST APIs"],
    timeline: "8-12 Weeks",
    suits: "Startups, Retailers, Service Providers"
  },
  {
    id: "custom",
    slug: "custom-software",
    title: "Custom Software Development",
    desc: "Bespoke operational tools, CRMs, and internal dashboards built for your exact workflows.",
    benefits: ["Elimination of manual entry", "Custom reporting", "Role-based access control", "API integrations"],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
    timeline: "12+ Weeks",
    suits: "Mid-market Enterprises, Logistics, Finance"
  },
  {
    id: "erp-crm",
    slug: "erp-crm",
    title: "ERP & CRM Software",
    desc: "Enterprise resource planning and CRM systems tailored to your exact business processes.",
    benefits: ["Unified sales & inventory view", "Automated procurement workflows", "Custom reporting dashboards", "Multi-branch support"],
    tech: ["Node.js", "React", "PostgreSQL", "Redis"],
    timeline: "16-24 Weeks",
    suits: "Manufacturing, Distribution, Retail"
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI Automation",
    desc: "Intelligent automation systems that reduce manual effort, eliminate errors, and scale effortlessly.",
    benefits: ["70–90% reduction in manual work", "AI-powered document processing", "Predictive analytics", "Natural language support bots"],
    tech: ["Python", "OpenAI", "Node.js", "AWS"],
    timeline: "4-12 Weeks",
    suits: "Finance, Healthcare, Logistics, E-Commerce"
  },
  {
    id: "whatsapp",
    slug: "whatsapp-automation",
    title: "WhatsApp Automation",
    desc: "Intelligent chatbot workflows that automate customer support and sales.",
    benefits: ["24/7 instant replies", "Lead qualification", "Automated appointment booking", "CRM sync"],
    tech: ["WhatsApp Cloud API", "Node.js"],
    timeline: "2-4 Weeks",
    suits: "Real Estate, Healthcare, Retail"
  },
  {
    id: "seo",
    slug: "seo-optimization",
    title: "SEO Optimization",
    desc: "Technical infrastructure and content strategies that dominate search rankings.",
    benefits: ["Higher organic traffic", "Core Web Vitals optimization", "Keyword dominance", "Competitor gap analysis"],
    tech: ["Next.js", "Lighthouse", "Semrush"],
    timeline: "Ongoing",
    suits: "Any business looking for inbound leads"
  },
  {
    id: "cloud",
    slug: "cloud-deployment",
    title: "Cloud Deployment",
    desc: "Secure, scalable, and cost-optimized infrastructure setups.",
    benefits: ["99.9% uptime guarantees", "Auto-scaling traffic support", "DDoS protection", "Automated backups"],
    tech: ["AWS", "Cloudflare", "Docker", "Vercel"],
    timeline: "1-3 Weeks",
    suits: "Scaling Startups, High-traffic sites"
  },
  {
    id: "uiux",
    slug: "uiux-design",
    title: "UI/UX Design",
    desc: "Premium digital product design built on research — beautiful, accessible, and engineered to convert.",
    benefits: ["User research & personas", "Interactive Figma prototypes", "Design systems", "Developer-ready handoff"],
    tech: ["Figma", "Framer", "React", "Tailwind CSS"],
    timeline: "2-6 Weeks",
    suits: "SaaS, Fintech, Consumer Apps, Agencies"
  },
  {
    id: "maintenance",
    slug: "website-maintenance",
    title: "Website Maintenance",
    desc: "Ongoing support to keep your software secure, fast, and up-to-date.",
    benefits: ["Security patching", "Uptime monitoring", "Content updates", "Performance audits"],
    tech: ["GitHub Actions", "Sentry"],
    timeline: "Ongoing Retainer",
    suits: "All digital products"
  }
];

export default function Services() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 px-6 md:px-12 bg-muted/50 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive digital engineering tailored for distinct business models. From initial architecture to continuous deployment.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl space-y-12 md:space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className="scroll-mt-32" id={service.id}>
              <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-5 gap-12">
                  
                  <div className="lg:col-span-3 space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{service.desc}</p>
                    
                    <div>
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Key Benefits</h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {service.benefits.map(benefit => (
                          <li key={benefit} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-2 bg-muted/50 rounded-2xl p-6 border border-border space-y-6">
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-2">Ideal For</div>
                      <div className="text-muted-foreground">{service.suits}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-2">Typical Timeline</div>
                      <div className="text-muted-foreground">{service.timeline}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-3">Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border flex flex-col gap-3">
                      <Link href={`/services/${service.slug}`} className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:scale-105 transition-all shadow-md shadow-primary/20">
                        Explore Full Page <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link href="/contact" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm">
                        Quick enquiry <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-6">Not sure what you need?</h2>
        <Link href="/contact" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-lg">
          Talk to an Engineer
        </Link>
      </section>
    </div>
  );
}
