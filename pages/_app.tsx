import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const hasSettingAccess = false;
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar hasSettingAccess={hasSettingAccess} />
        <SidebarTrigger />
        <Component {...pageProps} />
      </SidebarProvider>
    </QueryClientProvider>
  );
}
