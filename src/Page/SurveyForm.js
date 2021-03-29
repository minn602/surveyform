import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { SurveyCard } from "./Components/SurveyCard/SurveyCard";
import { SubmitBtn } from "./Components/SurveyCard/Components/SubmitBtn";

export const SurveyForm = () => {
  const cardInfo = useSelector((state) => state.cardInfo);
  const [alertComment, setAlertComment] = useState("");

  const submitHandler = (cardInfo) => {
    //form validation 추가
    if (cardInfo.length === 1 && cardInfo[0].title === "") {
      setAlertComment("질문에 대한 정보를 입력해주세요");
    }
    if (cardInfo.length === 1 && cardInfo[0].title !== "") {
      console.log(cardInfo);
      //유저에게 폼이 제출되었음을 알려주는 알림 추가
      alert("작성한 폼이 제출완료되었습니다!");
    }
  };

  return (
    <Wrapper>
      <SurveyCard alertComment={alertComment} />
      <SubmitBtn cardInfo={cardInfo} submitHandler={submitHandler} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100 vw;
  margin: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
