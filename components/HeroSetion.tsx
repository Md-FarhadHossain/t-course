import BuyButton from "./BuyButton";
import Image from "next/image";
import star from "@/public/star.png";
import hero1 from "@/public/hero1.png"
import hero2 from "@/public/hero2.png"

const HeroSetion = () => {
  return (
    <section className="relative lg:p-0 md:p-0 px-2">
      <div className="container relative mx-auto bg-white rounded-3xl lg:mt-12 md:mt-12 mt-8 lg:py-20 md:py-20 py-10 ">
        <div>
          <Image className="absolute w-44 top-[15rem] left-[10rem] rotate-45 lg:block md:block hidden" src={hero1} alt="hero1" />
        </div>
        <div>
          <h1 className="lg:text-7xl md:text-7xl text-6xl font-bold text-center">
            টাইপিং মাস্টারি কোর্স<span className="text-[#2EA8FF]">!</span>
          </h1>
          <p className="text-center lg:w-[35rem] md:w-[35rem] w-full mt-6 lg:text-xl md:text-xl text-base mx-auto">
            এই কোর্সটি বাংলা টাইপিং এর দক্ষতা বাড়ানোর জন্য ডিজাইন করা হয়েছে।
            সহজ পদ্ধতি এবং প্র্যাকটিসের মাধ্যমে, দ্রুত ও নিখুঁত টাইপিং শিখে নিন
            আপনার নিজস্ব ভাষায়। সময় বাঁচান, দক্ষতা বাড়ান: টাইপিং শিখুন
          </p>

          <div className="flex items-center justify-center lg:w-10 md:10 w-8 gap-3 mx-auto lg:my-6 md:my-6 my-4">
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
          </div>
          <div className="flex justify-center lg:py-8 md:py-8 py-6 mb-6">
            <BuyButton />
          </div>

          <div>
            <iframe
              className="lg:h-[600px] lg:w-[75%] mx-auto w-full md:h-full h-[210px] sm:h-[400px] rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2"
              src="https://www.youtube.com/embed/A7sjJj_JhQ8?si=sKBwdqFUnFKa-J04"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

          </div>
        </div>

        <div>
          <Image className="absolute w-52 top-[12rem] right-[10rem] -rotate-45 lg:block md:block hidden" src={hero2} alt="hero1" />
        </div>
      </div>
    </section>
  );
};

export default HeroSetion;
