import { Home, Settings, FileText } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface Props {
  hasSettingAccess: boolean;
}

export function AppSidebar({ hasSettingAccess }: Props) {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "List",
      url: "/list",
      icon: FileText,
    },
    ...(hasSettingAccess
      ? [
          {
            title: "Setting",
            url: "/setting",
            icon: Settings,
          },
        ]
      : []),
  ];
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
