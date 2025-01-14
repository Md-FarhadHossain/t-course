import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import logo from "@/public/logo.png";
import logo2 from "@/public/TypingCourse.png";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Menu, ScrollText, ClipboardPenLine } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="lg:mx-[10rem] md:mx-[10rem] mx-6">
      <div className="lg:container md:container lg:w-[80%] md:w-[80%] w-full mx-auto bg-white lg:rounded-3xl md:rounded-3xl rounded-full px-3 shadow-lg py-4 mt-6 flex items-center justify-between">
        {/* Hamburger */}
        <div className="lg:hidden md:hidden block ms-4">
          <Sheet>
            <SheetTrigger className="flex items-center">
              <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="w- w-[300px]">
              <div className="lg:hidden gap-4 font-semibold md:hidden flex flex-col ">
                <Link className="border-b pb-2 hover:bg-blue-100 flex gap-2" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-house relative top-1"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                  হোম
                </Link>
                <Link className="border-b pb-2 hover:bg-blue-100 flex gap-2" href="/">
                <ScrollText className="w-[18px] h-[18px]" />
                  কারিকুলাম
                </Link>
                <Link className="border-b pb-2 hover:bg-blue-100 flex gap-2" href="/">
                <ClipboardPenLine className="w-[18px] h-[18px]"/>
                  বিস্তারিত
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="relative ms-4">
          <Link className="flex items-center gap-2" href="/dashboard">
            <Image className="lg:w-full md:w-ful w-12" src={logo} alt="Logo" />
            <Image
              className="lg:top-1 md:top-1 top-0 relative lg:w-full md:w-ful w-16"
              src={logo2}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Menu */}
        <div className="flex items-center justify-center">
          <div className="lg:flex gap-4 font-semibold md:flex hidden">
            <Link href="/">হোম</Link>
            <Link href="/">কারিকুলাম</Link>
            <Link href="/">বিস্তারিত</Link>
          </div>

          <div>
            <SignedIn>
              <Link
                className="bg-[#2EA8FF] text-white rounded-full py-2 px-4 ms-4"
                href="/dashboard"
              >
                Dashboard
              </Link>
            </SignedIn>
            <SignedOut>
              <Link
                className="bg-[#2EA8FF] text-white rounded-full py-2 px-4 ms-4"
                href="/sign-in"
              >
                লগইন করুন
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
