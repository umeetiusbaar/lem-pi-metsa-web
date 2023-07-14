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
  { name: "Home", path: "/", icon: faHome },
  { name: "Info", path: "/info", icon: faInfo },
  { name: "Media", path: "/media", icon: faNewspaper },
  { name: "Gallery", path: "/gallery", icon: faImages },
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

  return (
    <div className="flex p-10 bg-white rounded shadow-lg space-y-6 z-10 sm:w-96 md:w-1/2 lg:w-1/3 xl:w-2/3">
      <div className="flex flex-col space-y-2 mr-4">
        {routes.map((route) => (
          <button
            type="button"
            title={route.name}
            key={route.name}
            onClick={() => {
              console.log(`Clicked ${route.name}`);
              router.push(route.path);
            }}
            className={`p-2 rounded ${
              selectedTab && selectedTab.path === route.path
                ? "bg-gray-200"
                : ""
            }`}
          >
            <FontAwesomeIcon icon={route.icon} size="xs" />
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
