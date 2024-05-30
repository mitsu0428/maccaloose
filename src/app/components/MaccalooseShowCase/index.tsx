"use client";

import React from "react";
import styled from "styled-components";

export const Component = () => {
  const images = [
    {
      src: "/slide1.jpg",
      alt: "トップ画像",
    },
    {
      src: "/Maccaloose.gif",
      alt: "トップ画像",
    },
    {
      src: "/slide3.jpg",
      alt: "トップ画像",
    },
  ];

  return (
    <Container>
      <ImageWrapper>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const Image = styled.img`
  width: 450px;

  @media (max-width: 768px) {
    width: 100%;
    &:nth-child(1),
    &:nth-child(3) {
      display: none;
    }
  }
`;
