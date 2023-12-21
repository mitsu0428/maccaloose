import React from "react";
import styled from "styled-components";

export const Compoents = () => {
  return (
    <FooterMenu>
      <h1>header</h1>
      <p>header</p>
    </FooterMenu>
  );
};

const FooterMenu = styled.footer`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  bottom: 0;
  left: 0;
  padding: 0 1rem 1rem 1rem;
  background-color: #fff;
  z-index: 999;
`;
