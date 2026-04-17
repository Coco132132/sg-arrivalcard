import { PageHeader } from "@/components/shared/page-header";
import { FaqSection } from "@/components/shared/faq-section";
import { InfoCard } from "@/components/shared/info-card";
import { AlertBanner } from "@/components/shared/alert-banner";
import { SgacDateChecker } from "@/components/tools/sgac-date-checker";
import { LastUpdated } from "@/components/shared/last-updated";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export default function SgacDateCheckerPage() {
  return (
    <div className="space-y-8 pb-16">
      <PageHeader
        title="SGAC Date Checker"
        description="Check if you can submit your Singapore Arrival Card based on your arrival date."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Date Checker" }]}
      />

      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            When can you submit?
          </h2>
          <p className="text-muted-foreground mb-6">
            Enter your planned arrival date to see the valid submission window for your SGAC.
          </p>
          <SgacDateChecker />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 space-y-4">
        <h3 className="text-lg font-medium text-foreground">Key Rules</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard
            title="Earliest Submission"
            description="You can submit your SGAC starting from 3 days (72 hours) before your arrival date."
            icon="calendar-check"
          />
          <InfoCard
            title="Latest Submission"
            description="You must submit before completing immigration clearance upon arrival in Singapore."
            icon="calendar-x"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <AlertBanner
          type="info"
          title="Important"
          content="The 3-day window is calculated based on Singapore time. If you arrive on Tuesday at midnight, you can submit from Friday 00:01 Singapore time."
        />
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <FaqSection
          items={[
            {
              question: "Can I submit my SGAC on the day of arrival?",
              answer: "Yes, you can submit your SGAC on the same day as your arrival, as long as it's within the valid 3-day window.",
            },
            {
              question: "What happens if I arrive very early in the morning?",
              answer: "You can still submit your SGAC before arriving. Many travelers submit the evening before or early morning on the day of arrival.",
            },
            {
              question: "Can I submit after arriving in Singapore?",
              answer: "In most cases, you should submit before immigration clearance. However, if you forgot, speak to the immigration officer - they may allow you to submit on the spot.",
            },
            {
              question: "Does the 3-day rule apply to all nationalities?",
              answer: "Yes, the 3-day submission window applies to all visitors who are required to submit an SGAC, regardless of nationality.",
            },
          ]}
        />
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">
            Ready to submit? Visit the{" "}
            <a
              href="https://www.ica.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Official ICA Website
              <ExternalLink className="w-3 h-3" />
            </a>{" "}
            or{" "}
            <Link to="/official-free" className="text-primary hover:underline">
              learn more about the submission process
            </Link>
            .
          </p>
        </div>
      </section>

      <LastUpdated date="2026-04-17" />
    </div>
  );
}
