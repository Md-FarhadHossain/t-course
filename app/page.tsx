import ArrangeSection from "@/components/ArrangeSection";
import Faq from "@/components/Faq";

import HeroSetion from "@/components/HeroSetion";
import HowToEnroll from "@/components/HowToEnroll";
import LearnAll from "@/components/LearnAll";
import Navbar from "@/components/Navbar";
import SecondHero from "@/components/SecondHero";
import StudentReviews from "@/components/StudentReviews";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSetion />
      <SecondHero />
      <ArrangeSection />
      <LearnAll />
      <Faq />
      <StudentReviews />
      <HowToEnroll /> 

      <div className="flex gap-2">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/sign-in">Sign in</Link>
        <Link href="/">Home</Link>

        <UserButton />
      </div>
    </main>
  );
}
