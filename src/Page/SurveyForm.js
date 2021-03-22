import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { SurveyCard } from "./Components/SurveyCard/SurveyCard";
import { SubmitBtn } from "./Components/SurveyCard/Components/SubmitBtn";

export const SurveyForm = () => {
  const cardInfo = useSelector((state) => state.cardInfo);

  const submitHandler = () => {
    console.log(cardInfo);
  };

  return (
    <Wrapper>
      <SurveyCard />
      <SubmitBtn submitHandler={submitHandler} />
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
