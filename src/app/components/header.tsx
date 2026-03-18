"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Backendless from "@/app/lib/backendless";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

const [loading, setLoading] = useState(true);

useEffect(() => {
  const checkLogin = async () => {
    try {
      const isValid = await Backendless.UserService.isValidLogin();
      setIsLogin(isValid);
    } catch {
      setIsLogin(false);
    } finally {
      setLoading(false);
    }
  };

  checkLogin();
}, []);

const handleAuthClick = async () => {
  if (isLogin) {
    await Backendless.UserService.logout();
    window.location.href = "/"; 
  } else {
    router.push("/login");
  }
};
if (loading) return null;
  return (
    <header className="sticky top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
       <div className="flex items-center">
  <Image
    src="/logo2.png"
    alt="Logo"
    width={70}
    height={20}
    className="object-contain"
    priority
  />
</div>

        {/* Menu */}
        <nav className="flex gap-6 text-sm text-white/80">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/service" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>
          
          <Link href="/about" className="hover:text-white transition">
            About Us
          </Link>
        </nav>

        {/* Auth Status */}
        <button
          onClick={handleAuthClick}
          className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border transition ${
            isLogin
              ? "border-green-400 text-green-400 hover:bg-green-400/10"
              : "border-white/30 text-white hover:bg-white/10"
          }`}
        >
          {/* Indicator */}
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              isLogin ? "bg-green-400" : "bg-red-400"
            }`}
          />

          {isLogin ? "Online" : "Login"}
        </button>
      </div>
    </header>
  );
}