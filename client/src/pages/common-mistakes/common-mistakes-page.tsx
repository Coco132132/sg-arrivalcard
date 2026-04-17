import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, AlertCircle, CheckCircle, ExternalLink, ShieldAlert } from "lucide-react";

const LAST_UPDATED = "April 17, 2026";

const SCAM_WARNING = {
  title: "How to Spot a Scam",
  description: "There are fake websites and services that charge money for SGAC submission. Learn to protect yourself.",
  items: [
    {
      title: "The official site is the only free option",
      description: "ica.gov.sg is the sole official channel. Any website asking for payment to submit your SGAC is a scam.",
      severity: "critical",
    },
    {
      title: "Watch for look-alike domains",
      description: "Scammers use domains like sgarrivalcard.com, sgac-form.com, or singapore-arrival-card.org. Always verify the URL starts with ica.gov.sg.",
      severity: "critical",
    },
    {
      title: "No government agency uses WhatsApp or SMS for SGAC",
      description: "ICA does not send links via WhatsApp or SMS to submit your SGAC. Any such message is a phishing attempt.",
      severity: "critical",
    },
    {
      title: "Agents or 'concierge' services are unnecessary",
      description: "The form takes 5–10 minutes. Paying an agent to do it for you is a waste of money and your data may be misused.",
      severity: "warning",
    },
    {
      title: "Scam reports to ICA",
      description: "If you encounter a suspicious site, report it to ICA through their official feedback channel.",
      severity: "info",
    },
  ],
};

const COMMON_MISTAKES = [
  {
    category: "Wrong Personal Details",
    icon: AlertCircle,
    mistakes: [
      {
        title: "Name doesn't match passport",
        description: "Your name must be entered exactly as it appears on your passport's Machine Readable Zone (MRZ). Any mismatch can cause rejection at the border.",
        consequence: "Possible denial of boarding or border rejection.",
      },
      {
        title: "Passport number typos",
        description: "Double-check every digit. Common mistakes include 0/O confusion, 1/I confusion, and missing leading zeros.",
        consequence: "Form invalidated; may need to re-submit under time pressure.",
      },
      {
        title: "Wrong nationality",
        description: "Select your passport nationality, not your citizenship or place of birth.",
        consequence: "Incorrect risk assessment; may be flagged for additional screening.",
      },
    ],
  },
  {
    category: "Date Errors",
    icon: AlertTriangle,
    mistakes: [
      {
        title: "Submitting too early",
        description: "Submitting more than 3 days (72 hours) before arrival. The system will reject early submissions.",
        consequence: "Must re-submit within the valid window, potentially causing last-minute stress.",
      },
      {
        title: "Confusing arrival and departure dates",
        description: "The 3-day window is calculated from your arrival date, not departure from Singapore.",
        consequence: "If submitted on the wrong date, may be outside the valid window.",
      },
      {
        title: "Assuming same-day submission works",
        description: "You cannot submit on the day of arrival. You need at least some portion of the 3 days before.",
        consequence: "No submission; may face issues at check-in or border.",
      },
    ],
  },
  {
    category: "Accommodation & Itinerary Mistakes",
    icon: AlertCircle,
    mistakes: [
      {
        title: "Hotel name not matching booking",
        description: "If your accommodation is cancelled or you provide a different name, update your SGAC before travel.",
        consequence: "Border officers may question your stated accommodation.",
      },
      {
        title: "Staying with friends — no hotel",
        description: "Enter your friend's residential address under accommodation. Do not leave it blank.",
        consequence: "Incomplete form; may be flagged for manual review.",
      },
      {
        title: "Multiple trips in one form",
        description: "Each arrival requires a separate SGAC submission, even if it's within a short period.",
        consequence: "Each trip's form must match its specific dates and accommodation.",
      },
    ],
  },
  {
    category: "Health & Declaration",
    icon: AlertTriangle,
    mistakes: [
      {
        title: "Not reading the health questions carefully",
        description: "Some travellers skip or misread the health declaration questions. Take time to answer each one accurately.",
        consequence: "Providing false information on an immigration form is a serious offense.",
      },
      {
        title: "Forgetting to update if symptoms appear",
        description: "If you develop symptoms between submission and arrival, you may need to re-declare or seek medical advice.",
        consequence: "Health risk and potential legal implications.",
      },
    ],
  },
];

const FAQ_ITEMS = [
  {
    question: "Is there an official SGAC app?",
    answer: "Yes, the SGAC can be submitted via the official ICA website (ica.gov.sg) and the MyICA mobile app. Do not use third-party apps.",
  },
  {
    question: "Can I correct my SGAC after submission?",
    answer: "You can submit a new SGAC with corrected information before your arrival. The most recent valid submission will be referenced at the border.",
  },
  {
    question: "What happens if I made a mistake but already arrived?",
    answer: "If the error is minor, it may not cause immediate issues. However, incorrect information on immigration forms is a violation. Contact ICA if you realize a significant error after arrival.",
  },
  {
    question: "Are there third-party services that can help?",
    answer: "No third-party service is needed or recommended. The form is straightforward, free, and available 24/7. Paying for help is unnecessary and risks your data.",
  },
  {
    question: "I received an email or SMS about my SGAC. Is it real?",
    answer: "ICA does not send unsolicited emails or SMS about SGAC submissions. Do not click any links in such messages. Always go directly to ica.gov.sg.",
  },
];

