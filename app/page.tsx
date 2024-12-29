"use client"

import Image from "next/image";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/app/firebase/config"
import { useRouter } from "next/navigation";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter()
  const userSession = sessionStorage.getItem("user")

  if(!user && !userSession) {
    router.push("/login")
  }

  console.log({user})
  return (
    <main>
      
    </main>
  );
}
