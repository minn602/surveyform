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
import QuestionInfo from "./Components/QuestionInfo";
import OptionForm from "./Components/OptionForm";
import CardButton from "./Components/CardButton";
import OptionFilter from "./Components/OptionFilter";
import AlertCommnet from "./Components/AlertCommnet";

const SurveyCard = ({ alertComment }) => {
  const [typeOfOptionInput, setTypeOfOptionInput] = useState("radio");
  const [currentTargetId, setCurrentTargetId] = useState(1);
  const cardInfo = useSelector((state) => state.cardInfo);
  const dispatch = useDispatch();

  //title input event handler
  const changeTitle = (id, val) => {
    dispatch(updateTitle(id, val));
  };

  //description input event handler
  const changeDesc = (id, val) => {
    dispatch(updateDesc(id, val));
  };

  //add option form click trigger
  const addOptionForm = (id) => {
    dispatch(addOptions(id));
  };

  //delete option form click trigger
  const deleteOptionForm = (cardId, optionId) => {
    dispatch(deleteOption(cardId, optionId));
  };

  //option content input event handler
  const changeOption = (cardId, optionId, val) => {
    dispatch(updateOption(cardId, optionId, val));
  };

  //add another survey form
  const addCardForm = () => {
    dispatch(addCard());
  };

  //delete survey form
  const deleteCardForm = (id) => {
    dispatch(deleteCard(id));
  };

  //toggle the state of option checking input
  //이렇게 작성하면 바꿀때마다 모든 카드들의 인풋타입이변경됨.
  const toggleInputType = (evt, id) => {
    setTypeOfOptionInput(evt.target.value);
    setCurrentTargetId(id);
  };

  //convert option input type
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
            <OptionFilter id={card.id} toggleInputType={toggleInputType} />
            <OptionForm
              id={card.id}
              options={card.options}
              deleteOptionForm={deleteOptionForm}
              changeOption={changeOption}
              addOptionForm={addOptionForm}
              typeOfOptionInput={typeOfOptionInput}
              toggleOptionInput={toggleOptionInput}
              currentTargetId={currentTargetId}
            />
            <CardButton
              id={card.id}
              addCardForm={addCardForm}
              deleteCardForm={deleteCardForm}
            />
            <AlertCommnet alertComment={alertComment} />
          </SurveyFormCard>
        );
      })}
    </>
  );
};

export default SurveyCard;

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
