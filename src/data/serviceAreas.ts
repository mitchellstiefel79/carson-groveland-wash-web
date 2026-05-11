// Single source of truth for service area cities and towns.
// Add or remove entries here and the Service Areas page + map update automatically.

export type ServiceCity = {
  name: string;
  county: "Lake" | "Orange" | "Sumter" | "Osceola";
  slug?: string; // optional — only set for cities that have a dedicated detail page
};

export const serviceCities: ServiceCity[] = [
  // Lake County
  { name: "Groveland", county: "Lake", slug: "groveland" },
  { name: "Clermont", county: "Lake", slug: "clermont" },
  { name: "Minneola", county: "Lake", slug: "minneola" },
  { name: "Mascotte", county: "Lake", slug: "mascotte" },
  { name: "Montverde", county: "Lake", slug: "montverde" },
  { name: "Astatula", county: "Lake" },
  { name: "Eustis", county: "Lake" },
  { name: "Fruitland Park", county: "Lake" },
  { name: "Howey-in-the-Hills", county: "Lake" },
  { name: "Lady Lake", county: "Lake" },
  { name: "Leesburg", county: "Lake" },
  { name: "Mount Dora", county: "Lake" },
  { name: "Tavares", county: "Lake" },
  { name: "Umatilla", county: "Lake" },
  { name: "Sorrento", county: "Lake" },
  { name: "Yalaha", county: "Lake" },

  // Orange County
  { name: "Winter Garden", county: "Orange", slug: "winter-garden" },
  { name: "Windermere", county: "Orange", slug: "windermere" },
  { name: "Oakland", county: "Orange", slug: "oakland" },
  { name: "Apopka", county: "Orange" },
  { name: "Ocoee", county: "Orange" },
  { name: "Orlando", county: "Orange" },
  { name: "Maitland", county: "Orange" },
  { name: "Belle Isle", county: "Orange" },
  { name: "Edgewood", county: "Orange" },
  { name: "Eatonville", county: "Orange" },
  { name: "Gotha", county: "Orange" },
  { name: "Doctor Phillips", county: "Orange" },
  { name: "Pine Hills", county: "Orange" },
  { name: "Bay Lake", county: "Orange" },
  { name: "Lake Buena Vista", county: "Orange" },

  // Sumter County
  { name: "Bushnell", county: "Sumter" },
  { name: "Center Hill", county: "Sumter" },
  { name: "Coleman", county: "Sumter" },
  { name: "Webster", county: "Sumter" },
  { name: "Wildwood", county: "Sumter" },
  { name: "The Villages", county: "Sumter" },
  { name: "Sumterville", county: "Sumter" },
  { name: "Lake Panasoffkee", county: "Sumter" },

  // Osceola County
  { name: "Kissimmee", county: "Osceola" },
  { name: "St. Cloud", county: "Osceola" },
  { name: "Celebration", county: "Osceola" },
  { name: "Buenaventura Lakes", county: "Osceola" },
  { name: "Poinciana", county: "Osceola" },
  { name: "Harmony", county: "Osceola" },
  { name: "Narcoossee", county: "Osceola" },
];

export const counties: ServiceCity["county"][] = [
  "Lake",
  "Orange",
  "Sumter",
  "Osceola",
];

// Map centered on Clermont, FL with satellite view as default.
export const coverageMap = {
  center: { lat: 28.5494, lng: -81.7729 }, // Clermont, FL
  // Approx radius (meters) covering every listed city (farthest: Harmony, ~70km)
  radiusMeters: 75000,
  zoom: 10,
  mapType: "satellite" as const,
};

// Approx coordinates for each serviced city (used to drop pins on the map).
export const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  // Lake County
  Groveland: { lat: 28.5589, lng: -81.8514 },
  Clermont: { lat: 28.5494, lng: -81.7729 },
  Minneola: { lat: 28.5739, lng: -81.7459 },
  Mascotte: { lat: 28.5775, lng: -81.8870 },
  Montverde: { lat: 28.5969, lng: -81.6759 },
  Astatula: { lat: 28.7089, lng: -81.7287 },
  Eustis: { lat: 28.8527, lng: -81.6854 },
  "Fruitland Park": { lat: 28.8602, lng: -81.9026 },
  "Howey-in-the-Hills": { lat: 28.7197, lng: -81.7787 },
  "Lady Lake": { lat: 28.9183, lng: -81.9231 },
  Leesburg: { lat: 28.8108, lng: -81.8779 },
  "Mount Dora": { lat: 28.8028, lng: -81.6453 },
  Tavares: { lat: 28.8053, lng: -81.7287 },
  Umatilla: { lat: 28.9286, lng: -81.6651 },
  Sorrento: { lat: 28.8011, lng: -81.5337 },
  Yalaha: { lat: 28.7406, lng: -81.8126 },

  // Orange County
  "Winter Garden": { lat: 28.5653, lng: -81.5859 },
  Windermere: { lat: 28.4953, lng: -81.5348 },
  Oakland: { lat: 28.5572, lng: -81.6312 },
  Apopka: { lat: 28.6934, lng: -81.5322 },
  Ocoee: { lat: 28.5694, lng: -81.5439 },
  Orlando: { lat: 28.5383, lng: -81.3792 },
  Maitland: { lat: 28.6278, lng: -81.3631 },
  "Belle Isle": { lat: 28.4569, lng: -81.3559 },
  Edgewood: { lat: 28.4844, lng: -81.3792 },
  Eatonville: { lat: 28.6172, lng: -81.3884 },
  Gotha: { lat: 28.5197, lng: -81.5276 },
  "Doctor Phillips": { lat: 28.4500, lng: -81.4923 },
  "Pine Hills": { lat: 28.5722, lng: -81.4584 },
  "Bay Lake": { lat: 28.4022, lng: -81.5687 },
  "Lake Buena Vista": { lat: 28.3697, lng: -81.5191 },

  // Sumter County
  Bushnell: { lat: 28.6647, lng: -82.1115 },
  "Center Hill": { lat: 28.6478, lng: -81.9962 },
  Coleman: { lat: 28.8044, lng: -82.0712 },
  Webster: { lat: 28.6097, lng: -82.0556 },
  Wildwood: { lat: 28.8647, lng: -82.0404 },
  "The Villages": { lat: 28.9344, lng: -81.9599 },
  Sumterville: { lat: 28.7286, lng: -82.0648 },
  "Lake Panasoffkee": { lat: 28.7956, lng: -82.1290 },

  // Osceola County
  Kissimmee: { lat: 28.2920, lng: -81.4076 },
  "St. Cloud": { lat: 28.2489, lng: -81.2812 },
  Celebration: { lat: 28.3244, lng: -81.5398 },
  "Buenaventura Lakes": { lat: 28.3403, lng: -81.3473 },
  Poinciana: { lat: 28.1453, lng: -81.4581 },
  Harmony: { lat: 28.2289, lng: -81.1551 },
  Narcoossee: { lat: 28.3786, lng: -81.1934 },
};
