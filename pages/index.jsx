import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";
import { useEffect } from "react";
// import Navbar from "../components/Navbar";
import Map from "../components/Map";
import Header from "../components/Header";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import Link from "next/link";
export default function Home() {
  return (
    <Wrapper>
      {/* <Navbar /> */}
      <Map />
      <ActionItems>
        <Header>
          <TokTokLogoHeader src="https://drive.google.com/uc?id=1CfDk5z0pqlCacsib4i995iSy7FCc7IVa" />
          <Profile>
            <Name>Sarah Hisham</Name>
            {/* <UserImage src="https://drive.google.com/uc?id=1CfDk5z0pqlCacsib4i995iSy7FCc7IVa" /> */}
          </Profile>
        </Header>
        <AppTitle>POSY CAB</AppTitle>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <TokTokLogoBody src="https://drive.google.com/uc?id=1CfDk5z0pqlCacsib4i995iSy7FCc7IVa" />
              <CardTitle>Book a Ride</CardTitle>
            </ActionButton>
          </Link>

          <Link href="/search">
            <ActionButton>
              <BsIcons.BsCalendarDate className="text-8xl  m-auto mb-11" />
              <CardTitle>Reserve</CardTitle>
            </ActionButton>
          </Link>
        </ActionButtons>
        <InputButton>
          Where to?
          <AiIcons.AiOutlineArrowRight className=" font-bold text-3xl" />
        </InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen bg-black text-white
`;
const ActionItems = tw.div`flex-1 overflow-scroll`;
const TokTokLogoHeader = tw.img` w-1/12`;
const TokTokLogoBody = tw.img`w-8/12 m-auto mb-5 `;
const Profile = tw.div` flex justify-end`;
const Name = tw.h1` inline mt-1 mr-3`;
const UserImage = tw.img`w-1/12`;
const ActionButtons = tw.div`flex justify-around `;
const ActionButton = tw.button`w-5/12 border flex flex-col items-center justify-center rounded-lg border-white p-6 border-zinc-600 shadow-lg mt-16 hover:border-white tranistion ease-in`;
const CardTitle = tw.h1`text-white  text-center  font-bold text-xl`;
const AppTitle = tw.h1`text-white mt-32  text-center  font-bold text-5xl`;
const InputButton = tw.div`mx-5 mt-4 p-6 flex justify-between items-center rounded-md border border-zinc-600 font-bold  text-2xl text-white`;
