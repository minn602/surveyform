import React from "react";
import styled from "styled-components";

const QuestionInfo = ({ id, changeTitle, changeDesc }) => {
  return (
    <Wrapper>
      <TitleInput
        onChange={(evt) => changeTitle(id, evt.target.value)}
        type="text"
        placeholder="질문을 입력해주세요"
      />
      <DescInput
        onChange={(evt) => changeDesc(id, evt.target.value)}
        type="text"
        placeholder="질문에 대한 설명을 입력해주세요"
      />
    </Wrapper>
  );
};

export default QuestionInfo;

const Wrapper = styled.div`
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const TitleInput = styled.input`
  width: 80%;
  height: 35px;
  margin-bottom: 7px;
  border: none;
  border-bottom: 1px solid rgb(221, 221, 221);
  background-color: #fff;
`;

const DescInput = styled(TitleInput)``;
