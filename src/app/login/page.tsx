"use client";

import Image from "next/image";
import { useState } from "react";
import Backendless from "@/app/lib/backendless";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
     await Backendless.UserService.login(email, password, true);
      window.location.href = "/";
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <main className="min-h-screen flex">
      
      {/* LEFT IMAGE (HIDDEN DI HP) */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/default.jpg" 
          alt="login"
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md space-y-6">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo3.png"
              alt="logo"
              width={120}
              height={40}
            />
            <h1 className="text-lg text-black font-semibold"></h1>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome back
            </h2>
            <p className="text-gray-500 text-sm">
              Please login to your account
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-4">
            
            <input
              type="email"
              placeholder="Email"
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Remember + Forgot */}
            <div className="flex justify-between text-sm text-gray-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="text-blue-500 cursor-pointer">
                Forgot password?
              </span>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Sign in
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link href='/register' className="text-blue-500 cursor-pointer">
              Sign up
            </ Link>
          </p>
        </div>
      </div>
    </main>
  );
}