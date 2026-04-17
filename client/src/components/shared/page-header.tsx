import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: BreadcrumbItem[];
  lastUpdated?: string;
}

export function PageHeader({ title, description, breadcrumb, lastUpdated }: PageHeaderProps) {
  return (
    <div className="space-y-4">
      {breadcrumb && breadcrumb.length > 0 && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {breadcrumb.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              {item.href ? (
                <Link to={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground">{item.label}</span>
              )}
            </span>
          ))}
        </div>
      )}

      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h1>

      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}

      {lastUpdated && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
          <ShieldCheck className="h-4 w-4" />
          <span>Last updated: {lastUpdated}</span>
        </div>
      )}
    </div>
  );
}
