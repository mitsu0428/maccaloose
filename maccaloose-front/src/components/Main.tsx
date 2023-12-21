import React from "react";
import styled from "styled-components";
import * as Header from "./Layout/HeaderComponent";
import * as Footer from "./Layout/FooterComponent";
import * as MainVisual from "./features/MainVisual";

export const Compoents = () => {
  return (
    <StyledMain>
      <Header.Compoents />
      <MainVisual.Compoents />
      <Footer.Compoents />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  height: 100vh;
`;
