const initState = [
  {
    id: 1,
    title: "",
    desc: "",
    options: [
      {
        id: 1,
        content: "",
        checked: false,
      },
    ],
  },
];

export const cardInfo = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return state.map((el) =>
        el.id === action.payload.id
          ? {
              ...el,
              title: action.payload.val,
            }
          : el
      );
    case "UPDATE_DESC":
      return state.map((el) =>
        el.id === action.payload.id
          ? {
              ...el,
              desc: action.payload.val,
            }
          : el
      );
    case "ADD_OPTIONS":
      return state.map((el) =>
        el.id === action.payload
          ? {
              ...el,
              options: [
                ...el.options,
                {
                  id: el.options.length + 1,
                  content: "",
                  checked: false,
                },
              ],
            }
          : el
      );
    case "DELETE_OPTION":
      return state.map((el) =>
        el.id === action.payload.cardId
          ? {
              ...el,
              options: el.options.filter(
                (option) => option.id !== action.payload.optionId
              ),
            }
          : el
      );
    case "UPDATE_OPTION":
      return state.map((el) =>
        el.id === action.payload.cardId
          ? {
              ...el,
              options: el.options.map((option) =>
                option.id === action.payload.optionId
                  ? {
                      ...option,
                      content: action.payload.val,
                    }
                  : option
              ),
            }
          : el
      );
    case "ADD_CARD":
      return (state = [
        ...state,
        {
          id: state.length + 1,
          title: "",
          desc: "",
          options: [
            {
              id: 1,
              content: "",
              checked: false,
            },
          ],
        },
      ]);
    case "DELETE_CARD":
      return state.filter((el) => el.id !== action.payload);
    case "CHECK_OPTION":
      return state.map((el) =>
        el.id === action.payload.cardId
          ? {
              ...el,
              options: el.options.map((option) =>
                option.id === action.payload.optionId
                  ? {
                      ...option,
                      checked: !option.checked,
                    }
                  : option
              ),
            }
          : el
      );
    default:
      return state;
  }
};
