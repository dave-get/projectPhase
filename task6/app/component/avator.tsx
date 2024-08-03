import Image from "next/image";

interface AvProps {
  props: string;
}
export const Avator: React.FC<AvProps> = ({ props }) => {
  return <Image src={props} alt="" width={66} height={59} />;
};
