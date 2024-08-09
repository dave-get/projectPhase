"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Form from "./form";
import Link from "next/link";

const SignIn = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="contain bg-slate-100 h-fullScreen flex justify-around p-20">
        <div className="pageinfo border-slate-400 border  w-6/12">
          <Image
            src="/welcome.jpg"
            alt=""
            className="h-full w-full"
            width={100}
            height={100}
          />
        </div>
        <div className="bg-slate-200 flex flex-col w-96 pt-10 gap-5 border-slate-400 border px-5">
          <h1 className="font-bold text-large border-b w-full text-center font-poppins pb-5">
            Welcome Back
          </h1>
          <Form />
          <div className="flex gap-3">
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
