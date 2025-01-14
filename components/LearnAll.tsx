import React from "react";
import HeadLine from "./HeadLine";
import check from "@/public/checkmark.png";
import Image from "next/image";
import BuyButton from "./BuyButton";

const LearnAll = () => {
  const cousreData = [
    {
      title: "✨ মৌলিক দক্ষতা:",
      list1: "চোখ না দেখেই দ্রুত ও নির্ভুলভাবে টাইপ করতে পারবেন",
      list2: "প্রতি মিনিটে ৫০+ শব্দ টাইপ করার দক্ষতা অর্জন করবেন",
      list3: "বাংলা ও ইংরেজি উভয় ভাষায় দক্ষতার সাথে টাইপ করতে পারবেন",
      list4: "পেশাদার টাইপিস্ট হিসেবে কাজ করার যোগ্যতা অর্জন করবেন",
    },
    {
      title: "💼 কর্মক্ষেত্রের সুবিধা:",
      list1: "দ্রুত ইমেইল, রিপোর্ট ও ডকুমেন্ট তৈরি করতে পারবেন",
      list2: "অফিসের কাজে দক্ষতা ও গতি বৃদ্ধি পাবে",
      list3: "ডাটা এন্ট্রি ও কম্পিউটার অপারেটর হিসেবে কাজ করতে পারবেন",
      list4: "অনলাইন জবে দক্ষতার সাথে কাজ করতে পারবেন",
    },
    {
      title: "📱 ডিজিটাল দক্ষতা:",
      list1: "সোশ্যাল মিডিয়া কনটেন্ট দ্রুত তৈরি করতে পারবেন",
      list2: "বিভিন্ন ডিভাইসে দক্ষতার সাথে টাইপ করতে পারবেন",
      list3: "কীবোর্ড শর্টকাট ব্যবহার করে সময় বাঁচাতে পারবেন",
      list4: "পেশাদার ইমেইল ও বিজনেস কমিউনিকেশন করতে পারবেন",
    },
    {
      title: "🎯 ব্যক্তিগত উন্নতি ও আত্মবিশ্বাস:",
      list1: "টাইপিং দক্ষতার মাধ্যমে নিজের সময় ব্যবস্থাপনা উন্নত করবেন",
      list2: "আত্মবিশ্বাস বাড়াতে দক্ষতার সঙ্গে কাজ সম্পন্ন করতে পারবেন",
      list3: "লেখালেখির গতি ও মান উন্নত করতে সহায়ক হবে",
      list4: "শিক্ষার ক্ষেত্রে ও পরীক্ষার প্রস্তুতিতে টাইপিং দক্ষতা কাজে লাগবে",
    },
  ];

  return (
    <section className="lg:p-0 md:p-0 px-2 lg:mt-12 md:mt-12 mt-8">
      <div className="bg-white container mx-auto mt-12 mb-12 px-44 py-16 rounded-3xl">
        <div>
          <HeadLine>কোর্সটি করে যা শিখবেন</HeadLine>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mb-5 gap-8">
          {cousreData.map((course) => (
            <div
              className="bg-white shadow-xl rounded-xl p-8 border cursor-pointer hover:shadow-none transition-shadow"
              key={course.title}
            >
              <h1 className="text-2xl mb-4 font-semibold text-center">
                {course.title}
              </h1>
              <div className="leading-8">
                <p className="flex items-center gap-2">
                  <Image className="w-5" src={check} alt="check" />
                  {course.list1}
                </p>
                <p className="flex items-center gap-2">
                  <Image className="w-5" src={check} alt="check" />
                  {course.list2}
                </p>
                <p className="flex items-center gap-2">
                  <Image className="w-5" src={check} alt="check" />
                  {course.list3}
                </p>
                <p className="flex items-center gap-2">
                  <Image className="w-5" src={check} alt="check" />
                  {course.list4}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center py-8">
          <BuyButton />
        </div>
      </div>
    </section>
  );
};

export default LearnAll;
