interface LastUpdatedProps {
  date?: string;
}

export function LastUpdated({ date }: LastUpdatedProps) {
  const displayDate = date || new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <p className="text-xs text-muted-foreground">
      Last updated: {displayDate}
    </p>
  );
}
