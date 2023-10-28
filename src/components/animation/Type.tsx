"use client";
import { TypeAnimation } from "react-type-animation";
const Type = () => {
  return (
    <TypeAnimation
      sequence={[
        "UI/UX Designer",
        1000,
        "Frontend Developer",
        1000,
        "Backend Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default Type;
