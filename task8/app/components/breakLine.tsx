import React from "react";

const BreakLine = () => {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="border w-28 h-0"></div>
      <p className="flex text-ellipsis text-small px-5 py-1 text-center">
        Or Sign Up with Email
      </p>
      <div className="border w-28 h-0"></div>
    </div>
  );
};

export default BreakLine;
