import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Users, ArrowRight, ExternalLink, CheckCircle2, AlertTriangle, Info } from "lucide-react";

const lastUpdated = "April 17, 2026";

const faqs = [
  {
    q: "Who can submit as a group?",
    a: "A group submission can be made for family members, tour groups, or company employees traveling together on the same flight or boat. The primary submitter acts on behalf of all members in the group.",
  },
  {
    q: "How many people can be in one group submission?",
    a: "There is no strict upper limit, but ICA recommends keeping groups manageable (typically under 30 members) to avoid submission errors. For very large groups, consider splitting into multiple submissions.",
  },
  {
    q: "Can I add or remove someone after submitting?",
    a: "No. Once a group submission is made, you cannot edit it. You must delete the submission and re-submit. Make sure all passport details are correct before confirming.",
  },
  {
    q: "Do all group members need to use the same email?",
    a: "No. Each traveler can provide their own email address to receive their SGAC confirmation. Only the primary submitter's contact details are required for the group submission itself.",
  },
  {
    q: "What if one member doesn't have an email?",
    a: "The submission can still proceed. Each member's SGAC will be generated with a unique reference number. The primary submitter should keep a record of all reference numbers for the group.",
  },
];

const keyPoints = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "One submitter, multiple travelers",
    desc: "Only one person needs to create the group submission on behalf of everyone.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "All-or-nothing",
    desc: "Group members are submitted together. If one detail is wrong, you must delete and re-submit the entire group.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Check every detail carefully",
    desc: "Passport numbers, names, and dates of birth must match the actual travel documents exactly.",
  },
  {
    icon: <Info className="w-5 h-5" />,
    title: "Same arrival date required",
    desc: "All members in a group submission must be arriving on the same date via the same transport.",
  },
];

export default function GroupSubmissionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            SGAC Guide
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/official-and-free" className="hover:text-foreground transition-colors">Official & Free</Link>
            <Link to="/3-day-rule" className="hover:text-foreground transition-colors">3-Day Rule</Link>
            <Link to="/who-needs-to-submit" className="hover:text-foreground transition-colors">Who Needs to Submit</Link>
            <Link to="/common-mistakes" className="hover:text-foreground transition-colors">Common Mistakes</Link>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">Group Submission</span>
        </div>

        {/* Page title */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-3 text-xs font-medium">
            Feature Guide
          </Badge>
          <h1 className="text-3xl font-semibold text-foreground tracking-tight mb-2">
            Group Submission
          </h1>
          <p className="text-muted-foreground text-base">
            Submit the SG Arrival Card for multiple travelers in a single session.
          </p>
        </div>

        {/* Alert */}
        <Alert className="mb-8 border-border bg-muted/30">
          <Info className="w-4 h-4" />
          <AlertDescription className="text-sm">
            <strong>Tip:</strong> Group submission is available on the official ICA platform only. No third-party service can do this on your behalf — and you should never pay for it.
          </AlertDescription>
        </Alert>

        {/* Key points */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4">What you need to know</h2>
          <div className="space-y-3">
            {keyPoints.map((point, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-lg border border-border bg-card"
              >
                <div className="text-muted-foreground mt-0.5 shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-0.5">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* When to use */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4">When to use group submission</h2>
          <div className="rounded-lg border border-border bg-card p-5 space-y-3">
            <p className="text-sm text-muted-foreground">
              Group submission is suitable when:
            </p>
            <ul className="space-y-2">
              {[
                "You are traveling with family members (including children) on the same flight or boat",
                "You are a tour leader managing a group entering Singapore together",
                "A company is sending multiple employees on the same trip",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Step by step */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4">How to submit as a group</h2>
          <div className="rounded-lg border border-border overflow-hidden">
            {[
              {
                step: "01",
                title: "Go to the official ICA portal",
                desc: "Visit the SG Arrival Card submission page on the ICA website. Select \"Group Submission\" before entering any details.",
              },
              {
                step: "02",
                title: "Enter the primary traveler's details",
                desc: "The primary submitter provides their passport information, travel dates, and contact details first.",
              },
              {
                step: "03",
                title: "Add each additional traveler",
                desc: "Add each group member one by one. All members must share the same arrival date and port of entry.",
              },
              {
                step: "04",
                title: "Review and confirm",
                desc: "Double-check every passport number, name, and date of birth. Confirming with an error means the entire submission may be invalid.",
              },
              {
                step: "05",
                title: "Receive confirmation",
                desc: "Each traveler will receive an SGAC reference number. Keep these safe — you may need to present them on arrival.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex gap-4 p-4 ${i !== 0 ? "border-t border-border" : ""}`}
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Official CTA */}
        <section className="mb-10">
          <div className="rounded-lg border border-border bg-card p-5 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-1">Ready to submit?</h3>
              <p className="text-sm text-muted-foreground">
                Head to the official ICA SG Arrival Card portal.
              </p>
            </div>
            <a
              href="https://www.ica.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Go to ICA portal
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Related pages */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-foreground mb-4">Related pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { to: "/who-needs-to-submit", label: "Who Needs to Submit", desc: "Check if everyone in your group is required to submit." },
              { to: "/3-day-rule", label: "3-Day Rule", desc: "Know when your group submission window opens." },
              { to: "/common-mistakes", label: "Common Mistakes", desc: "Avoid errors that can invalidate your group's SGAC." },
              { to: "/official-and-free", label: "Official & Free", desc: "Confirm you are using the correct free channel." },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center justify-between gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors group"
              >
                <div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{link.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{link.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-lg font-medium text-foreground mb-4">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-sm font-medium text-foreground text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Disclaimer */}
        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            This website is an independent guide and is not affiliated with the Singapore government or ICA.
          </p>
          <p className="text-xs text-muted-foreground mt-1">Last updated: {lastUpdated}</p>
        </div>
      </main>
    </div>
  );
}
