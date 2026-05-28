"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import "@/app/gallery.css"

const Gallery = ({
  imageUrl,
  alt,
  clicked,
  width,
  height
}) => {
  return (
    <motion.div
    initial={{ opacity: 0, x: -150}}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.7 }}
    transition={{duration: 1, ease: "easeOut"}}
    className="image-hover"
    onClick={clicked}
    >
      <Image src={imageUrl} width={width}
        height={height}
        alt={alt}
        className="w-auto object-cover max-h-[300px]"
      />
    </motion.div>
  );
};
export default Gallery;
