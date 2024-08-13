import Image from "next/image";

export const Book = ({ prop }: { prop: string }) => {
  
  return (
    <>
      <Image src={prop} alt="" width={15} height={15} />
    </>
  );
};
