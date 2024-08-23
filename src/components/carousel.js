import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import Image from "next/image";
import Image1 from "../assets/images/design5.jpg";
import Image2 from "../assets/images/design6.jpg";
import Image3 from "../assets/images/design7.jpg";
import Image4 from "../assets/images/design1.jpg";
import Image5 from "../assets/images/design5.jpg";
import Image6 from "../assets/images/design6.jpg";
import Image7 from "../assets/images/design7.jpg";
import Image8 from "../assets/images/design1.jpg";
import { isMobile } from "react-device-detect";

const originalImgs = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];
const imgs = [...originalImgs, ...originalImgs]; // Duplicate images for seamless effect

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 500,
};

const ScrollCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    const totalScrollWidth = (imgs.length - originalImgs.length) * 30; // Adjust scroll width based on the duplicated images
    controls.start({
      x: `-${totalScrollWidth}vw`,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: (imgs.length / 2) * 5, // Adjust duration for the doubled images
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={controls}
        onDragEnd={() => controls.stop()} // Stop the animation on drag end
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        {imgs.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            animate={{ scale: imgIndex === idx % originalImgs.length ? 1 : 0.9 }} // Adjust scaling based on original images
            transition={SPRING_OPTIONS}
            className="aspect-video shrink-0 rounded-xl"
            // style={{ height: "300px", width: isMobile ? "60vw" : "30vw" }}
          >
            <Image
              src={imgSrc}
              alt={`Carousel image ${idx + 5}`}
              objectFit="contain"
              className="rounded-xl carousel-image"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} /> */}
      <GradientEdges />
    </div>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {originalImgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
          }`}
        />
      ))}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};

export default ScrollCarousel;
