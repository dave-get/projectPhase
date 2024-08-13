export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const loginPage = "/authPages/loginPage";

export async function middleware(req) {
  const token = await getToken({ req });
  console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL(loginPage, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/jobs", "/description/:id*", "/myBookmarks"],
};
