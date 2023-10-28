import Image from "next/image";
import Link from "next/link";
import Type from "../animation/Type";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-8 place-self-center m-6">
          <h1 className="my-4 text-4xl lg:text-6xl h-[8rem] md:h-auto font-bold">
            Hello, I&apos;m
            <br />
            <Type />
          </h1>
          <blockquote className=" border-l-2 pl-6 italic">
            &quot;I&apos;m Chandan Karmakar, and I&apos;m currently a student.
            I&apos;m in my Final year, majoring in BCA at IGNOU. I&apos;ve
            always been passionate about Web Development.&quot;
          </blockquote>
          <div className="mt-4">
            <Link className="me-2" href="#contact">
              <Button variant="secondary">Hire Me</Button>
            </Link>
            <Link className="me-2" target="_blank" href="/pdf/resume.pdf">
              <Button variant="outline">Download CV</Button>
            </Link>
          </div>
        </div>
        <div className="col-span-4 self-center">
          <div className="w-[300px] h-[300px] m-auto flex justify-center items-center">
            <Image
              className="rounded-full"
              src="/image/boypic1.jpg"
              alt=""
              width="250"
              height="250"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
