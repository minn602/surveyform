import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTitle,
  updateDesc,
  addOptions,
  deleteOption,
  updateOption,
  addCard,
  deleteCard,
} from "../../../actions";
import { QuestionInfo } from "./Components/QuestionInfo";
import { OptionForm } from "./Components/OptionForm";
import { CardButton } from "./Components/CardButton";

export const SurveyCard = () => {
  // const [numsOfOptions, setNumsOfOptions] = useState(1);
  const cardInfo = useSelector((state) => state.cardInfo);
  const dispatch = useDispatch();

  // const addOptions = () => {
  //   setNumsOfOptions((prev) => prev + 1);
  // };

  const changeTitle = (id, val) => {
    dispatch(updateTitle(id, val));
  };

  const changeDesc = (id, val) => {
    dispatch(updateDesc(id, val));
  };

  const addOptionForm = (id) => {
    dispatch(addOptions(id));
  };

  const deleteOptionForm = (cardId, optionId) => {
    dispatch(deleteOption(cardId, optionId));
  };

  const changeOption = (cardId, optionId, val) => {
    dispatch(updateOption(cardId, optionId, val));
  };

  const addCardForm = () => {
    dispatch(addCard());
  };

  const deleteCardForm = (id) => {
    dispatch(deleteCard(id));
    console.log(id);
    console.log(cardInfo);
  };

  return (
    <>
      {cardInfo.map((card) => {
        return (
          <SurveyFormCard key={card.id}>
            <QuestionInfo
              id={card.id}
              changeTitle={changeTitle}
              changeDesc={changeDesc}
            />
            <OptionForm
              id={card.id}
              options={card.options}
              deleteOptionForm={deleteOptionForm}
              changeOption={changeOption}
              addOptionForm={addOptionForm}
            />
            <CardButton
              id={card.id}
              addCardForm={addCardForm}
              deleteCardForm={deleteCardForm}
            />
          </SurveyFormCard>
        );
      })}
    </>
  );
};

const SurveyFormCard = styled.section`
  width: 60%;
  min-height: 300px;
  padding: 30px;
  margin-bottom: 24px;
  position: relative;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;
