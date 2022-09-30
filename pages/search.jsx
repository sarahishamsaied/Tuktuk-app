import React, { useState } from "react";
import tw from "tailwind-styled-components";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import Router from "next/router";
import Link from "next/link";
export default function Search() {
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  return (
    <Wrapper>
      <ButtonContainer>
        <AiIcons.AiOutlineArrowLeft
          className="rounded-full hover:border transition ease-in"
          onClick={() => Router.back()}
        />
        <Title>POSY CAB</Title>
      </ButtonContainer>
      <Body>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square>
            <IoIcons.IoSquare className="text-gray-500 text-base text-center" />
          </Square>
        </FromToIcons>
        <InputContainer>
          <Input
            placeholder="Enter pickup location"
            onChange={(e) => setPickUp(e.target.value)}
          />
          <Input
            placeholder="Enter destination"
            onChange={(e) => setDropOff(e.target.value)}
          />
        </InputContainer>
        <PlusIconContainer>
          <AiIcons.AiOutlinePlusCircle className="text-white  text-4xl" />
        </PlusIconContainer>
      </Body>
      <SavedPlaces>
        <AiIcons.AiOutlineStar className="text-white text-2xl" />
        <SavedPlacesText>Saved Places</SavedPlacesText>
      </SavedPlaces>
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickUp,
            dropoff: dropOff,
          },
        }}
      >
        <ConfirmLocation>Confirm Location</ConfirmLocation>
      </Link>
    </Wrapper>
  );
}
const Wrapper = tw.div`bg-black h-screen text-white p-11 font-bold`;
const Title = tw.div`text-white font-bold ml-5 text-amber-500 `;
const ButtonContainer = tw.div`text-5xl text-white flex justify-start`;
const InputContainer = tw.div`flex  flex-col  flex-1`;
const SavedPlaces = tw.div`flex border px-4 py-5 mt-11 rounded-md border-zinc-700`;
const ConfirmLocation = tw.button`w-full bg-amber-400 text-black rounded py-3 mt-7 cursor-pointer`;
const Input = tw.input` bg-neutral-900 border pl-4  border-zinc-800 mt-6 rounded py-3 `;
const FromToIcons = tw.div`mr-5 flex flex-col pt-5  items-center`;
const Circle = tw.img`w-3 m-auto `;
const Line = tw.img`mb-5`;
const Square = tw.div``;
const Body = tw.div`flex shadow-2xl border border-zinc-800 py-9 rounded px-4 justify-start items-stretch mt-11`;
const PlusIconContainer = tw.button` flex items-center pl-6`;
const SavedPlacesText = tw.h1`ml-5`;
