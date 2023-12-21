import React from "react";
import styled from "styled-components";

export const Compoents = () => {
  return (
    <HeaderMenu>
      <h1>header</h1>
      <p>header</p>
    </HeaderMenu>
  );
};

const HeaderMenu = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  top: 0;
  left: 0;
  padding: 1rem 1rem 0 1rem;
  background-color: #fff;
  z-index: 999;
`;
