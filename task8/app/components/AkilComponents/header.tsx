import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-header1 text-textColor4 font-extrabold font-epilogue ">
          Opportunities
        </h1>
        <p className="text-textColor3 ">Showing 73 results</p>
      </div>
      <div className="flex gap-5">
        <p className="text-textColor3">sort by:</p>
        <div className="flex items-center gap-2">
          <select>
            <option value="">Relevant Jobs</option>
            <option value="">Relevant Jobs</option>
            <option value="">Relevant Jobs</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Header;
