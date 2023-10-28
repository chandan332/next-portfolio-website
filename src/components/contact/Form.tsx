import React from "react";
import { handleForm } from "./action";
import SubmitButton from "./SubmitButton";

export default function Form() {
  return (
    <form className="mt-6" action={handleForm} method="POST">
      <div className="mb-4">
        <label htmlFor="name" className="block font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full border-none outline-none rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-500"
          placeholder="John Doe"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border-none outline-none rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-500"
          placeholder="john@example.com"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full border-none outline-none rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-500"
          placeholder="Your message here"
        ></textarea>
      </div>
      <SubmitButton />
    </form>
  );
}
