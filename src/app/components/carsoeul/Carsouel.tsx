import React from "react";
import { motion } from "framer-motion";
import styles from "./carsouel.module.scss";
import { FC } from "react";
interface InfiniteCarouselProps {
  txt: string;
}

const InfiniteCarousel: FC<InfiniteCarouselProps> = ({ txt }) => {
  const carouselVariants = {
    animate: {
      x: [0, -100 + "%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className={styles.carouselContainer}>
      <motion.div
        className={styles.carouselTrack}
        variants={carouselVariants}
        animate="animate"
      >
        {[...Array(10)].map((_, index) => (
          <span key={index} className={styles.carouselItem}>
            {txt}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
