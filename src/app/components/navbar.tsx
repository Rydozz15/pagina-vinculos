"use client";
import Link from "next/link";
import { useContext } from "react";
import { contactData, menus } from "../lib/data";
import { NavbarContext } from "../context/NavbarContext";
import { InboxArrowDownIcon, Bars3Icon } from "@heroicons/react/16/solid";

export default function Navbar() {
  const { visibleSection } = useContext(NavbarContext);
  const { whatsAppLink } = contactData;
  return (
    <nav className="navbar justify-between bg-logo sticky top-0 z-50 shadow-md py-3">
      {/* Logo */}
      <Link href={`#${menus[0]}`}>
        <img alt="Logo" src="/Logo-m.png" width={100} height={50} />
      </Link>

      {/* Menu for mobile */}
      <div className="drawer drawer-end md:hidden">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar flex justify-end">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <Bars3Icon className="w-8 h-8 text-accent" />
              </label>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-logo flex flex-col items-start gap-2">
            {menus.map((item, index) => (
              <li key={index}>
                <Link
                  href={`#${item}`}
                  className={` text-xl focus:text-logoLighter ${
                    visibleSection === item ? "text-logoLighter" : "text-accent"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}

            <Link
              className="btn btn-accent btn-sm text-xl text-base-100"
              href={whatsAppLink}
            >
              <InboxArrowDownIcon className="w-6 h-6" />
              Contáctanos
            </Link>
          </ul>
        </div>
      </div>

      {/* Menu for desktop */}
      <div className="hidden sm:flex gap-2">
        <ul className="flex flex-wrap gap-x-5 gap-y-10 justify-center items-center">
          {menus.map((item, index) => (
            <li
              key={index}
              className={`transition-transform transform ${
                visibleSection === item ? "scale-110" : ""
              }`}
            >
              <Link
                href={`#${item}`}
                className={`${
                  visibleSection === item
                    ? "text-logoLighter text-xl"
                    : "text-accent text-xl"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}

          <Link
            className="btn btn-accent btn-sm text-xl text-base-100"
            href={whatsAppLink}
          >
            <InboxArrowDownIcon className="w-6 h-6" />
            Contáctanos
          </Link>
        </ul>
      </div>
    </nav>
  );
}
