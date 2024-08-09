import {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { pages } from "next/dist/build/templates/app-page";

export const AuthOptions: NextAuthOptions =({
  providers: [
    
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: { label: "email", type: "text" },
            password: { label: "Password", type: "password" }
        },
        
        async authorize(credentials, req) {
            if (!credentials) {
              return null;
            }
            try {
              const url = process.env.NEXT_PUBLIC_BASE_URL;
              console.log(url);
              const res = await fetch(`${url}login`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                      email: credentials.email,
                      password: credentials.password,
                  }),
              });

              const user = await res.json();

              if (res.ok && user) {
                  return user;
              } else {
                  return null;
              }
              } catch (error) {
                  console.error("Error during authentication:", error);
                  return null;
              }
          },
      })
    ],
    pages: {
      signIn: '/Auth/loginPage',
    },
  callbacks: {
    async signIn({ user }) {
      return !!user
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
})