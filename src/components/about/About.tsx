import React from "react";
import Image from "next/image";
import SkillsEdu from "./SkillsEdu";

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12" id="about">
        <div className="col-span-7"></div>
        <div className="col-span-7 p-4">
          <Image
            className="m-auto"
            src="/image/webdesign.jpg"
            alt=""
            width="500"
            height="500"
          ></Image>
        </div>
        <div className="col-span-5 p-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            About Me
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I&apos;ve worked as a frontend developer. I&apos;ve experience
            working with JavaScript, HTML, CSS, Vue.Js, Pinia, Vuex, Figma and
            Git. I&apos;m a quick learner and always looking to expand my
            knowledge and skills.{" "}
          </p>
          <SkillsEdu />
        </div>
      </div>
    </>
  );
};

export default About;
