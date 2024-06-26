"use client";

import React from "react";
import styled from "styled-components";
import * as Font from "@/app/styles/NextFont";
import * as LineWithText from "@/app/components/Design/LineWithText";
export const Component = () => {
  return (
    <Container>
      <LineWithText.Component bottomLineLong={true}>
        <SmallText className={Font.Font.CustomShippori.className}>
          shop
        </SmallText>
      </LineWithText.Component>

      <Wrapper>
        <RightWrapper>
          <StyledImage
            src="/maccaloose-shop.png"
            alt="店舗の画像"
          />
        </RightWrapper>

        <LeftWrapper>
          <WrapperColumn>
            <Text className={Font.Font.CustomShippori.className}>
              〒239-0844
            </Text>
            <Text className={Font.Font.CustomShippori.className}>
              神奈川県横須賀市岩戸４丁目２３ 大矢部ホームストア 5号室
            </Text>
          </WrapperColumn>

          <Vertical>
            <VerticalText className={Font.Font.CustomShippori.className}>
              店舗紹介
            </VerticalText>
          </Vertical>
        </LeftWrapper>
      </Wrapper>
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

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  padding: 0 32px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-top: 50px;
  padding: 0 32px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const WrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding-left: 16px;
  bottom: 0;
  left: 0;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  width: 50%;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SmallText = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
  text-align: left;
  letter-spacing: 0.1em;
`;

const Vertical = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  margin-top: 100px;

  &:nth-child(2) {
    margin-right: 200px;
    margin-left: 50px;

    @media (max-width: 768px) {
      margin-right: 25px;
      margin-left: 25px;
    }
  }
`;

const VerticalText = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  padding: 0;

  letter-spacing: 0.5em;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
`;
