"use client";

import Link from "next/link";
import classNames from "classnames";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          My App
        </Link>
        <button
          title="xxxx"
          type="button"
          className="block text-gray-900 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z" />
          </svg>
        </button>
      </div>
      <div
        className={classNames(
          "sm:flex sm:flex-row sm:items-center sm:justify-center",
          {
            hidden: !isOpen,
          }
        )}
      >
        <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link
                href={href}
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
