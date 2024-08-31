import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";
const NewLetter = () => {
  return (
    <div className="">
      <div className="">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4 ">
          To get job Updates Subscibe to the email and get frequent updates
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>

        <div className="mt-20">
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <FaRocket />
            Get Noticed Faster
          </h3>
          <p className="text-primary/75 text-base mb-4 ">
            Upload your resume and get noticed faster than others
          </p>
          <div className="w-full space-y-4">
            <input
              type="file"
              id = "resume"
              className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
