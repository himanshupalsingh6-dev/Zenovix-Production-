import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-9xl font-extrabold text-muted mb-4 opacity-50">404</div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Check the URL or return to our homepage.
        </p>
        <Link href="/" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-md">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
