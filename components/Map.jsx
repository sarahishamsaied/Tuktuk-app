import React from "react";
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";
import { useEffect } from "react";

const Map = () => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FyYWhoaXNoYW0iLCJhIjoiY2w4OTlzNmJwMDRrcjNycW9zcnNqejdzYyJ9.xOnERQlQra2Vy9qfENeIfA";
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.8025, 26.8206],
      zoom: 3,
    });
  });
  return <MapWrapper id="map"></MapWrapper>;
};
const MapWrapper = tw.div`  h-3/6 flex-1 border border-black font-bold text-white`;

export default Map;
