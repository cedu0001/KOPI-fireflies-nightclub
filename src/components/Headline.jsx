import Image from "next/image";

const Headline = ({ title }) => {
  return (
    <section className="grid place-items-center">
      <div className="flex flex-col gap-0 items-center">
        <h2 className="!py-1 leading-none mb-2">
          {title}
        </h2>
        <Image
          src="/assets/bottom_line_header.png"
          width="280"
          height="2"
          alt="Underlining text above"
          className="w-60"
        />
      </div>
    </section>
  );
};

export default Headline;
