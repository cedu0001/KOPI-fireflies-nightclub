import TesterList from "@/components/TesterList";
import { section } from "motion/react-client";

const CardTest = ({
  title,
  imageUrl,
  id,
  alt,
}) => {
  return (
    <section className="w-80">
      <img src={imageUrl} alt={alt} />
      <h3>{title}</h3>
      <p>ID: {id}</p>
      <p>{alt}</p>
    </section>
  );
};

export default CardTest;
