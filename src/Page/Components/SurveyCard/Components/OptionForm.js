import React from "react";
import styled from "styled-components";

const OptionForm = ({
  id,
  options,
  deleteOptionForm,
  changeOption,
  addOptionForm,
  typeOfOptionInput,
  toggleOptionInput,
  currentTargetId,
}) => {
  return (
    <>
      {options.map((option, idx) => {
        return (
          <Wrapper key={option.id}>
            <input
              onChange={() => toggleOptionInput(id, option.id)}
              type={currentTargetId === id ? typeOfOptionInput : "radio"}
            />
            <TextInput
              onChange={(evt) => changeOption(id, option.id, evt.target.value)}
              type="text"
              placeholder={`옵션 ${idx + 1}`}
            />
            <Button onClick={() => deleteOptionForm(id, option.id)}>
              <img alt="delete-button" src="/images/minus.png" />
            </Button>
            {/* 옵션 중 가장 마지막 옵션에만 추가버튼을 추가하여 직관적으로 옵션이 추가되는 버튼임을 명시 */}
            {idx === options.length - 1 && (
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

export default OptionForm;

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
