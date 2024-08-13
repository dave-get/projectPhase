"use client";
import React, { useState } from "react";
import { Avator } from "./avator";
import { JobPost } from "@/app/type/types";

import Link from "next/link";
import { BookButton } from "../../authPages/booking/bookbutton";

export const Cards = ({ props }: { props: JobPost }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className=" flex md:gap-10 flex-wrap">
        <Avator prop={props.logoUrl} />
        <div className="flex flex-col justify-between ">
          <Link id="description" href={`/description/${props.id}`}>
            <h2 className="text-header2">{props.title}</h2>
            <p className="text-normal text-textColor3">
              {props.orgName} &#183; {props.location}
            </p>
          </Link>
          <div className="flex gap-3 text-mid">
            <p className="text-textColor2">
              Applicants: <span>{props.applicantsCount}</span>
            </p>
            <p className="flex gap-1 items-center text-customBlue">
              Views:<span>{props.viewsCount} </span>
              <span>
                <img className="w-4 h-4" src="/icons/eye.png" alt="check" />
              </span>
            </p>
            <p className="text-red-300">
              Reting: <span>{props.average_rating}</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col overflow-hidden lg:pl-20">
        <p className="mt-2 text-textColor4">{props.description}</p>
        <div className="mt-5 buttons flex gap-5 flex-wrap">
          <button className="min-w-14 h-7 border bg-lightGreen rounded-xl text-small text-green-500">
            {props.opType}
          </button>
          <div
            className="flex justify-center items-center min-w-10 h-7 border border-textColor2 rounded-xl text-normal text-textColor2"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {props.total_reviews}
            {hover && (
              <p
                className={`absolute text-mid mt-14 rounded transform transition-opacity duration-100`}
              >
                total_reviews{" "}
              </p>
            )}
          </div>
          <BookButton prop={props.isBookmarked} id={props.id} />
        </div>
      </div>
    </div>
  );
};
