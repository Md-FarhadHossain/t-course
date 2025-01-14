import React from "react";
import HeadLine from "./HeadLine";
import BuyButton from "./BuyButton";

const HowToEnroll = () => {
  return (
    <section className="my-12 lg:p-0 md:p-0 px-2 lg:mt-12 md:mt-12 mt-8">
      <div className="bg-white rounded-3xl container mx-auto py-12">
        <div>
            <HeadLine>কিভাবে কোর্সে ভর্তি হবেন</HeadLine>
        </div>
        <div>
            <iframe
              className="lg:h-[600px] lg:w-[75%] mx-auto w-full md:h-full h-[260px] sm:h-[400px] rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2"
              src="https://www.youtube.com/embed/A7sjJj_JhQ8?si=sKBwdqFUnFKa-J04"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

          </div>

          <div className="flex justify-center py-8">
            <BuyButton />
          </div>
      </div>
    </section>
  );
};

export default HowToEnroll;
