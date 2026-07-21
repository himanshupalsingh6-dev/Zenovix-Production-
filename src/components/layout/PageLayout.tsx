import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MessageCircle, ArrowUp } from "lucide-react";
import { getWhatsappHref } from "@/lib/site-config";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-[100dvh] flex flex-col relative">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />

      {/* Floating Actions */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {showTop && (
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-muted transition-all animate-in fade-in"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
        <a 
          href={getWhatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-secondary shadow-lg shadow-secondary/30 flex items-center justify-center text-white hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
