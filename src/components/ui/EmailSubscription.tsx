import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const EmailSubscription = () => {
  return (
    <form>
      <label
        htmlFor="email"
        className="bg-neutral-600/30  rounded-full inline-flex items-center justify-center py-0 pl-4"
      >
        <input
          type="email"
          placeholder="Email Address"
          id="email"
          className="border-0 outline-0 focus:outline-0 basis-4/5  placeholder:font-light"
        />
        <button className="w-full h-full bg-primary p-2 rounded-r-full cursor-pointer cursor-pointer">
          <FaLocationArrow />
        </button>
      </label>
    </form>
  );
};

export default EmailSubscription;
