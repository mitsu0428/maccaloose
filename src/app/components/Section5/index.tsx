"use client";

import React from "react";
import styled from "styled-components";

export const Component = () => {
  return (
    <Container id="menu">
      <Text>マカロンの贈り言葉は、「大切なあなたに」</Text>
      <EmphasizedText>「特別なあなたへ、心からの思いを込めて」</EmphasizedText>

      <ImageWrapper>
        <StyledImage
          src="/maccaloose-menu.jpg"
          alt="maccalooseメニュー画像"
        />
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 96px;

  background-color: #fff;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 25px;
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 500px;
`;

const EmphasizedText = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 50px 0 0 50px;
  padding: 0;
  text-align: left;
  letter-spacing: 0.5em;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 0;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 20px;
  margin: 0 0 0 50px;
  padding: 0;
  text-align: left;
  letter-spacing: 0.5em;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0;
    text-align: center;
  }
`;