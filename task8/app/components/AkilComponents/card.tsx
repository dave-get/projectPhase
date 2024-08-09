import React from "react";
import { Avator } from "./avator";
import { JobPost } from "@/app/type/types";

export const Cards = ({ props }: { props: JobPost }) => {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0">
        <Avator prop={props.logoUrl} />
      </div>
      <div className="">
        <div className="">
          <h2 className="text-header2">{props.title}</h2>
          <p className="text-normal text-textColor3">
            {props.orgName} &#183; {props.location}
          </p>
        </div>
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
