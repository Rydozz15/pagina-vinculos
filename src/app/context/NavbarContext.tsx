"use client";
import { createContext, useState, ReactNode } from "react";
import { menus, NavbarContextType } from "../lib/data";

interface NavbarProviderProps {
  children: ReactNode;
}

export const NavbarContext = createContext<NavbarContextType>({
  visibleSection: "",
  setVisibleSection: () => {},
});

const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const [visibleSection, setVisibleSection] = useState(menus[0]);

  return (
    <NavbarContext.Provider value={{ visibleSection, setVisibleSection }}>
      {children}
    </NavbarContext.Provider>
  );
};
export default NavbarProvider;
