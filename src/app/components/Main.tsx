"use client";

import React from "react";
import styled from "styled-components";

import * as MaccaLooseShowCase from "@/app/components/MaccalooseShowCase";
import * as Section1 from "@/app/components/Section1";
import * as Section2 from "@/app/components/Section2";
import * as Section3 from "@/app/components/Section3";
import * as Section4 from "@/app/components/Section4";
// import * as Disable_Section6 from "@/app/components/Disable_Section6";
import * as Section7 from "@/app/components/Section7";

export const Component = () => {
  return (
    <Wrapper>
      <Section1.Component />
      <Section2.Component />
      <Section3.Component />
      <Section4.Component />
      {/* <Disable_Section6.Component /> */}
      <MaccaLooseShowCase.Component />
      <Section7.Component />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: #fcfcf0;
`;
