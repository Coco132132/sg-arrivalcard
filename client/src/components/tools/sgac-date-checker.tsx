import { useState, useMemo } from "react";
import { Calendar, CheckCircle2, XCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { format, addDays, differenceInDays, isAfter, isBefore, startOfDay } from "date-fns";

function calculateSubmissionWindow(arrivalDate: Date) {
  const today = startOfDay(new Date());
  const earliestDate = startOfDay(addDays(arrivalDate, -3));
  const latestDate = startOfDay(arrivalDate);
  const canSubmit = isAfter(today, earliestDate) || format(today, "yyyy-MM-dd") === format(earliestDate, "yyyy-MM-dd");
  const mustSubmitBy = latestDate;
  const daysRemaining = differenceInDays(latestDate, today);

  return { earliestDate, latestDate, canSubmit, mustSubmitBy, daysRemaining };
}

export function SgacDateChecker() {
  const [arrivalDate, setArrivalDate] = useState<string>("");
  const [checked, setChecked] = useState(false);

  const result = useMemo(() => {
    if (!arrivalDate) return null;
    return calculateSubmissionWindow(new Date(arrivalDate));
  }, [arrivalDate]);

  const handleCheck = () => {
    if (arrivalDate) setChecked(true);
  };

  const handleReset = () => {
    setArrivalDate("");
    setChecked(false);
  };

  const today = format(new Date(), "MMMM d, yyyy");

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="bg-primary/5 border-b border-border px-5 py-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
          <Calendar className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="font-semibold text-foreground">SGAC Date Checker</h2>
          <p className="text-sm text-muted-foreground">Find your valid submission window</p>
        </div>
      </div>

      <div className="p-5 space-y-5">
        <div>
          <label htmlFor="arrival-date" className="block text-sm font-medium text-foreground mb-2">
            Your Arrival Date in Singapore
          </label>
          <div className="flex gap-3">
            <input
              id="arrival-date"
              type="date"
              value={arrivalDate}
              onChange={(e) => { setArrivalDate(e.target.value); setChecked(false); }}
              className="flex-1 h-10 px-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              min={format(new Date(), "yyyy-MM-dd")}
            />
            <button
              onClick={handleCheck}
              disabled={!arrivalDate}
              className="h-10 px-4 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Check
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {checked && result && (
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4 space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Earliest submission</p>
                  <p className="font-semibold text-foreground">{format(result.earliestDate, "MMM d, yyyy")}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Latest submission</p>
                  <p className="font-semibold text-foreground">{format(result.latestDate, "MMM d, yyyy")}</p>
                </div>
              </div>
            </div>

            <div className={`rounded-lg p-4 flex items-start gap-3 ${result.canSubmit ? "bg-success/10" : "bg-warning/10"}`}>
              <div className={`shrink-0 mt-0.5 ${result.canSubmit ? "text-success" : "text-warning"}`}>
                {result.canSubmit ? (
                  result.daysRemaining >= 0 ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5" />
                  )
                ) : (
                  <XCircle className="w-5 h-5" />
                )}
              </div>
              <div>
                {result.canSubmit ? (
                  result.daysRemaining >= 0 ? (
                    <>
                      <p className="font-medium text-foreground">You can submit now</p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {result.daysRemaining === 0
                          ? "Today is the last day to submit your SGAC."
                          : `You have ${result.daysRemaining} day${result.daysRemaining !== 1 ? "s" : ""} remaining before arrival.`}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-medium text-foreground">Submission window has passed</p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        You should have submitted before {format(result.latestDate, "MMMM d, yyyy")}. Please contact ICA immediately.
                      </p>
                    </>
                  )
                ) : (
                  <>
                    <p className="font-medium text-foreground">Too early to submit</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      You can only start submitting from {format(result.earliestDate, "MMMM d, yyyy")}. Today is {today}.
                    </p>
                  </>
                )}
              </div>
            </div>

            <button
              onClick={handleReset}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Check another date
            </button>
          </div>
        )}

        {!checked && (
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              The SGAC must be submitted <strong className="text-foreground">within 3 days before your arrival</strong> in Singapore. Enter your arrival date to check your valid submission window.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
