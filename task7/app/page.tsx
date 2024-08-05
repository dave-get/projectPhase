"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Main from "./component/mainpage";

const Page = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default Page;
