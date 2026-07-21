import { Cog, Code, LayoutDashboard, Rocket, Search, Terminal, Palette, MessagesSquare, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    title: "1. Requirement Discussion",
    desc: "We start by understanding your business goals, target audience, and operational bottlenecks. We don't just take orders; we act as technical consultants."
  },
  {
    icon: Search,
    title: "2. Research & Architecture",
    desc: "Analyzing competitors and defining the technical stack. We map out database schemas, API structures, and third-party integrations needed for scale."
  },
  {
    icon: LayoutDashboard,
    title: "3. Planning & Wireframing",
    desc: "Creating structural blueprints of the application. This ensures user flows are logical and conversion-optimized before any visual design begins."
  },
  {
    icon: Palette,
    title: "4. UI/UX Design",
    desc: "Crafting premium, brand-aligned visual interfaces. We focus on accessibility, modern aesthetics, and interactive elements that feel bespoke."
  },
  {
    icon: Code,
    title: "5. Development",
    desc: "Writing clean, modular code. Our engineering standards enforce strict typing, component reusability, and robust error handling."
  },
  {
    icon: Terminal,
    title: "6. Testing & QA",
    desc: "Rigorous testing across devices and browsers. We perform load testing, security audits, and user acceptance testing (UAT) to ensure zero critical bugs."
  },
  {
    icon: Rocket,
    title: "7. Deployment",
    desc: "Setting up CI/CD pipelines, configuring domains, and launching the application on scalable cloud infrastructure with zero downtime."
  },
  {
    icon: Cog,
    title: "8. Maintenance & Scaling",
    desc: "Post-launch support, performance monitoring, and iterative feature development. We partner with you for the long haul."
  }
];

export default function Process() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 px-6 md:px-12 bg-muted/50 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            How We <span className="text-primary">Build</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A battle-tested engineering process designed to eliminate risk and deliver premium software on time.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="relative border-l-2 border-border/50 md:ml-6 space-y-12 py-8">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Connector Dot */}
                <div className="absolute w-12 h-12 rounded-full bg-card border-4 border-background shadow-md flex items-center justify-center -left-[25px] top-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Guarantee */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-primary/20">
          <CheckCircle className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">The Zenovix Standard</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We do not outsource. Every line of code is written, reviewed, and deployed by our in-house engineering team to ensure absolute quality control.
          </p>
        </div>
      </section>
    </div>
  );
}
