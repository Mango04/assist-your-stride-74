import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gradient-subtle">
        {/* Navigation Sidebar */}
        <AppSidebar />
        
        {/* Main Content */}
        <SidebarInset className="flex-1">
          {/* Header with Sidebar Toggle */}
          <header className="flex h-16 shrink-0 items-center gap-2 px-4 border-b border-border bg-background/95 backdrop-blur">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold text-foreground">{title}</h1>
            </div>
          </header>

          {/* Page Content */}
          <div className="flex-1">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}