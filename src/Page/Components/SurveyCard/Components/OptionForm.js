import React from "react";
import styled from "styled-components";

export const OptionForm = ({
  id,
  options,
  deleteOptionForm,
  changeOption,
  addOptionForm,
}) => {
  return (
    <>
      {options.map((option) => {
        return (
          <Wrapper key={option.id}>
            <input type="radio" />
            <TextInput
              onChange={(evt) => changeOption(id, option.id, evt.target.value)}
              type="text"
              placeholder={`옵션 ${option.id}`}
            />
            <Button onClick={() => deleteOptionForm(id, option.id)}>
              <img alt="delete-button" src="/images/minus.png" />
            </Button>
            {options.length === option.id && (
              <Button onClick={() => addOptionForm(id)}>
                <img alt="add-button" src="/images/add.png" />
              </Button>
            )}
          </Wrapper>
        );
      })}
    </>
  );
};

const Wrapper = styled.div`
  height: 25px;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  background-color: #fff;

  input,
  img {
    background-color: #fff;
  }

  input {
    border: none;
    border-bottom: 1px solid rgb(221, 221, 221);
  }
`;

const TextInput = styled.input`
  width: 50%;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  img {
    display: block;
    width: 16px;
    height: 16px;
  }
`;
