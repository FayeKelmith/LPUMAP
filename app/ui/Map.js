"use client";
import { useState, useRef } from "react";
import BaseMap from "./BaseMap";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import { CiLocationOn } from "react-icons/ci";
import data from "../data.json";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import classes from "./Page.module.css";

const academics = data.academic;

const LPUMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [31.251794149805686, 75.70367347834485],
      zoom: 9,
    });

    const nav = new mapboxgl.NavigationControl();
    map.current.addControl(nav, "top-right");

    const marker = new mapboxgl.Marker()
      .setLngLat([31.251794149805686, 75.70367347834485])
      .addTo(map.current);

    let geolocate;

    if ("geolocation" in navigator) {
      geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      });

      map.current.addControl(geolocate, "top-right");
    }
  }, []);

  return (
    <div ref={mapContainer} className="w-full h-[70vh]">
      <h1>My map</h1>
    </div>
  );
};
