import { CheckCircle2, Shield, Clock, Banknote } from "lucide-react";

const KEY_POINTS = [
  {
    icon: Shield,
    label: "Official Channel",
    desc: "Only submit via Singapore ICA website",
  },
  {
    icon: Banknote,
    label: "Completely Free",
    desc: "No fees, no charges, no surprises",
  },
  {
    icon: Clock,
    label: "Within 3 Days Before Arrival",
    desc: "Submit 3 days before to 4 hours before your flight",
  },
];

export function HeroSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            SG Arrival Card Guide
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to complete your Singapore Arrival Card (SGAC)
            — quickly, correctly, and without cost.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {KEY_POINTS.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Icon className="size-5 text-primary" strokeWidth={1.75} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-foreground">{label}</span>
                  <CheckCircle2 className="size-3.5 text-success shrink-0" strokeWidth={2.5} />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
