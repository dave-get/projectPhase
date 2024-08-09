"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, InputsType } from "../../components/schema/Schema";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useRouter } from "next/navigation";
import React from "react";

const url = process.env.NEXT_PUBLIC_BASE_URL;

const Form: React.FC = () => {
  const { register, handleSubmit, formState, control } = useForm<InputsType>({
    resolver: zodResolver(SignupSchema),
  });

  const { errors } = formState;
  const router = useRouter();

  const onSubmit = async (data: InputsType) => {
    const response = await fetch(`${url}signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.fullname,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        role: "user",
      }),
    });

    const res = await response.json();
    if (!res.success) {
      alert(res.message);
    } else {
      router.push(`/authPages/verification?email=${data.email}`);
    }
  };

  return (
    <div className="flex w-full">
      <form
        noValidate
        className="flex flex-col w-full gap-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="fullname" className="">
          Full Name
        </label>
        <input
          type="text"
          className={`${
            errors.fullname ? "border-red-400" : ""
          } outline-none border border-slate-400  bg-slate-200 rounded text-small pl-3 h-10 text-ellipsis`}
          {...register("fullname")}
          placeholder="Enter your full name"
        />
        <p className="text-red-500 text-sm">
          {errors.fullname?.message as string}
        </p>

        <label htmlFor="email" className="">
          Email Address
        </label>
        <input
          type="email"
          className="outline-none border border-slate-400 bg-slate-200 rounded text-small pl-3 h-10 text-ellipsis"
          {...register("email")}
          placeholder="Enter email address"
        />
        <p className="text-red-500 text-sm">
          {errors.email?.message as string}
        </p>

        <label htmlFor="password" className="">
          Password
        </label>
        <input
          type="password"
          className="outline-none border border-slate-400 bg-slate-200 rounded text-small pl-3 h-10 text-ellipsis"
          {...register("password")}
          placeholder="Enter password"
        />
        <p className="text-red-500 text-sm">
          {errors.password?.message as string}
        </p>

        <label htmlFor="confirmPassword" className="">
          Confirm Password
        </label>
        <input
          type="password"
          className="outline-none border border-slate-400 bg-slate-200 rounded text-small pl-3 h-10 text-ellipsis"
          {...register("confirmPassword")}
          placeholder="Enter confirmation password"
        />
        <p className="text-red-500 text-sm">
          {errors.confirmPassword?.message as string}
        </p>

        <button
          className="border rounded-2xl h-10 bg-customBlue text-white"
          type="submit"
        >
          Continue
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Form;
