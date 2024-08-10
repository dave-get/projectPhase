import React from "react";
import Link from "next/link";
import Header from "./component/Header";
import { Data, File } from "./component/files";
import { Cards } from "./component/cards";

const jobprofile: File[] = Data.job_postings;

const Page = () => {
  return (
    <div className="pl-32 pr-60 flex flex-col gap-10">
      <Header />
      {jobprofile.map((job: File) => (
        <>
          <div
            className="bg-gray-50 font-epilogue rounded-2xl border mb-1 p-10 gap-5 hover:shadow-2xl transition-shadow duration-300"
            key={job.id}
          >
            <Link href={`/description/${job.id}`} >
              <Cards props={job} />
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default Page;
