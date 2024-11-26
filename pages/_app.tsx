import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarTrigger />
      <Component {...pageProps} />
    </SidebarProvider>
  );
}
