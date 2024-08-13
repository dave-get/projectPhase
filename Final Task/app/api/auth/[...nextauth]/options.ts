import {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

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
              console.log(user)
              if (res.ok && user) {
                  return user;
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
    async jwt({ token, user }) {
      if (user) {
        token = {
          ...token,
          ...user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token as any;
      }
      return session;
    },
  },
})