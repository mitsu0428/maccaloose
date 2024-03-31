"use client";

import React from "react";
import styled from "styled-components";

import * as LineWithText from "@/app/components/Design/LineWithText";
export const Component = () => {
  return (
    <Container>
      <WrapperRow>
        <LineWithText.Component
          bottomLineLong={true}
          marginLeftSize="50px"
        >
          <SmallText>shop</SmallText>
        </LineWithText.Component>
      </WrapperRow>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

const WrapperRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: row;
  padding: 64px;
`;

const SmallText = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
  text-align: left;
  letter-spacing: 0.1em;
`;
