import Image from "next/image";

export const Avator = ({ prop }: { prop: string }) => {
  return <Image src={prop} alt="" width={66} height={59} unoptimized />;
};
