export const Avator = ({ prop }: { prop: string }) => {
  return (
    <div className="flex-shrink h-20 md:h-full md:w-26">
      <img
        className="max-w-full h-full md:w-24 md:h-24"
        src={prop ? prop : "/default.jpeg"}
        alt=""
      />
    </div>
  );
};
