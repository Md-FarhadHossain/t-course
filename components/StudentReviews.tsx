import Image from "next/image";
import star from "@/public/star.png";
import male from "@/public/male.png";
import female from "@/public/female.png";
import HeadLine from "./HeadLine";
import BuyButton from "./BuyButton";

const StudentReviews = () => {
  const reivews = [
    {
      name: "কামরুল হাসান",
      said: "আমি আগে কখনো টাচ টাইপিং করতে পারতাম না, এখন প্রতি মিনিটে ৫০ শব্দের বেশি টাইপ করতে পারি। কোর্সটি সত্যিই আমার ক্যারিয়ার চেইঞ্জ করে দিয়েছে। বর্তমানে একটি বড় কোম্পানিতে ডাটা এন্ট্রি অপারেটর হিসেবে কাজ করছি।",
      gender: "male",
    },
    {
      name: "সাবরিনা আক্তার",
      said: "সবচেয়ে ভালো লেগেছে স্টেপ বাই স্টেপ শেখানোর পদ্ধতি। প্রতিটা ভিডিও খুবই ক্লিয়ার। ইন্সট্রাক্টর এর পড়ানোর ধরন চমৎকার। যারা বিগিনার তাদের জন্য এই কোর্সটি perfect!",
      gender: "female,",
    },
    {
      name: "রাকিবুল ইসলাম",
      said: "আমি একজন ফ্রিল্যান্সার। এই কোর্স করার পর আমার কাজের গতি অনেক বেড়ে গেছে। আগে যে কাজ করতে ৪ ঘণ্টা লাগত, এখন ২ ঘণ্টায় শেষ করতে পারি। দারুণ কোর্স!",
      gender: "male",
    },
    {
      name: "নাজমুল হক",
      said: "লাইভ সাপোর্ট সিস্টেমটা খুবই ভালো। যখনই কোন সমস্যায় পড়েছি, সাথে সাথে সমাধান পেয়েছি। প্র্যাকটিস ম্যাটেরিয়াল গুলো খুবই হেল্পফুল। ধন্যবাদ টিমকে।",
      gender: "male",
    },
    {
      name: "আব্দুল করিম",
      said: "বয়স ৪৫ বছর। ভাবতাম এই বয়সে আর টাইপিং শেখা সম্ভব না। কিন্তু এই কোর্সের কল্যাণে এখন computer এ কাজ করতে কোন সমস্যা হয় না। যারা শিখতে চান, তাদের জন্য perfect course।",
      gender: "male",
    },
    {
      name: "তানজিলা আহমেদ",
      said: "আমি একজন ছাত্রী, পড়াশোনার পাশাপাশি টাইপিং শিখতে চেয়েছিলাম। এই কোর্স থেকে শুধু টাইপিং-ই নয়, প্রফেশনাল ইমেইল লেখা থেকে শুরু করে অনেক কিছু শিখেছি। খুবই কার্যকর একটি কোর্স।",
      gender: "female",
    },

    {
      name: "ফারজানা আক্তার রিমি",
      said: "ফ্রিল্যান্সিং কাজের জন্য পারফেক্ট টাইপিং কোর্স।কোর্সটি আমাকে ফ্রিল্যান্সিং ডেটা এন্ট্রি কাজের জন্য প্রস্তুত করেছে। টাইপিং সফটওয়্যার, শর্টকাট কী এবং স্পিড টেস্টের মতো বিষয়গুলো ছিল দারুণ। আমি অবশ্যই এটি অন্যদের রিকমেন্ড করব।",
      gender: "female",
    },
    {
      name: "নাজমুল হাসান শিমুল",
      said: "এই কোর্সটি আমার জীবনের একটি বড় পরিবর্তন এনেছে। আমি টাইপিং-এ খুব দুর্বল ছিলাম, কিন্তু এই কোর্সের সঠিক নির্দেশনা এবং অনুশীলনের মাধ্যমে এখন আমি দ্রুত এবং নির্ভুল টাইপ করতে পারি। বাংলা এবং ইংরেজি উভয় ভাষায় টাইপিং দক্ষতা অর্জন করায় আমার ফ্রিল্যান্সিং ক্যারিয়ার অনেক উন্নত হয়েছে। ধন্যবাদ!",
      gender: "male",
    },
    {
      name: "নাজনীন নাহার শ্রাবণী",
      said: `"কোর্স শেষে সার্টিফিকেট পেয়ে আমি খুব খুশি।"এই কোর্সের শেষে যে সার্টিফিকেট দেওয়া হয়েছে, তা আমার সিভিতে যোগ করার জন্য দারুণ সহায়ক হয়েছে। স্পিড টেস্ট এবং টাইপিং ফিডব্যাক ছিল খুব কার্যকর।"`,
      gender: "female",
    },
  ];

  return (
    <section className="lg:mt-12 md:mt-12 mt-8 lg:p-0 md:p-0 px-2">
      <div className="bg-white rounded-3xl container mx-auto py-12 px-">
        <div>
          <HeadLine>শিক্ষার্থীরা যা বলছে</HeadLine>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {reivews.map((review) => (
            <div
              key={review.name}
              className="bg-white relative h-fit p-8 border shadow-lg hover:cursor-pointer hover:shadow-none transition-shadow rounded-xl"
            >
              <div className="flex items-center justify-start w-6 gap-3 my-6">
                <Image src={star} alt="star" />
                <Image src={star} alt="star" />
                <Image src={star} alt="star" />
                <Image src={star} alt="star" />
                <Image src={star} alt="star" />
              </div>

              <p>{review.said}</p>

              <p className="text-lg font-medium pt-4 flex items-center gap-3">
                {review.gender === "male" ? (
                  <Image className="w-10" src={male} alt="male" />
                ) : (
                  <Image className="w-10" src={female} alt="female" />
                )}
                {review.name}
              </p>
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

export default StudentReviews;
