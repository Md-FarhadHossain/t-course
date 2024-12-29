"use client"

import { useState } from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import {auth} from "@/app/firebase/config" 
import { useRouter } from "next/navigation";



const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter()


  const [user] = useAuthState(auth);
  const userSession = sessionStorage.getItem("user")

  if(user) {
    router.push("/dashboard")
  }



  const handleLogin = async (e: any) => {
    e.preventDefault()
   try {
    const res = await signInWithEmailAndPassword(email, password);
    console.log({res});

    // sessionStorage.setItem("user", true)

    setPassword("");
    setEmail("");

    router.push("/dashboard")
   } catch (e) {
    console.error(e)
   }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-500 focus:ring-4 focus:ring-blue-400 focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="text-gray-400 text-sm text-center mt-4">
          Don&apos;t have an account? <a href="#" className="text-blue-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
