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
  checkOption,
} from "../../../actions";
import { QuestionInfo } from "./Components/QuestionInfo";
import { OptionForm } from "./Components/OptionForm";
import { CardButton } from "./Components/CardButton";
import { OptionFilter } from "./Components/OptionFilter";

export const SurveyCard = () => {
  const [typeOfOptionInput, setTypeOfOptionInput] = useState("radio");
  const cardInfo = useSelector((state) => state.cardInfo);
  const dispatch = useDispatch();

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
    console.log(id, "clicked");
  };

  const toggleInputType = (evt) => {
    setTypeOfOptionInput(evt.target.value);
  };

  const toggleOptionInput = (cardId, optionId) => {
    dispatch(checkOption(cardId, optionId));
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
            <OptionFilter toggleInputType={toggleInputType} />
            <OptionForm
              id={card.id}
              options={card.options}
              deleteOptionForm={deleteOptionForm}
              changeOption={changeOption}
              addOptionForm={addOptionForm}
              typeOfOptionInput={typeOfOptionInput}
              toggleOptionInput={toggleOptionInput}
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
