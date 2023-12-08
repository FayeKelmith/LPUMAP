"use client";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  ImageOverlay,
} from "react-leaflet";

export function ChangeView({ coords }: any) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

const LPUMap = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // après le premier rendu, setIsMounted sera défini sur true
  }, []);
  const [geoData, setGeoData] = useState({
    lat: 31.2524269616594,
    lng: 75.70253044336381,
  });
  if (!isMounted) {
    return null; // si le composant n'est pas monté, ne rien rendre
  }

  const center = [geoData.lat, geoData.lng];

  return (
    <MapContainer
      center={[geoData.lat, geoData.lng]}
      zoom={13}
      style={{ height: "60vh" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
      />

      {geoData.lat && geoData.lng && (
        <Marker
          position={[geoData.lat, geoData.lng]}
          alt="marker"
          draggable={true}
        />
      )}
      <ChangeView coords={center} />
    </MapContainer>
  );
};

export default LPUMap;
