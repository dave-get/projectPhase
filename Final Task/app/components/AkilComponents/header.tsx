"use client";
import { JobPosting } from "@/app/type/types";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

const Header = ({ search }: { search: JobPosting }) => {
  return (
    <div className="flex md:flex-row gap-5 justify-between items-center">
      <div className="flex flex-col w-9/12 sm:w-fit">
        <h1 className="flex w-full text-header1 text-textColor4 font-extrabold font-epilogue ">
          Opportunities
        </h1>
        <div className="flex justify-between">
          <p className="text-textColor3 flex w-/12">
            Showing {search.data.length} results
          </p>
        </div>
      </div>
      <div className="flex gap-5 w-5/12 sm:w-fit items-center flex-col sm:flex-row">
        <Link
          id="bookmarks"
          className="flex items-center px-1 text-customBlue font-bold text-ellipsis text-small bg-blue-100 rounded-lg"
          href={`/myBookmarks`}
        >
          My BookMarks
        </Link>
        <p className="text-textColor3">sort by:</p>
        <div className="flex items-center gap-2 font-epilogue text-normal">
          <select>
            <option value="title">sort by Title</option>
            <option value="">sort by </option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Header;
