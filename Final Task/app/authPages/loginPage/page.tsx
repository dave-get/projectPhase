import React from "react";
import Image from "next/image";
import Form from "./form";
import Link from "next/link";

const SignIn = () => {
  return (
    <>
      <div className="contain bg-slate-100 min-h-svh md:h-fullScreen flex flex-col md:flex-row md:p-16 p-5 gap-5">
        <div className="pageinfo border-slate-300 h-full md:w-6/12">
          <Image
            src="/welcome.jpg"
            alt=""
            className="h-full w-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col bg-white pt-10 gap-5 md:w-5/12 px-5 h-full">
          <h1 className="font-bold text-large border-b w-full text-center font-poppins pb-5">
            Welcome Back
          </h1>
          <Form />
          <div className="flex gap-1">
            <p className="text-normal font-poppins text-customGray">
              Dont have an account?
            </p>
            <span className="text-normal font-poppins text-customBlue">
              <Link href="/authPages/signupPage">Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
