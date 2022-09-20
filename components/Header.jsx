import React from "react";
import tw from "tailwind-styled-components";
const Header = ({ username }) => {
  return (
    <Wrapper>
      <h2 className="test">POUSY CAB</h2>{" "}
      <p className="font-thin">{username}</p>
    </Wrapper>
  );
};
const Wrapper = tw.div`
text-white flex justify-between py-4 px-7 shadow-lg rounded  font-bold
`;

export default Header;
