import NextAuth from "next-auth";

export interface JobPost {
  [x: string]: any;
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  ordId: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string[];
  perksAndBenefits: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  average_rating: number;
  total_reviews: number;
  eventID: string;
  dateBookmarked: string;  
}

export interface JobPosting {
  success: boolean;
  message: string;
  data: JobPost[];
  errors: string[];
  count: number;
}

export interface JobPostById {
  success: boolean;
  message: string;
  data: JobPost;
  errors: string[];
  count: number;
}

export interface BookmarkedJobs {
  data: JobPost;
}

declare module "next-auth" {
  interface Session {
    user: {
      data: {
        accessToken: string;
        email: string;
        id: string;
        name: string;
        profileComplete: boolean;
        profilePicUrl: string;
        profileStatus: string;
        refreshToken: string;
        role: string;
      };
    };
  }
}
