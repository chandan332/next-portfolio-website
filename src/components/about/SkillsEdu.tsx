"use client";
import React from "react";
import { Button } from "../ui/button";
import { v4 as uuidv4 } from "uuid";
import { data } from "@/constants/SkillsEdu";

const SkillsEdu = () => {
  let [info, setInfo] = React.useState<"skill" | "edu">("skill");

  return (
    <>
      <div className="flex gap-4">
        <Button
          variant="ghost"
          className="scroll-m-20 text-2xl font-semibold tracking-tight"
          onClick={() => {
            setInfo("skill");
          }}
        >
          Skills
        </Button>
        <Button
          variant="ghost"
          className="scroll-m-20 text-2xl font-semibold tracking-tight"
          onClick={() => {
            setInfo("edu");
          }}
        >
          Education
        </Button>
      </div>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {data[info].map((elem) => {
          return <li key={uuidv4()}>{elem}</li>;
        })}
      </ul>
    </>
  );
};

export default SkillsEdu;
