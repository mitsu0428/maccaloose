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
      src: "/slide2.jpg",
      alt: "トップ画像",
    },
    {
      src: "/slide3.jpg",
      alt: "トップ画像",
    },
  ];

  return (
    <Container>
      <Slider>
        {images.map((image, index) => (
          <Slide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
            />
          </Slide>
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 250px;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

const Slider = styled.div`
  display: flex;
  gap: 16px;
  background-color: #fff;
  padding: 84px 0;

  @media (max-width: 768px) {
    padding: 42px 0;
  }
`;

const Slide = styled.div``;

const Image = styled.img``;
