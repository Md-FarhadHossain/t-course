"use client";

import {
  howToDoAssign,
  learnTypingKeyboard,
  mobileTypeing,
  serverSide,
  typingBasics,
  videos,
} from "@/constant";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  const typingBasicss = pathname.includes("typing-basics");
  const howToDoAssigns = pathname.includes("howToDoAssign");
  const learnTypingKeyboards = pathname.includes("learnTypingKeyboard");
  const mobilePhones = pathname.includes("mobileTypeing");

  const handleClick = () => {
    console.log("clcked");
    console.log(pathname);
    localStorage.setItem("lastVideo", pathname);
  };

  return (
    <aside className="border-r h-screen overflow-y-scroll pt-4 sidebar pb-40 bg-white">
      <div className="px-8 pb-4 border-b mb-4 ">
        <Link
          className="block bg-blue-50 border-blue-200 hover:bg-[#2EA8FF] hover:text-white transition-all border w-fit p-2 rounded-full"
          href="/dashboard"
        >
          <ArrowLeft />
        </Link>
      </div>

      {/* Typing Basics */}
      {typingBasicss
        ? typingBasics.map((video, index) => {
            const isActive = pathname.endsWith(video.id);

            return (
              <React.Fragment key={video.id}>
                <div
                  onClick={handleClick}
                  className="mx-3 my-1 rounded-md overflow-hidden"
                >
                  <Link
                    className={cn(
                      "px-4 transition-all font- py-3 text-muted-foreground border-b block hover:bg-sky-100 hover:text-black",
                      isActive &&
                        "text-black bg-sky-300/50 font-semibold transition-all"
                    )}
                    href={`${video.id}`}
                  >
                    <p>
                      {" "}
                      <span
                        className={cn(
                          "inline-flex transition-all items-center border rounded-md px-2 py-0.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800 ml-auto mr-1",
                          isActive && "bg-red-500 text-white transition-all"
                        )}
                      >
                        Class {index + 1}:
                      </span>
                      <span>{video.label}</span>
                    </p>
                  </Link>
                </div>
              </React.Fragment>
            );
          })
        : null}

      {/* How to do assingment */}
      {howToDoAssigns
        ? howToDoAssign.map((video, index) => {
            const isActive = pathname.endsWith(video.id);

            return (
              <React.Fragment key={video.id}>
                <div
                  onClick={handleClick}
                  className="mx-3 my-1 rounded-md overflow-hidden"
                >
                  <Link
                    className={cn(
                      "px-4 transition-all font- py-3 text-muted-foreground border-b block hover:bg-sky-100 hover:text-black",
                      isActive &&
                        "text-black bg-sky-300/50 font-semibold transition-all"
                    )}
                    href={`${video.id}`}
                  >
                    <p>
                      {" "}
                      <span
                        className={cn(
                          "inline-flex transition-all items-center border rounded-md px-2 py-0.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800 ml-auto mr-1",
                          isActive && "bg-red-500 text-white transition-all"
                        )}
                      >
                        Class {index + 1}:
                      </span>
                      <span>{video.label}</span>
                    </p>
                  </Link>
                </div>
              </React.Fragment>
            );
          })
        : null}

      {/* Learn typing with keyboard */}
      {learnTypingKeyboards
        ? learnTypingKeyboard.map((video, index) => {
            const isActive = pathname.endsWith(video.id);

            return (
              <React.Fragment key={video.id}>
                <div
                  onClick={handleClick}
                  className="mx-3 my-1 rounded-md overflow-hidden"
                >
                  <Link
                    className={cn(
                      "px-4 transition-all font- py-3 text-muted-foreground border-b block hover:bg-sky-100 hover:text-black",
                      isActive &&
                        "text-black bg-sky-300/50 font-semibold transition-all"
                    )}
                    href={`${video.id}`}
                  >
                    <p>
                      {" "}
                      <span
                        className={cn(
                          "inline-flex transition-all items-center border rounded-md px-2 py-0.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800 ml-auto mr-1",
                          isActive && "bg-red-500 text-white transition-all"
                        )}
                      >
                        Class {index + 1}:
                      </span>
                      <span>{video.label}</span>
                    </p>
                  </Link>
                </div>
              </React.Fragment>
            );
          })
        : null}

      {/* Learn typing with Mobile Phone */}
      {mobilePhones
        ? mobileTypeing.map((video, index) => {
            const isActive = pathname.endsWith(video.id);

            return (
              <React.Fragment key={video.id}>
                <div
                  onClick={handleClick}
                  className="mx-3 my-1 rounded-md overflow-hidden"
                >
                  <Link
                    className={cn(
                      "px-4 transition-all font- py-3 text-muted-foreground border-b block hover:bg-sky-100 hover:text-black",
                      isActive &&
                        "text-black bg-sky-300/50 font-semibold transition-all"
                    )}
                    href={`${video.id}`}
                  >
                    <p>
                      {" "}
                      <span
                        className={cn(
                          "inline-flex transition-all items-center border rounded-md px-2 py-0.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800 ml-auto mr-1",
                          isActive && "bg-red-500 text-white transition-all"
                        )}
                      >
                        Class {index + 1}:
                      </span>
                      <span>{video.label}</span>
                    </p>
                  </Link>
                </div>
              </React.Fragment>
            );
          })
        : null}
    </aside>
  );
};

export default Sidebar;
