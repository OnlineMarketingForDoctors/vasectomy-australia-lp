"use client";

import { createContext, useContext } from "react";
import type { Location } from "@/lib/locations";
import { copyFor, type Copy } from "@/lib/copy";

const LocationContext = createContext<Location | null>(null);

export function LocationProvider({
  location,
  children,
}: {
  location: Location;
  children: React.ReactNode;
}) {
  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
}

/** The location this page is for. Throws rather than rendering Sydney's copy
 *  under another city's heading if a component is mounted outside a page. */
export function useLocation(): Location {
  const location = useContext(LocationContext);
  if (!location) {
    throw new Error("useLocation must be used inside a LocationProvider");
  }
  return location;
}

/** The strings for this page's language. */
export function useCopy(): Copy {
  return copyFor(useLocation().lang);
}
