import React from "react";
import styled from "styled-components";
import Button from "./Button";

const CardButton = ({ id, addCardForm, deleteCardForm }) => {
  return (
    <Wrapper>
      <Button clickHandler={addCardForm} iconSrc="/images/addBtn.png" />
      <Button
        clickHandler={() => deleteCardForm(id)}
        iconSrc="/images/deleteBtn.png"
      />
    </Wrapper>
  );
};

export default CardButton;

const Wrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;
