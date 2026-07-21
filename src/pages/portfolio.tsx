import { useState } from "react";
import { ExternalLink, Clock } from "lucide-react";
import greenfeels from "@/assets/portfolio/greenfeels.png";
import plutoze from "@/assets/portfolio/plutoze.png";
import farmfresh from "@/assets/portfolio/farmfresh.png";
import minitpe from "@/assets/portfolio/minitpe.png";
import threadclothes from "@/assets/portfolio/threadclothes.png";
import uoons from "@/assets/portfolio/uoons.png";
import twinleaves from "@/assets/portfolio/twinleaves.png";

// To add a new project later: append an object to this array with an image,
// category, tech badges and feature bullets. No other changes are required —
// the grid, filters, and "coming soon" live-link handling all scale automatically.
const projects = [
  {
    id: "greenfeels",
    title: "Greenfeels: Sustainable Ecom",
    category: "Website",
    image: greenfeels,
    tech: ["E-Commerce", "SEO", "Responsive Design"],
    features: [
      "Curated eco-friendly essentials in a clean, responsive design for conscious shoppers.",
      "Highlighted plastic-free, vegan and zero-waste collections in a clear category layout.",
      "Built to optimise mobile checkout and promote sustainable living with ease.",
      "Designed with SEO-friendly structure and fast load to target green-focused audiences.",
    ],
    liveUrl: "https://greenfeels.in/",
  },
  {
    id: "plutoze",
    title: "Plutoze",
    category: "Website",
    image: plutoze,
    tech: ["Fintech", "Web3", "Mobile-First"],
    features: [
      "Non-custodial multi-chain wallet giving users full control of their crypto.",
      "Crypto-to-fiat debit card accepted globally with up to 3.5% crypto back.",
      "Instant swap & send features across major chains with a simplified UX.",
      "Developed with mobile-first design and optimized for global crypto usage.",
    ],
    liveUrl: "https://www.plutope.io/",
  },
  {
    id: "farm-fresh-co",
    title: "Farm Fresh Co.",
    category: "Website",
    image: farmfresh,
    tech: ["E-Commerce", "Shopify", "Brand Storytelling"],
    features: [
      "Millet-based brand with fresh, sustainable foods for modern lifestyles.",
      "Clean, responsive design showcasing collections like premixes and healthy snacks.",
      "Emphasised eco-friendly credentials and age-old grain goodness.",
      "Mobile-optimised checkout and clear brand mission to build trust and conversions.",
    ],
    liveUrl: "https://farmfres.co/",
  },
  {
    id: "minitpe",
    title: "MinitPe: Food Taxi and Grocery",
    category: "Mobile App",
    image: minitpe,
    tech: ["React Native", "Real-Time Tracking", "Payments"],
    features: [
      "One-stop super app: food, grocery, rides & more in minutes.",
      "Instant-taxi, courier & parcel booking with real-time tracking.",
      "Farm-fresh produce, organic essentials & zero-waste marketplace.",
      "Integrated mobile checkout for seamless shopping & quick payments.",
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.ghiniba.customer&pcampaignid=web_share",
  },
  {
    id: "threadclothes",
    title: "Threadclothes Women's Fashion",
    category: "Mobile App",
    image: threadclothes,
    tech: ["React Native", "E-Commerce", "Search & Filters"],
    features: [
      "Trendy women's fashion app with 1000+ styles and daily flat 30-60% deals.",
      "Supports a wide range of sizes and intuitive search by colour, pattern, or look.",
      "Free shipping & 7-day exchange/returns plus secure checkout.",
      "Clean, mobile-first browsing experience built for fast, effortless shopping.",
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.threadclothes.android&pcampaignid=web_share",
  },
  {
    id: "uoons",
    title: "Uoons Electronics Shopping",
    category: "Mobile App",
    image: uoons,
    tech: ["React Native", "Payments", "Multi-Store"],
    features: [
      "Offers wholesaler-priced electronics starting from ₹49 for brand-heavy shopping.",
      "Supports Cash on Delivery, No-Cost EMI and multiple UPI/wallet payment options.",
      "Fast shipping on orders above ₹499 and a 7-day return/refund policy.",
      "Multi-store range: mobiles, gaming consoles, smart gadgets and more under one roof.",
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.uoons.india&pcampaignid=web_share",
  },
  {
    id: "twinleaves",
    title: "Twinleaves: Grocery App",
    category: "Mobile App",
    image: twinleaves,
    tech: ["React Native", "Loyalty Rewards", "Payments"],
    features: [
      "Everyday grocery and essentials delivered fast in your city.",
      "Clean interface with categories for staples, produce, snacks & more.",
      "Discount offers and in-app wallet credits for repeat shoppers.",
      "Extensive selection of fresh fruits, vegetables and daily essentials.",
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.twinleaves&pcampaignid=web_share",
  },
];

const categories = ["All", "Website", "Mobile App"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 px-6 md:px-12 bg-muted/50 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Our <span className="text-primary">Work</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real products we've designed and built for our clients — websites and mobile apps engineered to perform.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-foreground text-background shadow-md"
                    : "bg-card border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="h-48 w-full relative border-b border-border/50 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-foreground border border-border">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside mb-6">
                    {project.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-border flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        View Live Project <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground cursor-not-allowed"
                        title="Live link coming soon"
                      >
                        <Clock className="w-4 h-4" /> Live link coming soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
