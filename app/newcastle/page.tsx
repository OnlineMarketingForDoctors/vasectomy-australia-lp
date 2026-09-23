import LocationPage, { metadataFor } from "@/components/LocationPage";
import { newcastle } from "@/lib/locations";

export const metadata = metadataFor(newcastle);

export default function NewcastlePage() {
  return <LocationPage location={newcastle} />;
}
