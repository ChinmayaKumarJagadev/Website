// import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import Image2 from "../assets/images/5.jpg";
// import Image1 from "../assets/images/design1.jpg";
// import Image21 from "../assets/images/design2.jpg";
// import Image3 from "../assets/images/design3.jpg";
// import Image4 from "../assets/images/design4.jpg";
// import Image5 from "../assets/images/design5.jpg";
// import Image6 from "../assets/images/design6.jpg";
// import Image7 from "../assets/images/design7.jpg";
// import Image8 from "../assets/images/design8.jpg";
// import Image9 from "../assets/images/design9.jpg";
import bgImage from "../assets/images/bg-1.jpg";

// const images = [Image1, Image21, Image3 , Image4, Image5, Image6, Image7, Image8, Image9];

// export default function Home() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="flex justify-center items-center overflow-hidden relative pt-2">
//       <div className="w-full h-full relative">
//       <div className="absolute w-1/2 h-full left-0 bottom -5 z-10 flex item-center">
//           <Image
//             src={images[currentImageIndex]}
//             alt={`Hero Image Error`}
//             className="w-9/15 h-full object-fill object-center sm:object-center transition-opacity duration-1000 ease-in-out"
//             style={{ height: "100%" }}
//           />
//         </div>
//         <motion.div
//           className="absolute text-white text-2xl w-4/6 sm:w-9/12 md:w-2/5 font-bold italic right-0 z-20"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 100 }}
//           transition={{
//             duration: 6,
//             ease: "easeInOut",
//             repeat: Infinity,
//             repeatType: "loop",
//           }}
//         >
//           Transform your space with HomeSolution.com <br /> —where cutting-edge
//           civil engineering meets stunning interior design, creating
//           environments that inspire and endure.
//         </motion.div>

//         <div className="absolute w-full h-full">
//           <iframe
//             className="absolute bottom-40 right-20 w-1/3 h-1/3 object-cover z-10"
//             src="https://www.youtube.com/embed/a4vYNrfZ6Wo"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             title="YouTube Video"
//           ></iframe>
//         </div>

//         <div className="relative w-full h-full">
//           <div className="absolute inset-0 bg-black opacity-65 z-5"></div>
//           <Image
//             src={Image2}
//             alt={`Hero Image Error`}
//             className="w-full h-full object-cover object-center sm:object-center transition-opacity duration-1000 ease-in-out"
//             style={{ height: "calc(100vh - 72px)" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";

// function Hero() {
//   return (
//     <div className="flex relative" style={{ height: "calc(100vh - 64px)" }}>
//       <div className="absolute top-60 left-20">
//         {/* <motion.div
//         className="absolute text-white text-2xl  sm:w-9/12 md:w-2/5 font-bold italic z-20
//              top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center leading-loose"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 50 }}
//         transition={{
//           duration: 5,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatType: "loop",
//         }}
//       >
//         Turning your dreams into beautifully designed realities
//       </motion.div> */}
//         <button
//           //   onClick={onClick}
//           className="px-6 py-3 font-bold text-white bg-green-500 rounded-lg shadow-2xl overflow-hidden group"
//         >
//           <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-900 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
//           <span className="relative z-10">Book A Consultation</span>
//           <span className="absolute left-0 top-0 w-1/2 h-full bg-white opacity-20 transform -skew-x-12 transition-transform duration-300 ease-out group-hover:translate-x-full"></span>
//         </button>
//       </div>

//       <motion.div
//         className="absolute text-white text-md sm:text-lg md:text-2xl 5  italic z-20
//              top-1/2  text-center leading-snug sm:leading-relaxed text-style right-0"
//         initial={{ opacity: 0, y: -350 }}
//         animate={{ opacity: 1, y: -200 }}
//         transition={{
//           duration: 5,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatType: "loop",
//         }}
//       >
//         Transform your space with HomeSolution.com <br />
//         <span className="text-3xl font-bold">where cutting-edge
//         civil engineering meets stunning interior design,</span> creating environments
//         that inspire and endure.
//       </motion.div>

//       <Image
//         src={bgImage}
//         alt="Your Image"
//         className="w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//     </div>
//   );
// }

// export default Hero;

import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {isMobile} from 'react-device-detect';
import ScrollCarousel from "./carousel";

function Hero() {
  const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  console.log(isMobile, '--')
  return (
    <motion.section
      style={{
        backgroundImage,
        height: "calc(100vh - 64px)",
      }}
      className="relative place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <motion.div
        className="absolute text-white  italic z-20
             top-10 text-center leading-snug sm:leading-relaxed text-style"
        // initial={{ opacity: 0, x: -150 }}
        // animate={{ opacity: 1, x: 500 }}
        initial={{ opacity: 0, x: !isMobile ? -150  : -100}}
        animate={{ opacity: 1, x: !isMobile ?  700 : 50}}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <span
          className="text-2xl font-bold
          max-w-3xl text-white bg-clip-text text-center text-xl font-medium leading-tight 
          text-transparent sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight"
        >
          Turning your dreams into <br />
          beautifully designed realities
        </span>
      </motion.div>

      <ScrollCarousel/>
      <motion.button
        style={{ border, boxShadow }}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        className="absolute flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-6 py-4 
          text-gray-50 transition-colors hover:bg-gray-950/50  text-2xl right-10"
      >
        Book A Consultation
        <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
      </motion.button>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} count={1500} factor={9} fade speed={7} />
        </Canvas>
      </div>
    </motion.section>
  );
}

export default Hero;
