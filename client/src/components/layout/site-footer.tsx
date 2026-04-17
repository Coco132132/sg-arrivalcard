import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Disclaimer */}
        <div className="flex gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
          <ShieldCheck className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            This website is an independent guide and is not affiliated with the Singapore government or ICA. We do not collect, store, or process any personal data.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} SG Arrival Card Guide. All rights reserved.</p>
          <nav className="flex flex-wrap gap-4">
            <Link to="/official-free" className="hover:text-foreground transition-colors">Official & Free</Link>
            <Link to="/3-day-rule" className="hover:text-foreground transition-colors">3-Day Rule</Link>
            <Link to="/who-needs" className="hover:text-foreground transition-colors">Who Needs</Link>
            <Link to="/group-submission" className="hover:text-foreground transition-colors">Group</Link>
            <Link to="/common-mistakes" className="hover:text-foreground transition-colors">Mistakes</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
