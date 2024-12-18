import React from "react";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

const FaqView = () => {
  return (
    <div className="p-4 rounded-lg md:py-12">
        <div className="flex md:items-center md:justify-center py-6">
            <h1 className="text-xl md:text-4xl md:font-bold text-gray-600">FAQ</h1>
        </div>
      <Accordion
        title="How do I order for a ride?"
        answer="Kindly download the Ridesmash app from the iOS or google stores, sign up and start ordering for rides."
      />
      <Accordion
        title="Which country does Ridesmash operate in?"
        answer="Ridesmash operates in Nigeria and Ghana presently and plans to spread across 40 different countries in Africa."
      />
      <Accordion
        title="Can I book for a ride ahead?"
        answer="Yes, you can book ahead."
      />

     <Accordion
        title="How are the fares calculated?"
        answer="Fares are calculated per trip."
      />
      <Accordion
        title="Is there a monthly or weekly subscription option?"
        answer="No."
      />

      <Link to="/faq" className="flex w-full my-4 bg-primary items-center justify-center py-3 rounded-md "><h1 className="text-white ">See More</h1></Link>
           
    </div>
    
  );
};

export default FaqView;