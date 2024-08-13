import { getServerSession } from "next-auth";
import { AuthOptions } from "../api/auth/[...nextauth]/options";
import { getBookmarkedJobs } from "../actions/api";
import { BookmarkedJobs, JobPost } from "../type/types";
import Bookedcard from "../components/AkilComponents/bookedcard";

const Mybookmarks = async () => {
  const session = await getServerSession(AuthOptions);
  const books: BookmarkedJobs = await getBookmarkedJobs(
    session?.user.data.accessToken
  );

  return (
    <div className="flex p-10 justify-center items-center ">
      <div className="bg-slate-200 p-5 flex border justify-between rounded-lg flex-wrap gap-5 md:py-10 w-10/12">
        {!books.data?.length ? (
          <p className="text-2xl font-bold">No Bookmarks Found</p>
        ) : (
          <>
            <h1 className="w-full text-center font-bold text-header1">
              My BookMarks
            </h1>
            {books.data?.map((job: JobPost) => (
              <div>
                <Bookedcard key={job.eventID} datas={job} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Mybookmarks;
