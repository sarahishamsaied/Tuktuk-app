import mapboxgl from "mapbox-gl";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import Image from "next/image";
import { useRouter } from "next/router";
import * as AiIcons from "react-icons/ai";
import Router from "next/router";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  const [pickUpCoords, setPickupCoords] = useState([0, 0]);
  const [dropOffCoords, setDropOffCoords] = useState([0, 0]);
  const [rideDuration, setRideDuration] = useState(0);
  const getPickupCoords = (location) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?${new URLSearchParams(
        {
          access_token:
            "pk.eyJ1Ijoic2FyYWhoaXNoYW0iLCJhIjoiY2w4OTlzNmJwMDRrcjNycW9zcnNqejdzYyJ9.xOnERQlQra2Vy9qfENeIfA",
          limit: 10,
        }
      )}`
    )
      .then((res) => res.json())
      .then((data) => setPickupCoords(data.features[0].center));
  };
  const getDropOffCoords = (location) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?${new URLSearchParams(
        {
          access_token:
            "pk.eyJ1Ijoic2FyYWhoaXNoYW0iLCJhIjoiY2w4OTlzNmJwMDRrcjNycW9zcnNqejdzYyJ9.xOnERQlQra2Vy9qfENeIfA",
          limit: 10,
        }
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDropOffCoords(data.features[0].center);
      });
    console.log(pickUpCoords, dropOffCoords);
  };
  useEffect(() => {
    getPickupCoords(pickup);
    getDropOffCoords(dropoff);
    console.log("^^^-^^^^");
  }, [pickup, dropoff]);
  useEffect(() => {
    getDistance(pickUpCoords, dropOffCoords);
  }, [pickUpCoords, dropOffCoords]);
  const getDistance = (pickUp, dropOff) => {
    console.log(pickUp, dropOff);
    if (
      pickUp[0] !== 0 &&
      pickUp[1] !== 0 &&
      dropOff[0] !== 0 &&
      dropOff[1] !== 0
    )
      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickUp[0]},${pickUp[1]};${dropOff[0]},${dropOff[1]}?access_token=pk.eyJ1Ijoic2FyYWhoaXNoYW0iLCJhIjoiY2w4OTlzNmJwMDRrcjNycW9zcnNqejdzYyJ9.xOnERQlQra2Vy9qfENeIfA`
      )
        .then((res) => res.json())
        .then((data) => setRideDuration(data.routes[0].duration / 100));
  };
  return (
    <Wrapper>
      <AiIcons.AiOutlineArrowLeft
        className="rounded-full absolute left-4 top-4 z-50 text-2xl hover:border transition ease-in"
        onClick={() => Router.back()}
      />
      <Map pickUpCoords={pickUpCoords} dropOffCoords={dropOffCoords} />
      <RideContainer>
        <RideTitle>Pick a ride</RideTitle>
        <Title>TukTuks</Title>
        <RideCard>
          <RideImage src="https://drive.google.com/uc?id=15GlMAxV5Ml3aE0lMtQCp0DUV5pekTXoZ" />
          <TitleContainer>
            <RideCardTitle>Standard TukTuk </RideCardTitle>
            <RideDuration>5 mins away</RideDuration>
          </TitleContainer>
          <RidePrice>{rideDuration.toFixed(2)} EGP</RidePrice>
        </RideCard>
        <RideCard>
          <div className="w-3/12">
            <Image
              src="/gold_tutuk.png"
              alt="gold tuktuk"
              width="85%"
              height="55%"
            />
          </div>

          <TitleContainer>
            <RideCardTitle>Business TukTuk </RideCardTitle>
            <RideDuration>5 mins away</RideDuration>
          </TitleContainer>
          <RidePrice>{1.5 * rideDuration.toFixed()} EGP</RidePrice>
        </RideCard>
        <RideCard>
          <RideImage src="https://drive.google.com/uc?id=15GlMAxV5Ml3aE0lMtQCp0DUV5pekTXoZ" />
          <TitleContainer>
            <RideCardTitle>VIP TukTuk </RideCardTitle>
            <RideDuration>5 mins away</RideDuration>
          </TitleContainer>
          <RidePrice>{2 * rideDuration.toFixed(2)} EGP</RidePrice>
        </RideCard>
      </RideContainer>
    </Wrapper>
  );
};
const Wrapper = tw.div`flex flex-col flex-col h-screen bg-black`;
const MapBox = tw.div`flex-1 h-screen flex-1  border-4`;
const RideContainer = tw.div`flex flex-1 p-3 flex-col h-screen bg-black overflow-y-scroll `;
const RideTitle = tw.h1`shadow-lg border py-3 border-zinc-700 text-white text-center rounded font-semibold`;
const RideCard = tw.button` text-zinc-300  py-3 mb-3 transition ease-in hover:bg-white hover:text-black flex  items-center text-xl border rounded-md border-zinc-700`;
const RideImage = tw.img`w-3/12`;
const RideCardTitle = tw.h1`font-thin text-sm `;
const Title = tw.div` text-white text-2xl my-4`;
const RideDuration = tw.p`text-amber-300 text-xs font-thin  text-left  `;
const TitleContainer = tw.div`flex flex-col `;
const RidePrice = tw.p`text-xs text-slate-300 ml-auto mr-3`;
export default Confirm;
