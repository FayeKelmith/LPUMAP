"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import classes from "./Page.module.css";
const BaseMap = () => {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  useEffect(() => {
    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [31.251794149805686, 75.70367347834485],
      zoom: 9,
    });
  }, []);
  return <div id="mapContainer"></div>;
};

export default BaseMap;
