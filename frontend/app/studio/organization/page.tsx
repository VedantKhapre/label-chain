import { AppSidebar } from "@/components/dashboard/organization/app-sidebar";
import { SiteHeader } from "@/components/dashboard/organization/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardGuard from "@/components/guards/DashboardGuard";

export default function Page() {
  return (
    <DashboardGuard requiredAccountType="organization">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col">
              {/* Empty main content area */}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </DashboardGuard>
  );
}
