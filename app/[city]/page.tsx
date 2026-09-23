import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPage, { metadataFor } from "@/components/LocationPage";
import { citySegment, findLocation, locations } from "@/lib/locations";

type Params = { params: Promise<{ city: string }> };

/** Every page in the registry is built at build time; anything else 404s. */
export function generateStaticParams() {
  return locations.map((l) => ({ city: citySegment(l) }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const location = findLocation((await params).city);
  return location ? metadataFor(location) : {};
}

export default async function City({ params }: Params) {
  const location = findLocation((await params).city);
  if (!location) notFound();
  return <LocationPage location={location} />;
}
