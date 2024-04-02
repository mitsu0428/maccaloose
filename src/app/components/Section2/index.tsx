"use client";

import React from "react";
import styled from "styled-components";

import * as Font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Container>
      <WrapperRowWithMarginRight>
        <ImageWrapper>
          <StyledImage
            src="/section2-重ね.png"
            alt="マカルースの画像"
          />
        </ImageWrapper>

        <Vertical>
          <VerticalText className={Font.Font.CustomShippori.className}>
            ほどよい甘さが口溶ける
          </VerticalText>
          <VerticalText className={Font.Font.CustomShippori.className}>
            恵みのスイートモーメント
          </VerticalText>
        </Vertical>
      </WrapperRowWithMarginRight>

      <WrapperColumnWithMarginTop>
        <EmphasizedText className={Font.Font.CustomShippori.className}>
          こだわったのは
        </EmphasizedText>
        <EmphasizedText className={Font.Font.CustomShippori.className}>
          甘さを抑えた、自然な風味
        </EmphasizedText>
      </WrapperColumnWithMarginTop>

      <WrapperColumnWithMarginTop>
        <Description className={Font.Font.CustomShippori.className}>
          マカルースは砂糖の使用量を
        </Description>
        <Description className={Font.Font.CustomShippori.className}>
          従来の3分の1に抑え、
        </Description>
        <Description className={Font.Font.CustomShippori.className}>
          野菜の甘味を生かした
        </Description>
        <Description className={Font.Font.CustomShippori.className}>
          優しい味わいのマカロンです。
        </Description>
      </WrapperColumnWithMarginTop>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

const WrapperRowWithMarginRight = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const WrapperColumnWithMarginTop = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding-left: 50px;

  @media (max-width: 768px) {
    margin-top: 25px;
    padding-left: 25px;
  }
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

const EmphasizedText = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 0 0 0 50px;
  padding: 0;
  text-align: left;
  letter-spacing: 0.5em;

  @media (max-width: 768px) {
    margin: 0;
    font-size: 15px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0 0 0 50px;
  padding: 0;
  text-align: left;
  letter-spacing: 0.5em;
  line-height: 2;

  @media (max-width: 768px) {
    margin: 0;
    font-size: 10px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-left: 100px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 25px;
    margin-left: 25px;
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 950px;
`;
