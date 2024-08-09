"use client";
import Image from "next/image";
import React from "react";
import Form from "./form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import BreakLine from "@/app/components/breakLine";

const SignUp = () => {
  return (
    <div className="contain flex justify-center py-4 h-fullScreen">
      <div className="flex flex-col h-fit max-w-md bg-gray-100 gap-2 p-5">
        <header className="flex flex-col w-full items-center gap-2">
          <h1 className="text-header2 font-extrabold text-customeDark font-poppins">
            Sign Up Today!
          </h1>
          <button
            className="flex gap-3 items-center border px-5 py-1 font-epilogue font-bold text-customBlue text-normal"
            onClick={() => signIn("google")}
          >
            <span>
              <Image src="/icons/image.png" alt="" width={20} height={20} />
            </span>
            <p>Sign Up with Google</p>
          </button>
          <BreakLine />
        </header>
        <Form />
        <footer>
          <div className="flex gap-2">
            <p>Already have an account?</p>
            <span className="text-normal font-poppins text-customBlue">
              <Link href="./loginPage">Login</Link>
            </span>
          </div>
          <p className="text-small text-customGray ">
            By clicking &#39;Continue&#39;, you acknowledge that you have read
            and accepted our Terms of Service and Privacy Policy.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SignUp;
