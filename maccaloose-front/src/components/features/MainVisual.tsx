import React from "react";
import styled from "styled-components";
import * as Button from "../ui/Button";

export const Compoents = () => {
  return (
    <Wrapper>
      <Button.Component
        key="1"
        buttonText="button"
        onClick={() => console.log("button")}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
