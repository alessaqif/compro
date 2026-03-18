"use client";

import { useEffect, useState } from "react";
import Backendless from "@/app/lib/backendless";
import { useRouter } from "next/navigation";

type Blog = {
  objectId: string;
  authorname: string;
  judul: string;
  isiblog: string;
  gambarblog: string;
  linkblog: string;
  created: string;
};

export default function Page() {
  const [data, setData] = useState<Blog[]>([]);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = (await Backendless.Data.of("blog").find()) as Blog[];
        setData(res);
      } catch (err) {
        console.error(err);
      }
    };

    const checkLogin = async () => {
      const valid = await Backendless.UserService.isValidLogin();
      setIsLogin(valid);
    };

    fetchData();
    checkLogin();
  }, []);

const Card = (item: Blog) => {
  const {
    objectId,
    judul,
    isiblog,
    gambarblog,
    linkblog,
    authorname,
    created,
  } = item;

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      key={objectId}
      className="group flex gap-4 border-b pb-6 hover:bg-gray-50 transition p-2 rounded-lg"
    >
      {/* IMAGE */}
      <div className="w-48 h-28 overflow-hidden rounded-lg flex-shrink-0 relative">
        <img
          src={gambarblog}
          alt={judul}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* TEXT */}
      <div className="flex-1">
        <a
          href={linkblog}
          target="_blank"
          className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition"
        >
          {judul}
        </a>

        {/* 🔥 AUTHOR + DATE */}
        <p className="text-xs text-gray-500 mt-1 flex items-center gap-2">
          <span>By {authorname}</span>
          <span>•</span>
          <span>{formatDate(created)}</span>
        </p>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {isiblog}
        </p>
      </div>
    </div>
  );
};

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Terbaru</h1>

        {/* BUTTON LOGIN ONLY */}
        {isLogin && (
          <button
            onClick={() => router.push("/blog/create")}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
          >
            + Tambah Blog
          </button>
        )}
      </div>

      {/* LIST BLOG */}
      <div className="space-y-6">
        {data.map(Card)}
      </div>
    </main>
  );
}