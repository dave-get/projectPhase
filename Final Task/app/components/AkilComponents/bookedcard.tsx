import { JobPost } from "@/app/type/types";
import Image from "next/image";
import React from "react";

const Bookedcard = ({ datas }: { datas: JobPost }) => {
  return (
    <div className="flex flex-col bg-gray-50 h-full w-card gap-5 font-epilogue rounded-2xl border p-5 hover:shadow-2xl transition-shadow duration-300">
      <header className="flex gap-2 w-fit">
        <div className="imagelogo shrink-0 mt-2">
          <Image src="/default.jpeg" alt="" width={40} height={40} />
        </div>
        <div className="">
          <h1 className="text-ellipsis text-header3 font-bold">
            {datas.title}
          </h1>
          <p className="font-poppins text-normal text-customGray">
            {datas.orgName}
          </p>
          <p className="text-gray-800 font-medium">
            Location: {datas.location}
          </p>
        </div>
      </header>
      <div className="flex flex-col gap-2 h-fit w-fit">
        <div className="flex gap-2">
          <p>DatePosted:</p>
          <p className="flex border bg-orange-200 rounded-lg items-center pl-5 pr-5">
            {datas.datePosted}
          </p>
        </div>
        <div className="flex gap-2">
          <p className="flex text-normal">Book Marked date:</p>
          <p className="flex border bg-green-200 rounded-lg items-center pl-5 pr-3">
            {datas.dateBookmarked}
          </p>
        </div>
        <p className="w-full border bg-blue-200 rounded-lg items-center pl-5 pr-5">
          {datas.opType}
        </p>
      </div>
    </div>
  );
};

export default Bookedcard;
