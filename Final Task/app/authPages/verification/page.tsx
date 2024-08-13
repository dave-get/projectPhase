import React from "react";
import VerifyForm from "./form";


const Verify = () => {
  return (
    <div className="h-fullScreen flex justify-center items-center">
      <div className="body flex flex-col max-w-sm h-fit gap-10 items-center border rounded-md p-5">
        <h1 className="text-header2 font-extrabold text-ellipsis font-poppins text-customeDark">
          Verify Email
        </h1>
        <p className="text-ellipsis text-gray-400 text-sm">
          We&#39;ve sent a verification code to the email address you provided. To
          complete the verification process, please enter the code here.
        </p>
        <VerifyForm />
      </div>
    </div> 
    
  );
};

export default Verify;
