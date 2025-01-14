
import BuyButton from "./BuyButton";
import HeadLine from "./HeadLine";


const cousreData = [
  {
    title: "২০+ ঘণ্টার ভিডিও লেসন",
    label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে"
  },
  {
    title: "৬২টি ভিডিও",
    label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে"
  },
  {
    title: "৬ টি এসাইনমেন্ট ",
    label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে"
  },
  {
    title: "কোর্সের মেয়াদ আজীবন",
    label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে"
  },
  {
    title: "২৪/৭ সাপোর্ট",
    label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে"
  },
  {
    title: "হাতে কলমে শেখানো",
    label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে"
  },
  {
    title: "টাইপিং টিপস এন্ড ট্রিকস",
    label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে"
  },
  {
    title: "বাংলা টাইপিং গাইড",
    label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে"
  },
  {
    title: "আঙ্গুলের ব্যবহারের কৌশল",
    label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে"
  },
  {
    title: "কোর্স শেষে সার্টিফিকেট",
    label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে"
  },
  {
    title: "টাইপিং স্পিড বাড়ানোর গাইড",
    label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে"
  },
  {
    title: "আরো থাকছে অনেক কিছু",
    label: "টাইপিং নিয়ে যত ব্যাসিক্স বিষয় রয়েছে তার বিস্তারিত দেখানো হয়েছে",
    bgColor: "#2EA8FF",
    textColor: "white"
  },
]

const SecondHero = () => {
  return (
    <section className="lg:mt-12 md:mt-12 mt-8 lg:p-0 md:p-0 px-2 ">
      <div className="bg-white rounded-3xl container mx-auto py-12 px-16">
        <div className="">
          <HeadLine>এই কোর্সে যা থাকছে</HeadLine>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {cousreData.map(course => <div key={course.title}  style={{
                backgroundColor: course.bgColor || '#EFF6FF', // blue-50 as fallback
                border: course.bgColor ? 'none' : '1px solid #BFDBFE', // blue-200 as fallback
                color: course.textColor || 'inherit'
              }} className="bg-blue-50 border border-blue-200 rounded-lg px-6 py-6">
            <h1 className="text-2xl font-medium mb-3">{course.title}</h1>
            <p >{course.label}</p>
          </div>)}
        </div>

        <div className="flex justify-center py-8">
            <BuyButton />
          </div>
      </div>
    </section>
  );
};

export default SecondHero;
