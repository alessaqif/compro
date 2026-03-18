"use client";

import Image from "next/image";
import { useState } from "react";
import Backendless from "@/app/lib/backendless";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState(""); // 🔥 NAME
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = new Backendless.User();

      user.name = name; // 🔥 simpan name
      user.username = username;
      user.email = email;
      user.password = password;

      await Backendless.UserService.register(user);

      alert("Register berhasil!");
      router.push("/login");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <main className="min-h-screen flex">
      
      {/* LEFT IMAGE */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/default2.jpg"
          alt="register"
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md space-y-6">
          
          {/* Logo */}
          <div>
            <Image
              src="/logo3.png"
              alt="logo"
              width={120}
              height={40}
            />
          </div>

          {/* Title */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Create account
            </h2>
            <p className="text-gray-500 text-sm">
              Register to get started
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleRegister} className="space-y-4">
            
            {/* 🔥 NAME */}
            <input
              type="text"
              placeholder="Full Name"
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            {/* USERNAME */}
            <input
              type="text"
              placeholder="Username"
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Sign up
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}