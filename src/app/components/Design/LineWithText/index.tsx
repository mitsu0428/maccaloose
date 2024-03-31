"use client";

import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  textPosition?: "left" | "right";
  marginLeftSize?: string;
  bottomLineLong?: boolean;
};

export const Component = ({
  children,
  textPosition,
  marginLeftSize,
  bottomLineLong,
}: Props) => {
  return textPosition === "right" ? (
    <Wrapper $marginLeftSize={marginLeftSize}>
      <Line $bottomLineLong={bottomLineLong} />
      {children}
    </Wrapper>
  ) : (
    <Wrapper $marginLeftSize={marginLeftSize}>
      {children}
      <Line $bottomLineLong={bottomLineLong} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $marginLeftSize?: string }>`
  position: relative;
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  gap: 20px;
  margin-left: ${(props) => props.$marginLeftSize || "0"};
  @media (max-width: 768px) {
    margin-left: ${(props) => Number(props.$marginLeftSize) / 2 || "0"};
    gap: 10px;
  }
`;

const Line = styled.div<{ $bottomLineLong?: boolean }>`
  width: ${(props) => (props.$bottomLineLong ? "80%" : "50px")};
  height: 1px;
  background-color: #000;

  @media (max-width: 768px) {
    width: ${(props) => (props.$bottomLineLong ? "300px" : "30px")};
  }
`;
