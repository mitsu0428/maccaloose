import React from "react";
import styled from "styled-components";
import * as Header from "@/components/Layout/HeaderComponent";
import * as Footer from "@/components/Layout/FooterComponent";
import * as AboutTop from "@/components/features/about/top";

export const Compoents = () => {
  return (
    <StyledMain>
      <Header.Compoents />
      <AboutTop.Compoents />
      <Footer.Compoents />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  height: 100vh;
`;
