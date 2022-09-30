import React from "react";
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";
import { useEffect } from "react";
const Map = ({ pickUpCoords, dropOffCoords }) => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FyYWhoaXNoYW0iLCJhIjoiY2w4OTlzNmJwMDRrcjNycW9zcnNqejdzYyJ9.xOnERQlQra2Vy9qfENeIfA";
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.8025, 26.8206],
      zoom: 3,
    });
    if (
      pickUpCoords &&
      dropOffCoords &&
      pickUpCoords.length > 0 &&
      dropOffCoords.length > 0
    ) {
      addToMap(map, pickUpCoords, dropOffCoords);
      map.fitBounds([pickUpCoords, dropOffCoords], {
        padding: 100,
      });
    }
  }, [pickUpCoords, dropOffCoords]);
  const addToMap = (map, pickUpCoords, dropOffCoords) => {
    console.log("pickup is " + pickUpCoords);
    const pickUpMarker = new mapboxgl.Marker()
      .setLngLat(pickUpCoords)
      .addTo(map);
    const dropOffMarker = new mapboxgl.Marker()
      .setLngLat(dropOffCoords)
      .addTo(map);
  };
  return <MapWrapper id="map"></MapWrapper>;
};
const MapWrapper = tw.div`h-3/6 flex-1 border border-black font-bold text-white`;
const marker = tw.div`bg-indigo-500 rounded-full`;
export default Map;
