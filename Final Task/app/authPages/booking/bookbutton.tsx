"use client";
import { use, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Book } from "../../components/AkilComponents/book";
import { boolean } from "zod";
import { useRouter } from "next/navigation";

const url = process.env.NEXT_PUBLIC_BASE_URL;

export const BookButton = ({ prop, id }: { prop: boolean; id: string }) => {
  const [bookHover, setBookHover] = useState(false);
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();
  const [isBookmarked, setIsBookmarked] = useState(prop);
  const router = useRouter();

  const handleBook = async () => {
    const accessToken = session?.user.data.accessToken;
    setLoading(true);

    if (!accessToken) {
      console.error("Access token is missing");
      return;
    }

    try {
      // console.log(!isBookmarked);
      const bookmarkData = { id };
      if (!isBookmarked) {
        const response = await axios.post(
          `${url}bookmarks/${id}`,
          bookmarkData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        // console.log("Response data:", response.data);
        setIsBookmarked(true);
      } else {
        const response = await axios.delete(`${url}bookmarks/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // console.log("Response data:", response.data);
        setIsBookmarked(false);
      }
    } catch (error: any) {
      if (error.response) {
        console.error(
          "Server Error:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error during request:", error.message);
      }
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  return (
    <button
      className="flex justify-center w-7 h-7 border border-textColor1 rounded-xl text-small text-textColor1 items-center"
      onMouseEnter={() => setBookHover(true)}
      onMouseLeave={() => setBookHover(false)}
      onClick={handleBook}
    >
      {loading ? (
        <div className="">
          <div className="w-5 h-5 border-2 border-dashed rounded-full animate-spin border-yellow-500"></div>
        </div>
      ) : isBookmarked ? (
        <Book prop={"/icons/checked.png"} />
      ) : (
        <Book prop={"/icons/unchecked.png"} />
      )}
      {bookHover && <p className="absolute mt-14">booking</p>}
    </button>
  );
};
