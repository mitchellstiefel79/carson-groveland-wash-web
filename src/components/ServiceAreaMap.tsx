import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  cityCoordinates,
  coverageMap,
  serviceCities,
} from "@/data/serviceAreas";

// Custom small pin marker (avoids broken default marker icon paths)
const pinIcon = L.divIcon({
  className: "",
  html: `<div style="
    width:14px;height:14px;border-radius:50%;
    background:hsl(24 95% 53%);
    border:2px solid white;
    box-shadow:0 0 0 1px rgba(0,0,0,.4), 0 1px 4px rgba(0,0,0,.5);
  "></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

/**
 * Satellite map centered on Clermont, FL. Drops a pin on every serviced city
 * and outlines the overall coverage radius. Uses Esri World Imagery tiles
 * (no API key required).
 */
const ServiceAreaMap = () => {
  const { center, zoom, radiusMeters } = coverageMap;

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg border border-border">
      <div className="relative w-full" style={{ height: "520px" }}>
        <MapContainer
          center={[center.lat, center.lng]}
          zoom={zoom}
          minZoom={zoom}
          maxZoom={zoom}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          boxZoom={false}
          keyboard={false}
          dragging={false}
          zoomControl={false}
          style={{ height: "100%", width: "100%" }}
        >
          {/* Satellite imagery */}
          <TileLayer
            attribution="Tiles &copy; Esri"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            maxZoom={19}
          />
          {/* Labels overlay so cities/roads are readable on satellite */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
            maxZoom={19}
          />

          <Circle
            center={[center.lat, center.lng]}
            radius={radiusMeters}
            pathOptions={{
              color: "hsl(24 95% 53%)",
              weight: 2,
              fillColor: "hsl(24 95% 53%)",
              fillOpacity: 0.08,
            }}
          />

          {serviceCities.map((city) => {
            const coords = cityCoordinates[city.name];
            if (!coords) return null;
            return (
              <Marker
                key={`${city.county}-${city.name}`}
                position={[coords.lat, coords.lng]}
                icon={pinIcon}
              >
                <Popup>
                  <strong>{city.name}</strong>
                  <br />
                  {city.county} County
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
      <div className="bg-muted px-4 py-3 text-sm text-muted-foreground">
        Centered on Clermont, FL — serving {serviceCities.length}+ cities and
        towns across Lake, Orange, Sumter and Osceola counties.
      </div>
    </div>
  );
};

export default ServiceAreaMap;
