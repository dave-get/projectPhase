import React from "react";
import { useGetAllOpportunityQuery } from "../service/Datas";
import Header from "./header";
import Link from "next/link";
import { Cards } from "./card";

export default function MM() {
  const { data, isError, isLoading } = useGetAllOpportunityQuery();
  console.log(data);

  if (isError) {
    return <h1>Something went wrong</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1> 
  }
  return (
    <>
      <div className="pl-32 pr-60 flex flex-col gap-10 pb-10">
        <Header />

        {data?.data.map((job) => (
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
}
