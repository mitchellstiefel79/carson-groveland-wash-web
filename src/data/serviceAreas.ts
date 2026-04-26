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

// Map center + radius cover Lake, Orange, Sumter and Osceola counties.
// Centered roughly between Clermont and Orlando.
export const coverageMap = {
  center: { lat: 28.5383, lng: -81.6 },
  // Approx radius (meters) to encompass all four counties
  radiusMeters: 65000,
  zoom: 9,
};
