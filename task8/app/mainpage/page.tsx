import React from "react";
import Header from "../components/AkilComponents/header";
import Link from "next/link";
import { Cards } from "../components/AkilComponents/card";
import { getAllJobs } from "@/app/actions/api";
import { JobPost } from "@/app/type/types";

const MainPage = async () => {
  const data = await getAllJobs();

  return (
    <>
      <div className="pl-32 pr-60 flex flex-col gap-10 pb-10">
        <Header />
        {data?.data.map((job: JobPost) => (
          <>
            <div
              className="bg-gray-50 font-epilogue rounded-2xl border mb-1 p-10 gap-5 hover:shadow-2xl transition-shadow duration-300"
              key={job.id}
            >
              <Link href={`/description/${job.id}`}>
                <Cards props={job} />
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default MainPage;
