import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { CalendarDays, AlertTriangle, CheckCircle2, Clock, ArrowRight } from "lucide-react";

const LAST_UPDATED = "April 17, 2026";

export default function ThreeDayRulePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-semibold text-foreground">
            SG Arrival Card Guide
          </Link>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link to="/official-free" className="hover:text-foreground transition-colors">Official & Free</Link>
            <Link to="/who-needs" className="hover:text-foreground transition-colors">Who Needs</Link>
            <Link to="/group" className="hover:text-foreground transition-colors">Group</Link>
            <Link to="/mistakes" className="hover:text-foreground transition-colors">Mistakes</Link>
          </nav>
        </div>
      </header>

      {/* Disclaimer Banner */}
      <div className="bg-accent border-b">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <p className="text-sm text-muted-foreground text-center">
            This website is an independent guide and is not affiliated with the Singapore government or ICA.
          </p>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-10">
          <p className="text-sm font-medium text-primary mb-2">The SGAC Timeline</p>
          <h1 className="text-4xl font-bold text-foreground mb-4">3-Day Rule Explained</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You must submit your Singapore Arrival Card (SGAC) within 3 days before your arrival date. This page explains exactly when to submit, the consequences of missing the window, and how to plan ahead.
          </p>
        </div>

        {/* Timeline Visual */}
        <section className="mb-12">
          <div className="bg-card border rounded-xl p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-primary" />
              Submission Window
            </h2>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">📅</span>
                </div>
                <p className="text-sm font-medium text-foreground">Day 1</p>
                <p className="text-xs text-muted-foreground">3 days before</p>
              </div>
              <div className="flex-1 mx-4">
                <div className="h-2 bg-primary/20 rounded-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-success via-primary to-warning rounded-full"></div>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-2">Valid submission window</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">✈️</span>
                </div>
                <p className="text-sm font-medium text-foreground">Arrival</p>
                <p className="text-xs text-muted-foreground">Day 0</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Rules */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">Key Rules</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Earliest: 3 days before arrival</p>
                <p className="text-sm text-muted-foreground">You cannot submit more than 3 days in advance</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Latest: Before immigration clearance</p>
                <p className="text-sm text-muted-foreground">Submit before you reach the immigration counter</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
              <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">No early submissions</p>
                <p className="text-sm text-muted-foreground">If you submit 4+ days early, your SGAC may be rejected or require re-submission</p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Scenarios */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">Example Scenarios</h2>
          <div className="space-y-4">
            <div className="bg-card border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-foreground">Scenario A: Arriving Friday</span>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Earliest submission:</strong> Tuesday → <strong className="text-foreground">Latest submission:</strong> Friday morning
              </p>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-foreground">Scenario B: Arriving Monday</span>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Earliest submission:</strong> Friday → <strong className="text-foreground">Latest submission:</strong> Monday morning
              </p>
            </div>
            <div className="bg-card border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-foreground">Scenario C: Same-day arrival</span>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Earliest submission:</strong> 3 days prior → <strong className="text-foreground">Latest submission:</strong> Immediately upon landing (before immigration)
              </p>
            </div>
          </div>
        </section>

        {/* Date Checker Tool CTA */}
        <section className="mb-12">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Find Your Submission Window
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Enter your arrival date to see exactly when you can submit your SGAC.
            </p>
            <Link
              to="/date-checker"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Open SGAC Date Checker
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* What If You Miss The Window */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">What If You Miss The Window?</h2>
          <Alert variant="warning" className="border-warning/50 bg-warning/5">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <AlertDescription className="text-sm">
              <strong>If you arrive and have not submitted:</strong> You may still submit at the airport before immigration. However, this causes delays. In some cases, you may be directed to a separate counter.
            </AlertDescription>
          </Alert>
          <div className="mt-4 space-y-3">
            <p className="text-sm text-muted-foreground">
              • <strong className="text-foreground">No fine</strong> for late submission if you complete it before immigration
            </p>
            <p className="text-sm text-muted-foreground">
              • <strong className="text-foreground">Delays</strong> are likely as staff process your submission manually
            </p>
            <p className="text-sm text-muted-foreground">
              • <strong className="text-foreground">Prevention:</strong> Set a calendar reminder 3 days before your trip
            </p>
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/official-free"
              className="flex items-center gap-3 p-4 bg-card border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div>
                <p className="font-medium text-foreground">Official & Free</p>
                <p className="text-sm text-muted-foreground">Where to submit for free</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />
            </Link>
            <Link
              to="/who-needs"
              className="flex items-center gap-3 p-4 bg-card border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div>
                <p className="font-medium text-foreground">Who Needs to Submit</p>
                <p className="text-sm text-muted-foreground">Check if you must submit</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />
            </Link>
            <Link
              to="/group"
              className="flex items-center gap-3 p-4 bg-card border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div>
                <p className="font-medium text-foreground">Group Submission</p>
                <p className="text-sm text-muted-foreground">Submit for multiple travelers</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />
            </Link>
            <Link
              to="/mistakes"
              className="flex items-center gap-3 p-4 bg-card border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div>
                <p className="font-medium text-foreground">Common Mistakes</p>
                <p className="text-sm text-muted-foreground">Avoid these errors</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="bg-card border rounded-xl">
            <AccordionItem value="item-1" className="px-4">
              <AccordionTrigger className="text-foreground hover:no-underline">
                Can I submit on the exact day of arrival?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. You can submit on the day of arrival, but you must do so before you reach the immigration counter. Submitting at the last minute is risky—if your flight is delayed, you might miss the window.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="px-4">
              <AccordionTrigger className="text-foreground hover:no-underline">
                What if my trip is postponed?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                If your arrival date changes, you may need to submit a new SGAC for the new date. Old submissions tied to the original date will not be valid. Check the "My SGAC" status in the ICA website.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="px-4">
              <AccordionTrigger className="text-foreground hover:no-underline">
                Is the 3-day window calculated in Singapore time or my local time?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The window is based on Singapore Standard Time (SGT, UTC+8). If you are in a different time zone, plan accordingly—your submission becomes valid at 00:00 SGT on the third day before arrival.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="px-4">
              <AccordionTrigger className="text-foreground hover:no-underline">
                Can I submit for someone else?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. You can submit on behalf of others using the group submission feature. See the <Link to="/group" className="text-primary hover:underline">Group Submission</Link> page for details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="px-4">
              <AccordionTrigger className="text-foreground hover:no-underline">
                What happens if I submit too early?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                If you submit more than 3 days before arrival, the system may reject it or mark it as invalid. You will need to submit again within the correct window. This can cause confusion, so avoid early submissions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Last Updated */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Last updated: {LAST_UPDATED}</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-12">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            This website is an independent guide and is not affiliated with the Singapore government or ICA.
          </p>
          <p className="text-xs text-muted-foreground">
            For official information, visit the{" "}
            <a
              href="https://www.ica.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              ICA website
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
