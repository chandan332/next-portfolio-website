import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 px-4 my-4" id="contact">
        <div className="col-span-5">
          <div className=" lg:ms-6 ">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Let&apos;s Connect
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I&apos;m currently looking for new opportunities. If you have any
              questions, I&apos;ll try my best to get back to you.
            </p>
            <div className="my-2">
              <Link
                className="mx-2"
                target="_blank"
                href="https://github.com/chandan332"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                className="mx-2"
                target="_blank"
                href="https://www.linkedin.com/in/chandan-karmakar-6ab469285/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-7">
          <div className="lg:w-1/2 mx-auto ">
            <h2 className="text-2xl font-semibold ">Contact Us</h2>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
