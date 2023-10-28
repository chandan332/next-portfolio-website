"use client";
import { useSelector } from "react-redux";
import Confetti from "../particles/Confetti";
import Particle from "../particles/Particle";

const Animation = () => {
  let isConfetti: boolean = useSelector(
    (state: any) => state.animation.isConfetti
  );
  return <>{isConfetti ? <Confetti /> : <Particle />}</>;
};

export default Animation;
