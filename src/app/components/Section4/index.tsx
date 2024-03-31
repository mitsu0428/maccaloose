"use client";

import React from "react";
import styled from "styled-components";
import * as Font from "../../styles/NextFont";
import * as LineWithText from "@/app/components/Design/LineWithText";
export const Component = () => {
  return (
    <Container>
      <WrapperRow>
        <VerticalText>
          <EmphasizedText className={Font.Font.CustomShippori.className}>
            商品紹介
          </EmphasizedText>
        </VerticalText>
        <LineWithText.Component
          textPosition="right"
          marginLeftSize="25px"
        >
          <SmallText className={Font.Font.CustomShippori.className}>
            line up
          </SmallText>
        </LineWithText.Component>
      </WrapperRow>

      <WrapperColumn>
        <EmphasizedTextMarginLeftUp
          className={Font.Font.CustomShippori.className}
        >
          地域のおいしさ、あなたのひとつまみ。
        </EmphasizedTextMarginLeftUp>
      </WrapperColumn>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
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
`;

const WrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

const EmphasizedTextMarginLeftUp = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-left: 120px;
  padding: 0;
  text-align: left;
  letter-spacing: 0.5em;

  @media (max-width: 768px) {
    margin-left: 50px;
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
