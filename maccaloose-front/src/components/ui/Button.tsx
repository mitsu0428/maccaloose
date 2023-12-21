import React from "react";
import styled from "styled-components";

type Props = {
  key: string | number;
  buttonText: string;
  onClick?: () => void;
};

export const Component = (props: Props) => {
  const { key, buttonText, onClick } = props;

  return (
    <StyledButton
      key={key}
      onClick={onClick}
    >
      {buttonText}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: #fff;
  display: inline-block;
  margin: 0 0.5rem;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  background-color: black;
  &:hover {
    background-color: white;
  }
`;
