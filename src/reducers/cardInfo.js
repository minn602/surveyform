//기본적으로 1개의 서베이 폼이 첫 렌더시 나오므로 init 상태값을 1개인 상태에서 시작
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

//id를 length 기준으로 선언하니 중간 옵션이 삭제될때 배열 인덱스 문제가 발생함

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
