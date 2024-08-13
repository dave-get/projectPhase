const url = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllJobs = async (accessToken: string | undefined) => {
  const res = await fetch(`${url}opportunities/search`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  // console.log("datas from the api response **************************", data);
  return data;
};

export const getJobById = async (id: string) => {
  const res = await fetch(`${url}opportunities/${id}`);
  const data = await res.json();
  return data;
};

export const getBookmarkedJobs = async (accessToken: string | undefined) => {
  const res = await fetch(`${url}bookmarks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  return data;
};