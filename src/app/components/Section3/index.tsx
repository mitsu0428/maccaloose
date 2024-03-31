"use client";

import React from "react";
import styled from "styled-components";

import * as LineWithText from "@/app/components/Design/LineWithText";

export const Component = () => {
  return (
    <Container>
      <LeftWrapperPC>
        <StyledImage
          src="/maccaloose-web-24.jpg"
          alt="四季のフレーバー"
        />
      </LeftWrapperPC>

      <RightWrapper>
        <WrapperColumn>
          <EmphasizedTextRight>心を豊かにする、</EmphasizedTextRight>
          <EmphasizedTextRight>
            四季の洗練されたフレーバー。
          </EmphasizedTextRight>
        </WrapperColumn>

        <WrapperColumn>
          <LineWithText.Component
            textPosition="right"
            marginLeftSize="50px"
          >
            <SmallText>introduction</SmallText>
          </LineWithText.Component>
        </WrapperColumn>

        <WrapperColumn>
          <EmphasizedText>四季の洗練された味わい、</EmphasizedText>
          <EmphasizedText>特別な時。</EmphasizedText>
        </WrapperColumn>

        <WrapperColumn>
          <Description>
            シーズンごとに入れ替わる新鮮かつ繊細なフレーバー。
          </Description>
          <Description>
            常に新しい味を探し、旬の素材のおいしさを磨き上げ、
          </Description>
          <Description>あなたの手元で輝きます。</Description>
        </WrapperColumn>
      </RightWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 100vh;
  margin-top: 50px;
  background-color: #fff;
  overflow: hidden;
  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

const StyledImage = styled.img`
  display: block;
`;

const LeftWrapperPC = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightWrapper = styled.div`
  position: relative;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const WrapperColumn = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: right;
  flex-direction: column;
  padding: 20px 0;
  overflow: hidden;

  @media (max-width: 768px) {
    justify-content: left;
    align-items: center;
  }
`;

const EmphasizedTextRight = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0 50px 0 0;
  padding: 0;
  text-align: right;
  letter-spacing: 0.5em;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const EmphasizedText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 0 50px;
  padding: 0;
  text-align: left;
  letter-spacing: 0.5em;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0 0 0 50px;
  padding: 0;
  text-align: left;
  letter-spacing: 0.5em;
  line-height: 2;

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
