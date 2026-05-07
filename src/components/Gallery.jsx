import Headline from "./Headline";
import Image from "next/image";

const Gallery = ({
  alt,
  imageUrl,
  height,
  width,
}) => {
  return (
    <article>
      <Image
        src={imageUrl}
        width={width}
        height={height}
        alt={alt}
        className="w-auto object-cover h-[300px]"
      />
    </article>
  );
};
export default Gallery;
