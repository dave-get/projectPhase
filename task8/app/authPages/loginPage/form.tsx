"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginType } from "../../components/schema/Schema";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { DevTool } from "@hookform/devtools";
import { useRouter } from "next/navigation";

const Form: React.FC = () => {
  const { register, handleSubmit, formState, control } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const { errors } = formState;
  const router = useRouter();

  const onSubmit = async (data: LoginType) => {
    try {
      console.log("Form Data:", data);

      const resp = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: "/mainpage",
      });

      console.log("Sign In Response:", resp);

      if (resp?.error) {
        console.error("Sign In Error:", resp.error);
      } else {
        console.log("Sign In Successful, redirecting...");
        router.push("/mainpage");
      }
    } catch (error) {
      console.error("Submission Error:", error);
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
          className="border rounded-2xl h-10 bg-customBlue text-white hover:bg-indigo-800 transition-all duration-500"
          type="submit"
        >
          Log In
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form;
