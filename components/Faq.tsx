import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeadLine from "./HeadLine";
import BuyButton from "./BuyButton";

const Faq = () => {
  const faqData = [
    {
      question: "এই কোর্সটি কি সম্পূর্ণ বিগিনার ফ্রেন্ডলি?",
      answer:
        "হ্যাঁ, একেবারে বেসিক থেকে শুরু করে ধাপে ধাপে এডভান্স লেভেল পর্যন্ত শেখানো হয়।",
    },
    {
      question: "আমি কি শুধু বাংলা অথবা শুধু ইংরেজি টাইপিং শিখতে পারব?",
      answer:
        "হ্যাঁ, আপনি আপনার প্রয়োজন অনুযায়ী যেকোনো একটি অথবা উভয় ভাষাই শিখতে পারবেন।",
    },
    {
      question: "আমার কি খুব ভালো কম্পিউটার জ্ঞান থাকা দরকার?",
      answer: "না, মৌলিক কম্পিউটার ব্যবহারের জ্ঞান থাকলেই চলবে।",
    },
    {
      question: "আমি কি মোবাইল দিয়ে প্র্যাকটিস করতে পারব?",
      answer:
        "হ্যাঁ, আপনি কোর্সের ভিডিওগুলো মোবাইল দিয়ে দেখতে ও প্র্যাকটিস করতে পারবেন এবং মোবাইল দিয়ে কিভাবে প্র্যাকটিস করতে হবে এই নিয়ে বিস্তারিত করছে আলোচনা করা হয়েছে",
    },
    {
      question: "আমি কি সার্টিফিকেট পাব?",
      answer: "হ্যাঁ, কোর্স সফলভাবে শেষ করলে প্রফেশনাল সার্টিফিকেট দেওয়া হবে।",
    },
    {
      question: "কোর্স করার পর সাপোর্ট পাব কি?",
      answer: "হ্যাঁ, লাইফটাইম সাপোর্ট দেওয়া হয়।",
    },
  ];

  return (
    <section className="my-12 lg:mt-12 md:mt-12 mt-8 lg:p-0 md:p-0 px-2">
      <div className="bg-white rounded-3xl container mx-auto py-12 px-40">
        <div>
          <HeadLine>কোর্স সম্পর্কে বিস্তারিত FAQ</HeadLine>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq) => (
              <AccordionItem value={faq.question}>
                <AccordionTrigger className="text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex justify-center py-8">
          <BuyButton />
        </div>
      </div>
    </section>
  );
};

export default Faq;
