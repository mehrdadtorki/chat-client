import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App with Sidebar",
  description: "An application with a collapsible nested sidebar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} h-screen`}>
        <div className="w-full h-full">
          <SidebarProvider defaultOpen>
            <AppSidebar />
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <main className="w-full">{children}</main>
            </ThemeProvider>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
