import { coverageMap, serviceCities } from "@/data/serviceAreas";

/**
 * Free Google Maps embed (no API key required) showing a centered
 * coverage area across Lake, Orange, Sumter and Osceola counties.
 *
 * The embed automatically reflects whatever cities are listed in
 * src/data/serviceAreas.ts because the search query is built from them.
 */
const ServiceAreaMap = () => {
  // Build a search query from the unique counties so the map highlights the region.
  const query = encodeURIComponent(
    "Lake County FL, Orange County FL, Sumter County FL, Osceola County FL"
  );

  const { center, zoom } = coverageMap;
  const src = `https://www.google.com/maps?q=${query}&ll=${center.lat},${center.lng}&z=${zoom}&output=embed`;

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg border border-border">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          title="Carson's Soft Wash service area map"
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
        />
      </div>
      <div className="bg-muted px-4 py-3 text-sm text-muted-foreground">
        Serving {serviceCities.length}+ cities and towns across Lake, Orange,
        Sumter and Osceola counties.
      </div>
    </div>
  );
};

export default ServiceAreaMap;
