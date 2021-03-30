import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducers } from "./reducers";
import SurveyForm from "./Page/SurveyForm";
import { GlobalStyle } from "./styles/GlobalStyle";

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <SurveyForm />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
