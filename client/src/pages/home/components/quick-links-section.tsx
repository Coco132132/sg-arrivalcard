import { Link } from "react-router-dom";
import { ShieldCheck, Users, AlertTriangle, Calendar, CreditCard, FileQuestion } from "lucide-react";

const quickLinks = [
  {
    to: "/official-and-free",
    icon: ShieldCheck,
    title: "Official & Free",
    description: "Use only the official ICA channel — no fees, no middlemen.",
  },
  {
    to: "/3-day-rule",
    icon: Calendar,
    title: "3-Day Rule",
    description: "Submit within 3 days before arrival. Use our date checker.",
  },
  {
    to: "/who-needs-to-submit",
    icon: FileQuestion,
    title: "Who Needs to Submit",
    description: "Check if the SGAC applies to your nationality and travel type.",
  },
  {
    to: "/group-submission",
    icon: Users,
    title: "Group Submission",
    description: "Submit for families or groups in one batch — save time.",
  },
  {
    to: "/common-mistakes",
    icon: AlertTriangle,
    title: "Common Mistakes",
    description: "Avoid rejected submissions: expired passports, wrong dates, typos.",
  },
];

export function QuickLinksSection() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="group flex items-start gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-4.5 h-4.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm leading-snug">
                    {link.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
