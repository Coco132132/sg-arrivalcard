import { Link } from "react-router-dom";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-card hover:bg-muted transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 pt-1 text-muted-foreground text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function WhoNeedsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-foreground font-semibold text-lg tracking-tight"
          >
            SGAC Guide
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm text-muted-foreground">
            <Link to="/official-free" className="hover:text-foreground transition-colors">
              Official &amp; Free
            </Link>
            <Link to="/3-day-rule" className="hover:text-foreground transition-colors">
              3-Day Rule
            </Link>
            <Link to="/who-needs" className="text-primary font-medium">
              Who Needs
            </Link>
            <Link to="/group-submission" className="hover:text-foreground transition-colors">
              Group
            </Link>
            <Link to="/mistakes" className="hover:text-foreground transition-colors">
              Mistakes
            </Link>
          </nav>
        </div>
      </header>

      {/* Disclaimer Banner */}
      <div className="bg-warning/10 border-b border-warning/20">
        <div className="max-w-3xl mx-auto px-6 py-2.5">
          <p className="text-xs text-warning-foreground text-center">
            This website is an independent guide and is not affiliated with the Singapore government or ICA.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="mb-10">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
            Eligibility
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Who Needs to Submit
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
            Not everyone entering Singapore needs to file an SG Arrival Card. Here is a clear breakdown of who must submit and who is exempt.
          </p>
        </div>

        {/* Exempt vs Required Table */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-5">
            Quick Eligibility Check
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Must Submit */}
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <XCircle className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Must Submit</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "All foreign visitors (short-term visitors)",
                  "Work Pass holders (EP, S-Pass, WP, etc.)",
                  "Student Pass holders",
                  "Long-Term Visit Pass holders",
                  "Diplomats and official passport holders",
                  "Transiting passengers with a stopover",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exempt */}
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
                <h3 className="font-semibold text-foreground">Exempt</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Singapore Citizens and Permanent Residents",
                  "Malaysian citizens entering by land",
                  "Air crew with a crew visa",
                  "Transit passengers staying in the transit area",
                  "Australian Electronic Travel Authority holders",
                  "Government-assigned accommodation guests",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-success mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* By Pass Type */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-5">
            By Pass Type
          </h2>
          <div className="space-y-3">
            {[
              {
                pass: "Tourist / Short-Term Visitor",
                status: "Must Submit",
                statusType: "primary",
                note: "Regardless of nationality, unless your country has a special arrangement.",
              },
              {
                pass: "Work Pass (EP, S-Pass, WP, etc.)",
                status: "Must Submit",
                statusType: "primary",
                note: "Submit within 3 days before arrival. Can be done as part of group submission.",
              },
              {
                pass: "Student Pass",
                status: "Must Submit",
                statusType: "primary",
                note: "Same 3-day window applies.",
              },
              {
                pass: "Long-Term Visit Pass (LTVP)",
                status: "Must Submit",
                statusType: "primary",
                note: "Applies to dependents on LTVP issued by ICA or MOM.",
              },
              {
                pass: "Diplomatic / Official Passport",
                status: "Must Submit",
                statusType: "primary",
                note: "But typically facilitated through embassy channels.",
              },
              {
                pass: "Singapore PR / Citizen",
                status: "Exempt",
                statusType: "success",
                note: "No SGAC required, regardless of travel history.",
              },
              {
                pass: "Malaysian (by land via Causeway / Second Link)",
                status: "Exempt",
                statusType: "success",
                note: "Only for land crossings. Air arrivals still need SGAC.",
              },
            ].map((row) => (
              <div
                key={row.pass}
                className="flex items-center justify-between gap-4 bg-card border border-border rounded-lg px-4 py-3.5"
              >
                <div className="min-w-0">
                  <p className="font-medium text-foreground text-sm">{row.pass}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">
                    {row.note}
                  </p>
                </div>
                <span
                  className={`flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
                    row.statusType === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-success/10 text-success"
                  }`}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Special Cases */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-5">
            Special Cases
          </h2>
          <div className="space-y-3">
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm mb-1">
                    Children and Infants
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every individual entering Singapore, including infants and children, must have their own SGAC submitted. Parents or guardians can submit on behalf of children as part of a group submission.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm mb-1">
                    Frequent Travelers
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If you visit Singapore frequently, you must submit a new SGAC for each arrival. A previous submission does not cover future trips.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm mb-1">
                    Transit Passengers
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If you are transiting through Singapore and will not clear immigration (staying in the transit area), you do not need an SGAC. If you clear immigration even briefly, you must submit one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool CTA */}
        <section className="mb-10">
          <div className="bg-primary/5 border border-primary/15 rounded-xl p-6 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="font-semibold text-foreground mb-1">
                Not sure when to submit?
              </p>
              <p className="text-sm text-muted-foreground">
                Use the SGAC Date Checker to find your submission window.
              </p>
            </div>
            <Link
              to="/#date-checker"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-lg transition-colors flex-shrink-0"
            >
              Open Date Checker
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-5">
            Related Pages
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { to: "/official-free", label: "Official & Free", desc: "Verify the official submission channel" },
              { to: "/3-day-rule", label: "3-Day Rule", desc: "Submission timing explained" },
              { to: "/group-submission", label: "Group Submission", desc: "Submit for family or group" },
              { to: "/mistakes", label: "Common Mistakes", desc: "Avoid errors and scams" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all group"
              >
                <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                  {link.label}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            <FAQItem
              question="Do Malaysian citizens need to submit an SGAC?"
              answer="Malaysian citizens entering Singapore via land (Causeway or Second Link) are exempt and do not need to file an SGAC. However, if a Malaysian citizen arrives by air, they still need to submit one."
            />
            <FAQItem
              question="Do children and babies need their own SGAC?"
              answer="Yes. Every person, including infants and children, must have their own SGAC submission. There is no age exemption. Parents can submit on behalf of their children using the group submission feature."
            />
            <FAQItem
              question="Do Singapore Permanent Residents need to submit?"
              answer="No. Singapore Permanent Residents (PRs) are exempt from SGAC requirements regardless of their nationality or how long they have been away."
            />
            <FAQItem
              question="I have a multiple-entry pass. Do I submit SGAC each time?"
              answer="Yes. Each entry into Singapore requires a separate SGAC submission, even if you hold a valid multiple-entry visa or pass. The submission must be made within 3 days of each arrival."
            />
            <FAQItem
              question="Do transit passengers need an SGAC?"
              answer="Only if they clear immigration. If you stay entirely within the transit area and do not pass through Singapore immigration, you do not need an SGAC."
            />
            <FAQItem
              question="I'm a diplomat. Do I still need to submit?"
              answer="Diplomats holding diplomatic or official passports are technically required to submit an SGAC, but in practice, this is often coordinated through the receiving mission or agency rather than submitted individually via the public portal."
            />
          </div>
        </section>

        {/* Last Updated */}
        <div className="pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Last updated: April 17, 2026 — This page reflects current ICA requirements.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-8">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <p className="text-sm font-semibold text-foreground">SGAC Guide</p>
            <nav className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <Link to="/official-free" className="hover:text-foreground transition-colors">Official &amp; Free</Link>
              <Link to="/3-day-rule" className="hover:text-foreground transition-colors">3-Day Rule</Link>
              <Link to="/who-needs" className="hover:text-foreground transition-colors">Who Needs</Link>
              <Link to="/group-submission" className="hover:text-foreground transition-colors">Group</Link>
              <Link to="/mistakes" className="hover:text-foreground transition-colors">Mistakes</Link>
            </nav>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-5">
            This website is an independent guide and is not affiliated with the Singapore government or ICA. Always verify information on the{" "}
            <a
              href="https://www.ica.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:no-underline"
            >
              official ICA website
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
