import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-slate-200 relative">
      <div className="flex fixed top-0 justify-between px-32 py-5 items-center bg-slate-200 w-full border-b shadow-lg">
        <Image
          src="/akil-logo.png"
          width={1000}
          height={1000}
          className="w-20 h-6"
          alt=""
        />
        <p className="text-customeDark font-epilogue font-bold text-header2">
          Welcome To AKIL
        </p>
      </div>
      <Link
        href="/authPages/loginPage"
        className="border border-slate-300 px-5 py-3 w-fit hover:bg-slate-100 hover:shadow-[0_10px_20px_10px_rgba(210,200,200,0.5)] rounded-3xl text-ellipsis font-extrabold text-customeDark"
      >
        GET START
      </Link>
    </div>
  );
}
