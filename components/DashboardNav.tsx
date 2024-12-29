"use client";

import { auth } from "@/app/firebase/config";
import { signOut } from "firebase/auth";
import Link from "next/link";
import React from "react";

const DashboardNavbar = () => {

  const signout = () => {
    // setLoading(true)
    return signOut(auth);
  };

  const handleSignout = (e:any) => {
    e.preventDefault();
    console.log("first")
    signout()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <nav className="border-b flex">
      <div className=" py-6 lg:lg:w-1/3 lg:border-r flex justify-center w-full">
        <Link
          className="text-xl font-semibold bg-sky-600 text-white px-4 py-2"
          href="/dashboard"
        >
          Dashboard
        </Link>
      </div>
      <div>
        {/* <button onClick={() => {
          console.log("first")
          signOut(auth)
          sessionStorage.removeItem("user")
        }}>Logout</button> */}

{/* 
        <button onClick={handleSignout} className="btn btn-warning">
          Sign Out
        </button> */}
      </div>
    </nav>
  );
};

export default DashboardNavbar;
