"use client";

import "../globals.css";
import "../fonts";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  faHome,
  faImages,
  faInfo,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const routes = [
  { name: "Koti", path: "/", icon: faHome },
  { name: "Info", path: "/info", icon: faInfo },
  { name: "Media", path: "/media", icon: faNewspaper },
  { name: "Galleria", path: "/gallery", icon: faImages },
];

export default function TabLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = useState(
    routes.find((route) => route.path === pathname) || routes[0]
  );

  useEffect(() => {
    setSelectedTab(
      routes.find((route) => route.path === pathname) || routes[0]
    );
  }, [pathname]);

  const handleTabClick = (path: string) => {
    console.log(`Clicked ${path}`);
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen z-10">
      <div className="h-[calc(100vh-4rem)]">
        <div className="mt-6 content-panel mx-auto">
          {routes.map((route) => (
            <div key={route.path} hidden={pathname !== route.path}>
              {children}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
