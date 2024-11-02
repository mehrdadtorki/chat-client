// app/dashboard/layout.tsx
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AuthCheck from "@/components/AuthCheck";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthCheck>
      <SidebarProvider
        style={{ "--sidebar-width": "350px" } as React.CSSProperties}
      >
        <AppSidebar />
        <SidebarInset>
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </AuthCheck>
  );
}
