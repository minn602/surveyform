import React from "react";
import styled from "styled-components";

export const Button = ({ iconSrc, clickHandler }) => {
  return (
    <ButtonWrapper onClick={clickHandler}>
      <img src={iconSrc} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  border: none;
  background-color: #fff;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  img {
    background-color: #fff;
  }
`;
