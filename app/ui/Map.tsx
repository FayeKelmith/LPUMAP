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
  const [geoData, setGeoData] = useState({
    lat: 31.2524269616594,
    lng: 75.70253044336381,
  });

  const center = [geoData.lat, geoData.lng];

  return (
    <MapContainer
      center={[geoData.lat, geoData.lng]}
      zoom={13}
      style={{ height: "60vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} alt="marker" />
      )}
      <ChangeView coords={center} />
    </MapContainer>
  );
};

export default LPUMap;