function MistakeCard({
  title,
  description,
  consequence,
}: {
  title: string;
  description: string;
  consequence: string;
}) {
  return (
    <div className="space-y-2 rounded-lg border border-border p-4">
      <h4 className="font-medium text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex items-start gap-2 rounded-md bg-destructive/5 p-2 text-sm">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
        <span className="text-destructive font-medium">Consequence: </span>
        <span className="text-muted-foreground">{consequence}</span>
      </div>
    </div>
  );
}

function SeverityBadge({ severity }: { severity: string }) {
  const config: Record<string, { label: string; className: string }> = {
    critical: { label: "Critical", className: "bg-destructive text-destructive-foreground" },
    warning: { label: "Warning", className: "bg-warning text-warning-foreground" },
    info: { label: "Info", className: "bg-info text-info-foreground" },
  };
  const { label, className } = config[severity] || config.info;
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${className}`}>
      {label}
    </span>
  );
}

export default function CommonMistakesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Common Mistakes & Scam Warning</span>
          </nav>
        </div>
      </header>

      {/* Disclaimer Banner */}
      <div className="bg-accent/50 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <p className="text-sm text-muted-foreground text-center">
            <ShieldAlert className="inline h-4 w-4 mr-1.5 -mt-0.5 text-muted-foreground" />
            This website is an independent guide and is not affiliated with the Singapore government or ICA.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-10 space-y-10">
        {/* Page Title */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-destructive" />
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Common Mistakes & Scam Warning
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Avoid these frequent errors that cause SGAC rejections or delays, and learn how to protect yourself from fraudulent services.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </section>

        {/* Scam Warning Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-6 w-6 text-destructive" />
            <h2 className="text-xl font-semibold text-foreground">Scam Warning</h2>
          </div>
          <Card className="overflow-hidden border-destructive/30 bg-destructive/5">
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-foreground">{SCAM_WARNING.title}</h3>
                <p className="text-sm text-muted-foreground">{SCAM_WARNING.description}</p>
              </div>
              <div className="space-y-3">
                {SCAM_WARNING.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success shrink-0" />
                        <span className="font-medium text-foreground">{item.title}</span>
                        <SeverityBadge severity={item.severity} />
                      </div>
                      <p className="text-sm text-muted-foreground pl-6">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <a
                  href="https://www.ica.gov.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Visit official ICA website
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Card>
        </section>

        {/* Common Mistakes Sections */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-warning" />
            <h2 className="text-xl font-semibold text-foreground">Common Mistakes</h2>
          </div>
          <div className="space-y-8">
            {COMMON_MISTAKES.map((category) => (
              <Card key={category.category} className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <category.icon className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                </div>
                <div className="space-y-3">
                  {category.mistakes.map((mistake, idx) => (
                    <MistakeCard
                      key={idx}
                      title={mistake.title}
                      description={mistake.description}
                      consequence={mistake.consequence}
                    />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Prevention Tips</h2>
          <Card className="p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/10">
                    <span className="text-sm font-bold text-success">1</span>
                  </div>
                  <span className="font-medium text-foreground">Double-check all details</span>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  Compare every field against your passport before submitting.
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/10">
                    <span className="text-sm font-bold text-success">2</span>
                  </div>
                  <span className="font-medium text-foreground">Submit within the 3-day window</span>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  Not too early, not too late. Use the{" "}
                  <Link to="/tools/date-checker" className="text-primary hover:underline">
                    Date Checker tool
                  </Link>{" "}
                  to confirm.
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/10">
                    <span className="text-sm font-bold text-success">3</span>
                  </div>
                  <span className="font-medium text-foreground">Save your confirmation</span>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  Keep a screenshot or email copy of your submission reference.
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/10">
                    <span className="text-sm font-bold text-success">4</span>
                  </div>
                  <span className="font-medium text-foreground">Only use ica.gov.sg</span>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  Never pay for SGAC submission. The official site is always free.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related Links */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/official-free"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Official & Free
            </Link>
            <Link
              to="/3-day-rule"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              3-Day Rule
            </Link>
            <Link
              to="/tools/date-checker"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Date Checker Tool
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-accent/30">
        <div className="mx-auto max-w-4xl px-4 py-6 space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            This website is an independent guide and is not affiliated with the Singapore government or ICA.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/official-free" className="hover:text-foreground transition-colors">
              Official & Free
            </Link>
            <Link to="/3-day-rule" className="hover:text-foreground transition-colors">
              3-Day Rule
            </Link>
            <Link to="/who-needs" className="hover:text-foreground transition-colors">
              Who Needs to Submit
            </Link>
            <Link to="/group-submission" className="hover:text-foreground transition-colors">
              Group Submission
            </Link>
            <Link to="/common-mistakes" className="hover:text-foreground transition-colors">
              Common Mistakes
            </Link>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </footer>
    </div>
  );
}
