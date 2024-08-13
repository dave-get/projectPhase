import { getJobById } from "@/app/actions/api";
import Image from "next/image";
import React from "react";
interface props {
  params: {
    id: string;
  };
}
const Description = async ({ params }: props) => {
  const data = await getJobById(params.id);
  const job = data.data;
  return (
    <div className="grid gap-10 p-3 md:p-10 md:grid-cols-2fr-1fr md:grid-flow-col min-h-svh">
      <div className="bigger flex flex-col gap-20 pt-10">
        <div className="flex flex-col gap-5">
          <div className=" flex flex-col gap-5">
            <h1 className="text-header2 font-extrabold text-textColor4">
              Description
            </h1>
            <p>{job?.description}</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-header2 font-extrabold text-textColor4">
              Responsibilities
            </h1>
            <div className="flex gap-2 items-center mb-1">
              <div className="flex flex-col gap-3">
                {job?.responsibilities &&
                  job.responsibilities
                    .split("\n")
                    .map((responsibility: string, index: number) => (
                      <div className="flex gap-3" key={index}>
                        <span className="flex-shrink-0">
                          <Image
                            src={"/icons/image5.png"}
                            alt=""
                            width={20}
                            height={20}
                          />
                        </span>
                        <p className="text-ellipsis text-normal">
                          {responsibility}
                        </p>
                      </div>
                    ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-header2 font-extrabold text-textColor4">
              Ideal Candidate we want
            </h1>
            <ul className="flex flex-col gap-2 list-disc mb-2">
              <li className="text-ellipsis text-normal">
                {job?.idealCandidate}
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-header2 font-extrabold text-textColor4">
              When & Where
            </h1>
            <div className="flex gap-2 items-center">
              <span>
                <Image src="/icons/image6.png" alt="" width={40} height={40} />
              </span>
              <p>{job?.whenAndWhere}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="smaller flex flex-col pr-10 pb-4 gap-5">
        <div className="flex flex-col gap-5 border-b pb-4">
          <h1 className="text-header2 text-ellipsis font-extrabold text-textColor4">
            About
          </h1>
          <div className="flex flex-wrap gap-5">
            <div className="flex gap-5">
              <span>
                <Image src="/icons/image7.png" alt="" width={40} height={40} />
              </span>
              <div>
                <p className="text-ellipsis text-textColor3">Posted On</p>
                <p className="text-ellipsis text-textColor4 text-normal font-bold">
                  {job?.postedOn}
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <span>
                <Image src="/icons/image8.png" alt="" width={40} height={40} />
              </span>
              <div>
                <p className="text-ellipsis text-textColor3">Deadline</p>
                <p className="text-ellipsis text-textColor4 text-normal font-bold">
                  {job?.deadline}
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <span>
                <Image src="/icons/image6.png" alt="" width={40} height={40} />
              </span>
              <div>
                <p className="text-ellipsis text-textColor3">Location</p>
                <p className="text-ellipsis text-textColor4 text-normal font-bold">
                  {job?.location}
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <span>
                <Image src="/icons/image9.png" alt="" width={40} height={40} />
              </span>
              <div>
                <p className="text-ellipsis text-textColor3">Start Date</p>
                <p className="text-ellipsis text-textColor4 text-normal font-bold">
                  {job?.startDate}
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <span>
                <Image src="/icons/image10.png" alt="" width={40} height={40} />
              </span>
              <div>
                <p className="text-ellipsis text-textColor3">End Date</p>
                <p className="text-ellipsis text-textColor4 text-normal font-bold">
                  {job?.endDate}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 border-b pb-5 w-full">
          <h1 className="text-header2 text-ellipsis font-extrabold text-textColor4">
            Categories
          </h1>
          {/* <div className="flex gap-3 flex-wrap">
            <button className="flex pl-2 pr-2 pt-1 pb-1 border border-textColor2 bg-orange-100 text-textColor2 rounded-2xl text-ellipsis text-small">
              {job?.categories[0]}
            </button>
            <button className="flex pl-2 pr-2 pt-1 pb-1 border border-green-500 bg-green-100 text-green-500 rounded-2xl text-ellipsis text-small">
              {job?.categories[1]}
            </button>
          </div> */}
        </div>
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-header2 text-ellipsis font-extrabold text-textColor4">
            Required Skills
          </h1>
          <div className="flex flex-wrap gap-3">
            {job?.requiredSkills.map((sub: string, index: number) => (
              <div
                className="pl-2 pr-2 pt-1 pb-1 border text-textColor1 bg-orange-100 text-ellipsis text-small"
                key={index}
              >
                {sub}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
