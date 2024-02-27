import React from "react";
import Profile from "../assests/main.svg";
import { styles } from "../utils/Style";

const About = () => {
  return (
    <div
      className="flex flex-wrap justify-center items-center mt-10 p-10"
      id="Home"
    >
      <div className="flex-1 py-4">
        <span className={styles.heroHeadText}>
          Hi, I'm <span className="text-red-600">Ashish</span>
          <br />
          <span className={styles.heroSubText}>
            I'm a MERN stack developer &
            <br />
            Web designer
          </span>
        </span>
      </div>
      <div className="flex flex-wrap ob">
        <img className="pr-5" src={Profile} alt="" width={600} />
      </div>
    </div>
  );
};

export default About;
