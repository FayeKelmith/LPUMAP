"use client";
import { useState, useRef } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import { CiLocationOn } from "react-icons/ci";
import data from "../data.json";
import "mapbox-gl/dist/mapbox-gl.css";
import classes from "./Page.module.css";

const academics = data.academic;
const LPUMap = () => {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapRef = useRef(null);

  const zoomToSelectedLoc = (e, location, index) => {
    // stop event bubble-up which triggers unnecessary events
    e.stopPropagation();
    setSelectedMarker({ location, index });
    mapRef.current.flyTo({ center: [location.lng, location.lat], zoom: 10 });
  };

  return (
    <main className="w-full h-[60vh]">
      <Map
        ref={mapRef}
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={classes.mapStyle}
        initialViewState={{
          latitude: 31.251794149805686,
          longitude: 75.70367347834485,
          zoom: 10,
        }}
        maxZoom={20}
        minZoom={3}
      >
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />

        <Marker longitude={academics[1].lng} latitude={academics[1].lat}>
          {<CiLocationOn size={30} className="text-red-500" />}
        </Marker>
      </Map>
    </main>
  );
};

export default LPUMap;
