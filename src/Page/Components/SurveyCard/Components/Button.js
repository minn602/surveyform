import React from "react";
import styled from "styled-components";

const Button = ({ iconSrc, clickHandler }) => {
  return (
    <ButtonWrapper onClick={clickHandler}>
      <img src={iconSrc} />
    </ButtonWrapper>
  );
};

export default Button;

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
