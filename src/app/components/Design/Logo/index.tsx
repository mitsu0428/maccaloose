"use client";

import React from "react";
import styled from "styled-components";

export const Component = () => {
  return (
    <Wrapper>
      <Logo
        src="/maccaloose-logo-black.png"
        alt="logo"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 250px;
`;

const Logo = styled.img`
  width: 250px;
`;
