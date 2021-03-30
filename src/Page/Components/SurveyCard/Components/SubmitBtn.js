import React from "react";
import styled from "styled-components";

const SubmitBtn = ({ submitHandler, cardInfo }) => {
  return <Button onClick={() => submitHandler(cardInfo)}>Submit</Button>;
};

export default SubmitBtn;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #8f96eb;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background-color: #7c84e8;
  }
`;
