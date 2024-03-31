"use client";

import React from "react";
import styled from "styled-components";

export const Component = () => {
  return (
    <Container>
      <StyledImagePC
        src="/maccaloose-top.jpg"
        alt="トップ画像"
      />
      <LogoPC
        src="/maccaloose-logo-white.png"
        alt="logo"
      />
      <LogoSP
        src="/maccaloose-logo-black.png"
        alt="logo"
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledImagePC = styled.img`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoPC = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  width: 350px;
  margin-right: 120px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoSP = styled.img`
  display: none;
  position: relative;
  top: 0;
  right: 0;
  width: 200px;
  margin-right: 0;

  @media (max-width: 768px) {
    display: block;
  }
`;
