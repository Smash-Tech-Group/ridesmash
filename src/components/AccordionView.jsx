import React, { useState } from "react";

const AccordionView = ({ title, answer }) => {
  const [accordionViewOpen, setAccordionViewOpen] = useState(false);

  return (
    <div className="px-12 border my-2 md:my-3 rounded-md md:items-center">
      <button
        onClick={() => setAccordionViewOpen(!accordionViewOpen)}
        className="flex justify-between w-full flex-row py-4 md:pt-8"
      >
        <h1 className=" md:text-lg text-sm text-gray-500">{title}</h1>
        {/* {accordionViewOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionViewOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionViewOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm  ${
          accordionViewOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden md:p-2 rounded-md md:my-2">
            <p className="md:text-base text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionView;