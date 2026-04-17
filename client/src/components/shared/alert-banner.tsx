import { cn } from "@/lib/utils";
import { Info, AlertTriangle, XCircle, CheckCircle } from "lucide-react";

export type AlertVariant = "info" | "warning" | "danger" | "success";

interface AlertBannerProps {
  variant?: AlertVariant;
  type?: AlertVariant;
  title?: string;
  content?: string;
  children?: React.ReactNode;
  className?: string;
}

const variantConfig: Record<
  AlertVariant,
  {
    icon: React.ComponentType<{ className?: string }>;
    wrapperClass: string;
    iconClass: string;
    titleClass: string;
  }
> = {
  info: {
    icon: Info,
    wrapperClass: "bg-info/8 border-info/30",
    iconClass: "text-info",
    titleClass: "text-info",
  },
  warning: {
    icon: AlertTriangle,
    wrapperClass: "bg-warning/8 border-warning/30",
    iconClass: "text-warning",
    titleClass: "text-warning",
  },
  danger: {
    icon: XCircle,
    wrapperClass: "bg-destructive/8 border-destructive/30",
    iconClass: "text-destructive",
    titleClass: "text-destructive",
  },
  success: {
    icon: CheckCircle,
    wrapperClass: "bg-success/8 border-success/30",
    iconClass: "text-success",
    titleClass: "text-success",
  },
};

export function AlertBanner({
  variant,
  type,
  title,
  content,
  children,
  className,
}: AlertBannerProps) {
  const activeVariant = variant || type || "info";
  const config = variantConfig[activeVariant];
  const Icon = config.icon;
  const displayContent = content || (typeof children === 'string' ? children : null);

  return (
    <div
      className={cn(
        "relative flex gap-3 rounded-lg border px-4 py-3 text-sm",
        config.wrapperClass,
        className
      )}
    >
      <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", config.iconClass)} />
      <div className="flex-1 space-y-1">
        {title && (
          <p className={cn("font-semibold", config.titleClass)}>{title}</p>
        )}
        <div className="text-muted-foreground [&_p]:m-0">
          {displayContent || children}
        </div>
      </div>
    </div>
  );
}
