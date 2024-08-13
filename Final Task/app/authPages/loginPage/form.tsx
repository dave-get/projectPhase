"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginType } from "../schema/Schema";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { DevTool } from "@hookform/devtools";
import { useRouter } from "next/navigation";

const Form: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const { errors } = formState;
  const router = useRouter();

  const onSubmit = async (data: LoginType) => {
    try {
      setIsLoading(true);
      console.log("Form Data:", data);

      const resp = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: "/jobs",
      });

      console.log("Sign In Response:", resp);

      if (resp?.error) {
        alert("Sign In Error: " + resp.error);
      } else {
        console.log("Sign In Successful, redirecting...");
        router.push("/jobs");
      }
    } catch (error) {
      alert("Sign In Error: " + error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col w-full gap-2"
      >
        <label
          htmlFor="email"
          className="font-poppins text-normal text-customGray font-bold"
        >
          Email Address
        </label>
        <input
          id="email"
          className="h-10 border rounded text-normal pl-3 outline-none border-slate-400"
          placeholder="Enter email address"
          type="email"
          {...register("email")}
        />
        <p className="text-red-500 text-sm">
          {errors.email?.message as string}
        </p>
        <label
          htmlFor="password"
          className="text-normal font-poppins text-customGray font-bold"
        >
          Password
        </label>
        <input
          id="password"
          className="h-10 border rounded text-normal pl-3 outline-none border-slate-400"
          placeholder="Enter password"
          type="password"
          {...register("password")}
        />
        <p className="text-red-500 text-sm">
          {errors.password?.message as string}
        </p>
        <button
          className={`border rounded-2xl h-10 bg-customBlue text-white hover:bg-indigo-800 transition-all duration-500 ${
            isLoading ? "flex items-center justify-center" : ""
          }`}
          type="submit"
          id="submit"
        >
          {isLoading ? (
            <div className="flex flex-row gap-2 items-center">
              Loging
              <div className="w-3 h-3 rounded-full bg-red-500 animate-bounce"></div>
              <div className="w-3 h-3 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-3 h-3 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
            </div>
          ) : (
            "Log In"
          )}
        </button>
      </form>
    </>
  );
};

export default Form;
