import { Outlet } from "react-router-dom";
import { SiteHeader } from "./layout/site-header";
import { SiteFooter } from "./layout/site-footer";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
