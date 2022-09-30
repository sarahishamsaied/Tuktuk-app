import React from "react";
import tw from "tailwind-styled-components";
import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti";
const SignUp = () => {
  return (
    <Wrapper className="login-wrapper">
      <Title>Sign Up</Title>
      <Text>Sign Up with one of the following options </Text>
      <SignUpOptionsContainer>
        <SignUpOptionContainer>
          <AiIcons.AiOutlineGoogle />
        </SignUpOptionContainer>
        <SignUpOptionContainer>
          <TiIcons.TiSocialFacebook className="text-xl" />
        </SignUpOptionContainer>
      </SignUpOptionsContainer>
      <InputContainer>
        <Label>Username</Label>
        <Input placeholder="Username" />
        <Label>Email</Label>
        <Input placeholder="Email" />
        <Label>Password</Label>
        <Input placeholder="Password" />
      </InputContainer>
      <LoginButton>Sign Up</LoginButton>
    </Wrapper>
  );
};
const Wrapper = tw.div`h-screen bg-zinc-900 text-white px-11 pt-24 flex flex-col`;
const Title = tw.h1`font-bold text-4xl`;
const Text = tw.p`text-slate-400 text-base mt-7`;
const SignUpOptionsContainer = tw.div`flex w-full mt-6 justify-between`;
const SignUpOptionContainer = tw.div`rounded-lg  py-4 px-11 bg-zinc-800 text-white border border-slate-400`;
const InputContainer = tw.div`flex flex-col w-full mt-11`;
const Input = tw.input`py-3 px-2 bg-zinc-800 border border-slate-400 rounded`;
const Label = tw.label`my-4`;
const LoginButton = tw.button`px-5 py-3 text-black bg-amber-400 rounded mt-8`;
export default SignUp;
