export const updateTitle = (id, val) => {
  return {
    type: "UPDATE_TITLE",
    payload: { id, val },
  };
};

export const updateDesc = (id, val) => {
  return {
    type: "UPDATE_DESC",
    payload: { id, val },
  };
};

export const addOptions = (id) => {
  return {
    type: "ADD_OPTIONS",
    payload: id,
  };
};

export const deleteOption = (cardId, optionId) => {
  return {
    type: "DELETE_OPTION",
    payload: {
      cardId,
      optionId,
    },
  };
};

export const updateOption = (cardId, optionId, val) => {
  return {
    type: "UPDATE_OPTION",
    payload: {
      cardId,
      optionId,
      val,
    },
  };
};

export const addCard = () => {
  return {
    type: "ADD_CARD",
  };
};

export const deleteCard = (id) => {
  return {
    type: "DELETE_CARD",
    payload: id,
  };
};

export const checkOption = (cardId, optionId) => {
  return {
    type: "CHECK_OPTION",
    payload: {
      cardId,
      optionId,
    },
  };
};
