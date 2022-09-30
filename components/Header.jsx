import React from "react";
import tw from "tailwind-styled-components";
const Header = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = tw.div`
text-white fixed w-full bg-black flex justify-between py-4 px-7 shadow-lg rounded  font-bold
`;

export default Header;
