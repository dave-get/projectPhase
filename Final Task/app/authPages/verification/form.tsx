"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function OTP() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const [searchParams]: any = useSearchParams();
  const email = searchParams[1];
  console.log(email);

  useEffect(() => {
    console.log("use effect", value.length);
    const sendOTP = async () => {
      const response = await fetch(
        `https://akil-backend.onrender.com/verify-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            otp: value,
            email: email,
          }),
        }
      );
      console.log("virify user", email);
      const res = await response.json();
      console.log(res, "verify");

      if (!res.success) {
        alert("error");
        return;
      }
      if (res.success) {
        router.push("/authPages/loginPage");
      }
    };

    if (value.length === 4) {
      console.log("here we go ");
      sendOTP();
    }
  }, [value, email, router]);

  return (
    <div className="w-full flex justify-center items-center flex-col gap-5">
      <InputOTP
        maxLength={4}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup className="space-x-3 w-full">
          <InputOTPSlot
            index={0}
            className="border-2 rounded-lg border-indigo-800"
          />
          <InputOTPSlot
            index={1}
            className="border-2 rounded-lg border-indigo-800"
          />
          <InputOTPSlot
            index={2}
            className="border-2 rounded-lg border-indigo-800"
          />
          <InputOTPSlot
            index={3}
            className="border-2 rounded-lg border-indigo-800"
          />
        </InputOTPGroup>
      </InputOTP>
      <div className="flex flex-col items-center text-small">
        <p>You can request to <button className="text-customRose">Request code</button> in </p>
        <span>00:30</span>
      </div>
      <button
        type="submit"
        className="bg-violet-400 rounded-3xl font-bold font-epilogue text-white flex border justify-center w-full h-10 items-center"
      >
        Continue
      </button>
    </div>
  );
}
