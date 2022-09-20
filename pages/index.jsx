import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";
import { useEffect } from "react";
import logo from "../imgs/Group 1.png";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import Header from "../components/Header";

export default function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Map />
      <ActionItems>
        <Header username={"sarah hisham"} />
      </ActionItems>
      <img src={logo} alt="" />
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen bg-zinc-900 text-white
`;
const ActionItems = tw.div`flex-1`;
