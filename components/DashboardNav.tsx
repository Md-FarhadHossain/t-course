"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import logo2 from "@/public/TypingCourse.png";

const DashboardNavbar = () => {
  return (
    <nav className="border-b bg-blue-50 border-blue-200">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="py-5 lg:lg:w-1/3 lg:border-r flex justify-start w-full">
          <Link className="flex items-center gap-2" href="/dashboard">
            <Image className="w-[80%]" src={logo} alt="Logo" />
            <Image className="top-1 relative" src={logo2} alt="Logo" />
          </Link>
        </div>

        {/* Menu */}
        <div>
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
