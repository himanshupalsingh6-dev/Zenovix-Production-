import { Link } from "wouter";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import logoLight from "@/assets/brand/zenovix-logo-light-bg.jpg";
import logoDark from "@/assets/brand/zenovix-logo-dark-bg.jpg";
import { CONTACT, getWhatsappHref, getMailtoHref } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <img src={logoLight} alt="Zenovix Technologies" className="h-9 w-9 rounded-lg object-cover shadow-md dark:hidden" />
              <img src={logoDark} alt="Zenovix Technologies" className="h-9 w-9 rounded-lg object-cover shadow-md hidden dark:block" />
              <span className="font-bold text-xl tracking-tight text-foreground">Zenovix</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We build premium digital products for ambitious businesses. From strategy to deployment, we engineer success.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter (coming soon)" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn (coming soon)" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="GitHub (coming soon)" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/process" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Process</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/technologies" className="text-muted-foreground hover:text-primary transition-colors text-sm">Tech Stack</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Web Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Custom Software</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">App Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cloud Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>{CONTACT.addressShort}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={getMailtoHref()} className="hover:text-primary transition-colors">{CONTACT.email}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={CONTACT.primaryPhoneHref} className="hover:text-primary transition-colors">{CONTACT.primaryPhone}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-primary shrink-0" />
                <a href={getWhatsappHref()} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{CONTACT.whatsappNumber}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zenovix Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
