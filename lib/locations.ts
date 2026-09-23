/**
 * The registry of location landing pages.
 *
 * The entries live under lib/locations/, one file per state, and the route at
 * app/[city]/page.tsx is generated from this list — so adding a city is a data
 * change, not a new page.
 */

export type { Clinic, Location } from "./location";

import type { Location } from "./location";
import * as act from "./locations/act";
import * as nsw from "./locations/nsw";
import * as nt from "./locations/nt";
import * as qld from "./locations/qld";
import * as sa from "./locations/sa";
import * as special from "./locations/special";
import * as tas from "./locations/tas";
import * as vic from "./locations/vic";
import * as wa from "./locations/wa";

export const { sydney, newcastle } = nsw;

/**
 * The order the index at / lists them in: the two pages with their own review
 * counts and photography first, then by state, then the pages that are not a
 * city of their own.
 */
export const locations: Location[] = [
  nsw.sydney,
  nsw.newcastle,
  vic.melbourne,
  qld.brisbane,
  wa.perth,
  sa.adelaide,
  act.canberra,
  nt.darwin,
  tas.hobart,

  nsw.brookvale,
  nsw.centralCoast,
  nsw.wollongong,
  nsw.ballina,
  nsw.portMacquarie,
  nsw.tamworth,
  nsw.dubbo,
  nsw.orange,
  nsw.waggaWagga,
  nsw.alburyWodonga,

  qld.goldCoast,
  qld.sunshineCoast,
  qld.logan,
  qld.springfield,
  qld.morayfield,
  qld.toowoomba,
  qld.herveyBay,
  qld.mackay,
  qld.rockhampton,
  qld.townsville,

  vic.geelong,
  vic.casey,
  vic.ballarat,
  vic.bendigo,
  vic.shepparton,
  vic.regionalVic,

  tas.launceston,

  special.chinese,
  special.sydneyBulkBilled,
];

/** Slug without the leading slash, as the [city] route segment. */
export function citySegment(location: Location): string {
  return location.slug.replace(/^\//, "");
}

const bySegment = new Map(locations.map((l) => [citySegment(l), l]));

export function findLocation(segment: string): Location | undefined {
  return bySegment.get(segment);
}
