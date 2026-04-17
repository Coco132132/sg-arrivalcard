import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ShieldAlert } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Official & Free", href: "/official-free" },
  { label: "3-Day Rule", href: "/3-day-rule" },
  { label: "Who Needs to Submit", href: "/who-needs" },
  { label: "Group Submission", href: "/group-submission" },
  { label: "Common Mistakes", href: "/common-mistakes" },
];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-semibold text-foreground">
              <ShieldAlert className="h-5 w-5 text-primary" />
              <span>SG Arrival Card Guide</span>
            </Link>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-sm",
                        location.pathname === item.href && "bg-accent"
                      )}
                    >
                      <Link to={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile menu - simple links */}
            <nav className="md:hidden flex gap-2">
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-xs px-2 py-1 rounded",
                    location.pathname === item.href
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Disclaimer */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-destructive font-medium">
              Disclaimer: This website is an independent guide and is not affiliated with the Singapore government or ICA.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>Last updated: April 2026</p>
            <nav className="flex flex-wrap justify-center gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
