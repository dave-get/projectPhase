import React from "react";
import { File, Data } from "../../component/files";
// import { list } from "postcss";
import Image from "next/image";

export interface sharedata {
  props: File;
}
interface paramsType {
  params: {
    id: string;
  };
}
const MoreInfo = ({ params }: paramsType) => {
  const jobprofile: File[] = Data.job_postings;
  const filteredJob = jobprofile.filter((job) => job.id === params.id);

  console.log(filteredJob);

  return (
    <div className="">
      {filteredJob.map((lists: File) => (
        <div
          className="grid gap-10 p-10 grid-cols-2fr-1fr grid-flow-col min-h-svh"
          key={lists.id}
        >
          <div className="bigger flex flex-col gap-20 pt-10">
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col gap-5">
                <h1 className="text-header2 font-extrabold text-textColor4">
                  Description
                </h1>
                <p>{lists.description}</p>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-header2 font-extrabold text-textColor4">
                  Responsibilities
                </h1>
                {lists.responsibilities.map((sub: string, index: number) => (
                  <div className="flex gap-2 items-center mb-1" key={index}>
                    <span>
                      <Image
                        src="/icons/image5.png"
                        alt=""
                        width={20}
                        height={30}
                      />
                    </span>
                    <p className="text-ellipsis text-normal">{sub}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-header2 font-extrabold text-textColor4">
                  Ideal Candidate we want
                </h1>
                <ul className="flex flex-col gap-2 list-disc mb-2">
                  <li className="text-ellipsis text-normal">
                    Young ({lists.ideal_candidate.age} years old){" "}
                    {lists.ideal_candidate.gender} social media manager
                  </li>
                  {lists.ideal_candidate.traits.map(
                    (sub: string, subIndex: number) => (
                      <li className="text-ellipsis text-normal" key={subIndex}>
                        {sub}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="flex flex-col gap-5">
                <h1 className="text-header2 font-extrabold text-textColor4">
                  When & Where
                </h1>
                <div className="flex gap-2 items-center">
                  <span>
                    <Image
                      src="/icons/image6.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </span>
                  <p>{lists.when_where}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col pr-10 pb-4 gap-5">
            <h1 className="text-header2 text-ellipsis font-extrabold text-textColor4">
              About
            </h1>
            <div className="flex flex-col gap-5 border-b pb-4">
              <div className="flex gap-5">
                <span>
                  <Image
                    src="/icons/image7.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </span>
                <div>
                  <p className="text-ellipsis text-textColor3">Posted On</p>
                  <p className="text-ellipsis text-textColor4 text-normal font-bold">
                    jul 1, 2023
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span>
                  <Image
                    src="/icons/image8.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </span>
                <div>
                  <p className="text-ellipsis text-textColor3">Deadline</p>
                  <p className="text-ellipsis text-textColor4 text-normal font-bold">
                    Jul 31, 2011
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span>
                  <Image
                    src="/icons/image6.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </span>
                <div>
                  <p className="text-ellipsis text-textColor3">Location</p>
                  <p className="text-ellipsis text-textColor4 text-normal font-bold">
                    Addis Ababa
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span>
                  <Image
                    src="/icons/image9.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </span>
                <div>
                  <p className="text-ellipsis text-textColor3">Start Date</p>
                  <p className="text-ellipsis text-textColor4 text-normal font-bold">
                    Aug 02, 2023
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <span>
                  <Image
                    src="/icons/image10.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </span>
                <div>
                  <p className="text-ellipsis text-textColor3">End Date</p>
                  <p className="text-ellipsis text-textColor4 text-normal font-bold">
                    Sep 02, 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 border-b pb-5">
              <h1 className="text-header2 text-ellipsis font-extrabold text-textColor4">
                Categories
              </h1>
              <div className="flex gap-3">
                <button className="pl-2 pr-2 pt-1 pb-1 border border-textColor2 bg-orange-100 text-textColor2 rounded-2xl text-ellipsis text-small">
                  {lists.about.categories[0]}
                </button>
                <button className="pl-2 pr-2 pt-1 pb-1 border border-green-500 bg-green-100 text-green-500 rounded-2xl text-ellipsis text-small">
                  {lists.about.categories[1]}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-header2 text-ellipsis font-extrabold text-textColor4">
                Required Skills
              </h1>
              <div className="flex flex-row flex-wrap gap-3">
                {lists.about.required_skills.map(
                  (sub: string, index: number) => (
                    <div
                      className="pl-2 pr-2 pt-1 pb-1 border text-textColor1 bg-orange-100 text-ellipsis text-small"
                      key={index}
                    >
                      {sub}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreInfo;
