import React, { useEffect, useState } from "react";
import Header from "../components/AkilComponents/header";
import { Cards } from "../components/AkilComponents/card";
import { getAllJobs } from "@/app/actions/api";
import { JobPost } from "@/app/type/types";
import { getServerSession } from "next-auth";
import { AuthOptions } from "../api/auth/[...nextauth]/options";
import { JobPosting } from "../type/types";
import Link from "next/link";

const MainPage = async () => {
  const session = await getServerSession(AuthOptions);
  const jobs: JobPosting = await getAllJobs(session?.user.data.accessToken);

  return (
    <>
      <Link
        id="logout"
        className="flex text-small bg-gray-600 w-fit px-3 py-1 rounded-lg items-center text-white font-bold absolute right-32 top-10"
        href={"/api/auth/signout"}
      >
        Log Out
      </Link>
      <div className="md:pl-32 lg:pr-60 flex flex-col gap-10 md:py-10 p-1">
        <Header search={jobs} />
        {jobs.data.map((job: JobPost) => (
          <div
            className="bg-gray-50 font-epilogue rounded-2xl border mb-1 p-10 gap-5 hover:shadow-2xl transition-shadow duration-300"
            key={job.id}
          >
            <Cards props={job} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MainPage;
