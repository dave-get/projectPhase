'use client';

import React from "react";
import Fetchpage from "../../component/fetchpage";
import { Provider } from "react-redux";
import { store } from "@/app/store";

const MoreInfo = ({params: {id}}: {params: {id : string}}) => {
  return (
    <Provider store={store}>
      <Fetchpage id={id}/>
    </Provider>
  );
};

export default MoreInfo;
