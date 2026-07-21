import { Link, useLocation } from "wouter";
import { Menu, X, Moon, Sun, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import logoDark from "@/assets/brand/zenovix-logo-dark-bg.jpg";
import logoLight from "@/assets/brand/zenovix-logo-light-bg.jpg";

const links = [
  { href: "/",             label: "Home" },
  { href: "/about",        label: "About" },
  { href: "/services",     label: "Services" },
  { href: "/portfolio",    label: "Portfolio" },
  { href: "/process",      label: "Process" },
  { href: "/technologies", label: "Tech Stack" },
  { href: "/faq",          label: "FAQ" },
  { href: "/contact",      label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Read from localStorage; default is dark (matches index.html script)
  const [isDark, setIsDark] = useState<boolean>(() => {
    try { return localStorage.getItem("zx-theme") !== "light"; } catch { return true; }
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("zx-theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("zx-theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src={isDark ? logoDark : logoLight}
            alt="Zenovix Technologies"
            className="h-9 w-9 rounded-lg object-cover shadow-lg group-hover:scale-105 transition-transform"
          />
          <span className="font-bold text-xl tracking-tight text-foreground">Zenovix</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${location === link.href ? "text-primary" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link href="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-1">
              Start Project
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-border py-4 px-6 flex flex-col gap-2 shadow-xl animate-in slide-in-from-top-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`p-3 rounded-lg text-base font-medium flex items-center justify-between ${location === link.href ? "bg-primary/10 text-primary" : "text-foreground"}`}
            >
              {link.label}
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
          ))}
          <Link href="/contact" className="mt-4 bg-primary text-primary-foreground p-3 rounded-lg text-center font-medium shadow-md">
            Start a Project
          </Link>
        </div>
      )}
    </header>
  );
}
