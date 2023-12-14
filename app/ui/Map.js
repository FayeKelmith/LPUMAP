"use client";
import { useState, useEffect, useRef } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import { CiLocationOn } from "react-icons/ci";
import data from "../data.json";
import "mapbox-gl/dist/mapbox-gl.css";
const academics = data.academic;

// create a function to make a directions request
const LPUMap = () => {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const [viewport, setViewport] = useState({});
  const mapRef = useRef();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 15,
      });
    });
  }, [viewport]);
  return (
    <main className="w-full h-[60vh]">
      {viewport.latitude && viewport.longitude && (
        <Map
          ref={mapRef}
          mapboxAccessToken={mapboxToken}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          initialViewState={viewport}
          maxZoom={20}
          minZoom={3}
        >
          <GeolocateControl
            position="top-right"
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          <NavigationControl position="top-right" />
          <Marker longitude={academics[2].lng} latitude={academics[2].lat}>
            {<CiLocationOn size={30} className="text-red-500" />}
          </Marker>
          <div className="mapsidebar">
            <p>Destination : {academics[2].location}</p>
          </div>
        </Map>
      )}
    </main>
  );
};

export default LPUMap;
