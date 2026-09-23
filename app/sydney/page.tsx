import LocationPage, { metadataFor } from "@/components/LocationPage";
import { sydney } from "@/lib/locations";

export const metadata = metadataFor(sydney);

export default function SydneyPage() {
  return <LocationPage location={sydney} />;
}
