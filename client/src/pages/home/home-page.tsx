import { HeroSection } from "./components/hero-section";
import { QuickLinksSection } from "./components/quick-links-section";
import { SgacDateChecker } from "@/components/tools/sgac-date-checker";
import { LastUpdated } from "@/components/shared/last-updated";
import { FaqSection } from "@/components/shared/faq-section";
import { InfoCard } from "@/components/shared/info-card";

export default function HomePage() {
  return (
    <div className="space-y-12 pb-16">
      <HeroSection />
      <QuickLinksSection />

      {/* Date Checker Tool */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            SGAC Date Checker
          </h2>
          <p className="text-muted-foreground mb-6">
            Find out when you can submit your SG Arrival Card based on your arrival date.
          </p>
          <SgacDateChecker />
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            title="Official Channel"
            description="Only submit through the official ICA website or SGAC app. No third-party services needed."
            icon="link"
            href="/official-free"
          />
          <InfoCard
            title="Completely Free"
            description="The SG Arrival Card is 100% free. Never pay for this service."
            icon="check-circle"
            href="/official-free"
          />
          <InfoCard
            title="Submit Within 3 Days"
            description="You can only submit your SGAC between 3 days before and up to arrival."
            icon="calendar"
            href="/3-day-rule"
          />
        </div>
      </section>

      {/* Home FAQ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <FaqSection
          items={[
            {
              question: "What is the Singapore Arrival Card (SGAC)?",
              answer:
                "The SG Arrival Card is a free, mandatory digital submission required for all visitors entering Singapore. It collects basic travel and health information to facilitate immigration clearance.",
            },
            {
              question: "How do I submit the SG Arrival Card?",
              answer:
                "You can submit your SGAC through the official ICA website (https://www.ica.gov.sg) or download the SGAC mobile app. Both are free and take only a few minutes to complete.",
            },
            {
              question: "Is the SG Arrival Card really free?",
              answer:
                "Yes, absolutely. The SGAC is completely free to submit. Be wary of third-party websites or services that charge fees — they are unnecessary and not affiliated with ICA.",
            },
            {
              question: "When should I submit the SGAC?",
              answer:
                "You must submit your SGAC between 3 days before your planned arrival in Singapore and before completing immigration on arrival. You cannot submit earlier than 3 days in advance.",
            },
          ]}
        />
      </section>

      <LastUpdated date="2026-04-17" />
    </div>
  );
}
