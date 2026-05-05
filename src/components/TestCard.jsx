import TesterList from "@/components/TesterList";
import { section } from "motion/react-client";

const CardTest = ({ title, imageUrl, id }) => {
  return (
    <section>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>ID: {id}</p>
    </section>
  );
};

export default CardTest;
