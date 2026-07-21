import { FaReact, FaNodeJs, FaDocker, FaGithub, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase, SiMongodb, SiFlutter, SiVercel, SiCloudflare, SiPostgresql } from "react-icons/si";

const techCategories = [
  {
    name: "Frontend & Mobile",
    techs: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]", desc: "UI Library" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground", desc: "React Framework" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", desc: "Type Safety" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]", desc: "Styling" },
      { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]", desc: "Cross-platform Mobile" }
    ]
  },
  {
    name: "Backend & Database",
    techs: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]", desc: "Runtime" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]", desc: "NoSQL DB" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]", desc: "Relational DB" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]", desc: "BaaS" }
    ]
  },
  {
    name: "DevOps & Infrastructure",
    techs: [
      { name: "Docker", icon: FaDocker, color: "text-[#2496ED]", desc: "Containerization" },
      { name: "Vercel", icon: SiVercel, color: "text-foreground", desc: "Edge Deployment" },
      { name: "Cloudflare", icon: SiCloudflare, color: "text-[#F38020]", desc: "CDN & Security" },
      { name: "GitHub", icon: FaGithub, color: "text-foreground", desc: "Version Control" },
      { name: "AWS", icon: FaAws, color: "text-[#FF9900]", desc: "Cloud Provider" }
    ]
  }
];

export default function Technologies() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 px-6 md:px-12 bg-muted/50 border-b border-border text-center">
        <div className="container mx-auto max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Our <span className="text-primary">Tech Stack</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We use modern, battle-tested technologies to build scalable, secure, and performant applications.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl space-y-16">
          {techCategories.map((category) => (
            <div key={category.name}>
              <h2 className="text-2xl font-bold text-foreground mb-8 border-b border-border pb-4">{category.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.techs.map((tech) => (
                  <div key={tech.name} className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-primary/50 transition-all group">
                    <tech.icon className={`w-12 h-12 mb-4 group-hover:scale-110 transition-transform ${tech.color}`} />
                    <div className="font-semibold text-foreground">{tech.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Rationale */}
      <section className="py-16 px-6 md:px-12 bg-card border-y border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why this stack?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We don't chase hype. We chose these tools because they provide the best balance of developer velocity, enterprise-grade security, and long-term maintainability. This stack allows us to deploy global infrastructure that loads instantly and scales automatically.
          </p>
        </div>
      </section>
    </div>
  );
}
