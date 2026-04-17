import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck, ExternalLink, AlertTriangle, CheckCircle2, Info } from "lucide-react";

const LAST_UPDATED = "April 17, 2026";

const faqs = [
  {
    question: "Is the SG Arrival Card really 100% free?",
    answer:
      "Yes. Submitting through the official ICA portal is completely free. If a website asks you to pay a fee to complete your SGAC submission, it is not the official channel — it is a third-party intermediary or a scam.",
  },
  {
    question: "Are third-party websites that offer to 'help' with SGAC legitimate?",
    answer:
      "No. Third-party services that charge fees to fill out or submit your SGAC are not affiliated with ICA or the Singapore government. They may ask for your passport details and other personal information — use with caution.",
  },
  {
    question: "Is the SGAC mobile app official?",
    answer:
      "Yes. The official app is \"SG Arrival Card\" published by Immigration & Checkpoints Authority (ICA) Singapore. Download it only from the Apple App Store or Google Play Store.",
  },
  {
    question: "What if I made a mistake on my SGAC submission?",
    answer:
      "You can submit a new SGAC with corrected information before your arrival. The system accepts the latest valid submission for each traveler. There is no need to pay anyone to fix an error.",
  },
  {
    question: "Can I submit SGAC through a travel agent?",
    answer:
      "Travel agents may help you submit it, but you remain responsible for the accuracy of the information. The service should be free through the official portal. Never hand over your passport or personal data to unofficial channels.",
  },
];

export default function OfficialFreePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span>Official &amp; Free</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">SG Arrival Card: Official Channel &amp; Free of Charge</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The SG Arrival Card (SGAC) is submitted exclusively through ICA's official platform. There are no fees, no third-party shortcuts, and no official mobile charges.
          </p>
        </div>

        {/* Disclaimer */}
        <Alert variant="warning" className="border-warning/40 bg-warning/5">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <AlertDescription className="text-sm">
            This website is an independent guide and is not affiliated with the Singapore government or ICA.
          </AlertDescription>
        </Alert>

        {/* Official Channel */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">The Only Official Submission Channel</h2>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              All SG Arrival Card submissions are processed exclusively through the Immigration &amp; Checkpoints Authority (ICA) of Singapore.
            </p>
            <div className="space-y-3">
              <OfficialChannelOption
                title="ICA Website (Primary)"
                url="https://www.ica.gov.sg"
                description="Fill out and submit the SGAC online directly through the ICA portal."
              />
              <OfficialChannelOption
                title="SGAC Mobile App"
                url=""
                description='Search "SG Arrival Card" by ICA Singapore in the Apple App Store or Google Play Store.'
              />
            </div>
          </div>
        </section>

        {/* Free */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-success" />
            <h2 className="text-xl font-semibold">It Is Completely Free</h2>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="grid gap-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-success/5 border border-success/20">
                <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">No fees, ever</p>
                  <p className="text-sm text-muted-foreground">ICA does not charge for SGAC submission — not at the website, not in the app.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm text-destructive">Charging websites are scams</p>
                  <p className="text-sm text-muted-foreground">Any site that asks for payment to submit your SGAC is unofficial. Do not provide payment details or personal data.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to spot unofficial sites */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">How to Identify Unofficial Sites</h2>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "The URL does not end with .gov.sg",
                "They ask for a credit card or payment before letting you submit",
                "They promise 'guaranteed approval' or 'fast-track' submission",
                "They send you unsolicited emails or messages offering to help with SGAC",
                "The website has many ads or pop-ups related to Singapore travel",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Direct CTA */}
        <section className="rounded-xl border border-primary/30 bg-primary/5 p-6 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="font-semibold">Ready to submit your SGAC?</p>
            <p className="text-sm text-muted-foreground">Go directly to the official ICA portal — no account needed.</p>
          </div>
          <a
            href="https://www.ica.gov.sg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shrink-0"
          >
            Visit ICA.gov.sg
            <ExternalLink className="h-4 w-4" />
          </a>
        </section>

        {/* Related Links */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <NavCard to="/3-day-rule" title="3-Day Rule" description="Learn the submission window timing" />
            <NavCard to="/who-needs" title="Who Needs to Submit" description="Check if you need an SGAC" />
            <NavCard to="/group-submission" title="Group Submission" description="Submit for families or groups" />
            <NavCard to="/common-mistakes" title="Common Mistakes" description="Avoid errors and scams" />
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="rounded-xl border border-border overflow-hidden">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-4 text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Footer meta */}
        <div className="text-xs text-muted-foreground border-t border-border pt-4">
          Last updated: {LAST_UPDATED}
        </div>
      </div>
    </div>
  );
}

function OfficialChannelOption({ title, url, description }: { title: string; url: string; description: string }) {
  return (
    <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-muted/50">
      <div className="space-y-0.5">
        <p className="font-medium text-sm">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm shrink-0"
        >
          Visit
        </a>
      )}
    </div>
  );
}

function NavCard({ to, title, description }: { to: string; title: string; description: string }) {
  return (
    <Link
      to={to}
      className="flex flex-col gap-1 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-accent/40 transition-colors"
    >
      <p className="font-medium text-sm">{title}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </Link>
  );
}
