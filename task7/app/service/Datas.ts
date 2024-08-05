import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JobPostById, JobPosting } from "../type/types";


export const JobApi = createApi({
  reducerPath: "opportunities",
  baseQuery: fetchBaseQuery({ baseUrl: " https://akil-backend.onrender.com/" }),
  endpoints: (builder) => ({
    getAllOpportunity: builder.query<JobPosting, void>({
      query: () => `/opportunities/search`,
    }),
    getOpportunityById: builder.query<JobPostById, string>({
      query: (id) => `/opportunities/${id}`,
    }),
    
  }),
});

export const {
  useGetAllOpportunityQuery,
  useGetOpportunityByIdQuery,
} = JobApi;