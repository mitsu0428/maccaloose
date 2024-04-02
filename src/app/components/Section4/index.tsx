"use client";

import React from "react";
import styled from "styled-components";
import * as Font from "../../styles/NextFont";
import * as LineWithText from "@/app/components/Design/LineWithText";
export const Component = () => {
  return (
    <Container>
      <AbsoluteImage
        src="/section4-重ね.png"
        alt="商品の画像"
      />

      <WrapperRow>
        <VerticalText>
          <EmphasizedText className={Font.Font.CustomNotoSansJP.className}>
            商品紹介
          </EmphasizedText>
        </VerticalText>
        <LineWithText.Component
          textPosition="right"
          marginLeftSize="25px"
        >
          <SmallText className={Font.Font.CustomNotoSansJP.className}>
            line up
          </SmallText>
        </LineWithText.Component>
      </WrapperRow>

      <WrapperColumn>
        <EmphasizedTextLeftTop className={Font.Font.CustomNotoSansJP.className}>
          地域のおいしさ、あなたのひとつまみ。
        </EmphasizedTextLeftTop>
      </WrapperColumn>

      <WrapperColumn>
        <EmphasizedTextRightBottom
          className={Font.Font.CustomNotoSansJP.className}
        >
          指先に届く自然の息吹。
        </EmphasizedTextRightBottom>
      </WrapperColumn>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100%;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

const WrapperRow = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: row;
  z-index: 10;
`;

const WrapperColumn = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 50%;
  z-index: 10;

  @media (max-width: 768px) {
    height: 150px;
    top: 25%;
  }
`;

const VerticalText = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;

  &:nth-child(2) {
    margin-right: 200px;

    @media (max-width: 768px) {
      margin-right: 50px;
    }
  }
`;

const EmphasizedText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-left: 50px;
  padding: 0;
  text-align: left;
  letter-spacing: 0.5em;

  @media (max-width: 768px) {
    margin-left: 25px;
    font-size: 12px;
  }
`;

const EmphasizedTextLeftTop = styled.p`
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  top: 50px;
  left: 50px;
  letter-spacing: 0.5em;

  @media (max-width: 768px) {
    top: 25px;
    left: 25px;
    font-size: 12px;
  }
`;

const EmphasizedTextRightBottom = styled.p`
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  bottom: 50px;
  right: 50px;
  letter-spacing: 0.5em;

  @media (max-width: 768px) {
    bottom: 25px;
    right: 25px;
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

const AbsoluteImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  opacity: 0.7;
`;
