import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { 
  ExternalLink, 
  CheckCircle, 
  Calendar, 
  Link2, 
  CalendarCheck, 
  CalendarX,
  AlertCircle,
  Info,
  Shield,
  AlertTriangle
} from "lucide-react";

type IconName = "link" | "check-circle" | "calendar" | "calendar-check" | "calendar-x" | "info" | "alert" | "shield" | "external-link" | "alert-triangle";

interface IconMap {
  [key: string]: React.ComponentType<{ className?: string }>;
}

const iconMap: IconMap = {
  "link": Link2,
  "check-circle": CheckCircle,
  "calendar": Calendar,
  "calendar-check": CalendarCheck,
  "calendar-x": CalendarX,
  "info": Info,
  "alert": AlertCircle,
  "shield": Shield,
  "external-link": ExternalLink,
  "alert-triangle": AlertTriangle,
};

interface InfoCardProps {
  icon: IconName | React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  href?: string;
  className?: string;
}

export function InfoCard({ icon, title, description, href, className }: InfoCardProps) {
  const IconComponent = typeof icon === "string" ? iconMap[icon] || Info : icon;
  
  const content = (
    <div className={cn(
      "flex gap-3 rounded-lg border p-4 bg-card hover:border-primary/30 transition-colors",
      href && "cursor-pointer",
      className
    )}>
      <IconComponent className="mt-0.5 shrink-0 size-5 text-primary" />
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-sm text-foreground">{title}</p>
        {description && (
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="block no-underline">
        {content}
      </Link>
    );
  }

  return content;
}
