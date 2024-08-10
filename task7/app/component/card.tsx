import React from "react";
import { Avator } from "./avator";

interface cardProps {
  props: any;
}

export const Cards: React.FC<cardProps> = ({ props }) => {
  return (
    <div className="flex gap-3 flex-col">
      <div className="flex gap-5">
        <Avator />
        <div className="">
          <h2 className="text-header2">{props.title}</h2>
          <p className="text-normal text-textColor3">
            {props.company} &#183; {props.location}
          </p>
        </div>
      </div>
      <div className="">
        <p className="mt-2 text-textColor4">{props.description}</p>
        <div className="mt-5 buttons w-60 flex gap-2">
          <button className="w-20 h-7 border bg-lightGreen rounded-xl text-small text-green-500">
            In Person
          </button>
          <button className="w-20 h-7 border border-textColor2 rounded-xl text-small text-textColor2">
            Education
          </button>
          <button className="w-20 h-7 border border-textColor1 rounded-xl text-small text-textColor1">
            IT
          </button>
        </div>
      </div>
    </div>
  );
};
