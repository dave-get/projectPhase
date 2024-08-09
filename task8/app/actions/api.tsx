const url = process.env.NEXT_PUBLIC_BASE_URL;
export const getAllJobs = async () => {
  const res = await fetch(`${url}opportunities/search`);
  const data = await res.json();
  return data;
};

export const getJobById = async (id: string) => {
  const res = await fetch(`${url}opportunities/${id}`);
  const data = await res.json();
  return data;
};
