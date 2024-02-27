import React from "react";
import Tilt from "react-parallax-tilt";
import { styles } from "../utils/Style";
import { motion } from "framer-motion";

const Overview = () => {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3 "
        id="overview"
      >
        <span className={styles.sectionHeadText}>Introduction</span>
        <hr className="w-[35%]" />
        <div className={styles.sectionText}>
          I am a versatile MERN stack developer with expertise in frontend
          frameworks like React.js and CSS frameworks such as Bootstrap and
          Tailwind CSS. I specialize in crafting modern and user-friendly web
          applications, utilizing MongoDB and Node.js for backend
          functionalities to deliver efficient and scalable solutions.Let's work
          together to bring your ideas to life!"
        </div>
      </div>
      <div className="flex flex-wrap justify-center"></div>
    </div>
  );
};

export default Overview;
