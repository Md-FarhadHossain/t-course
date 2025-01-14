import React from "react";
import HeadLine from "./HeadLine";
import BuyButton from "./BuyButton";

const ArrangeSection = () => {
  const cousreData = [
    {
      title: "২০+ ঘণ্টার ভিডিও লেসন",
      label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে",
    },
    {
      title: "৬২টি ভিডিও",
      label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে",
    },
    {
      title: "৬ টি এসাইনমেন্ট ",
      label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে",
    },
    {
      title: "কোর্সের মেয়াদ আজীবন",
      label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে",
    },
  ];

  return (
    <section className="lg:p-0 md:p-0 px-2">
      <div className="bg-white container mx-auto px-28 py-16 lg:mt-12 md:mt-12 mt-8 rounded-3xl">
        <div>
          <HeadLine>কোর্সটি যেভাবে সাজানো হয়েছে</HeadLine>
        </div>

        {/* <div className='grid lg:grid-cols-2 bg-[#2EA8FF] rounded-3xl'>
                {cousreData.map(course => <div key={course.title} className='border border-white py-20 px-8 text-white'>
                    
                    <h1 className='text-3xl font-medium'>{course.title}</h1>
                    <p>{course.label}</p>
                   
                </div>)}


            </div> */}

        <div className="grid lg:grid-cols-2 bg-[#2EA8FF] rounded-3xl p-10">
          <div className="py-20 px-8 text-white border-r border-b border-white">
            <h1 className="text-3xl font-medium">৬০+ Hands-on ভিডিও লেকচার</h1>
            <p>
              হাতে কলমে ইমেইল মার্কেটিং স্কিল শেখানো এবং ফ্রিল্যান্সিং সংক্রান্ত
              বিষয়াদি নিয়ে আলোচনা
            </p>
          </div>
          <div className="py-20 px-8 text-white border-b border-white">
            <h1 className="text-3xl font-medium">৬ টি এসাইনমেন্ট</h1>
            <p>
              হাতে কলমে ইমেইল মার্কেটিং স্কিল শেখানো এবং ফ্রিল্যান্সিং সংক্রান্ত
              বিষয়াদি নিয়ে আলোচনা
            </p>
          </div>
          <div className="py-20 px-8 text-white border-r border-white">
            <h1 className="text-3xl font-medium">৬০+ Hands-on ভিডিও লেকচার</h1>
            <p>
              হাতে কলমে ইমেইল মার্কেটিং স্কিল শেখানো এবং ফ্রিল্যান্সিং সংক্রান্ত
              বিষয়াদি নিয়ে আলোচনা
            </p>
          </div>
          <div className="py-20 px-8 text-white border-white">
            <h1 className="text-3xl font-medium">৬০+ Hands-on ভিডিও লেকচার</h1>
            <p>
              হাতে কলমে ইমেইল মার্কেটিং স্কিল শেখানো এবং ফ্রিল্যান্সিং সংক্রান্ত
              বিষয়াদি নিয়ে আলোচনা
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-center py-8 mb-6">
            <BuyButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArrangeSection;
