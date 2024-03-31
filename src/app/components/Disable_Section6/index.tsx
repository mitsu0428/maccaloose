"use client";

import React from "react";
import styled from "styled-components";

export const Component = () => {
  return (
    <Container>
      <Text>次回作のマカロンフレーバー</Text>
      <Text>の説明</Text>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: left;
  letter-spacing: 0.5em;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
