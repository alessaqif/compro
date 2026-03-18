"use client";

import { useEffect, useState } from "react";
import Backendless from "@/app/lib/backendless";
import { useRouter } from "next/navigation";

type Catalog = {
  objectId: string;
  vehicle: string;
  vehimage: string;
  price: string; // ✅ STRING (bebas isi)
  deskripsi: string;
  linkveh: string;
  kategoriveh: string;
};

export default function Page() {
  const [data, setData] = useState<Catalog[]>([]);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ FIX TYPE ERROR DISINI
        const res = (await Backendless.Data.of("catalog").find()) as Catalog[];
        setData(res || []);
      } catch (err) {
        console.error(err);
      }
    };

    const checkLogin = async () => {
      try {
        const valid = await Backendless.UserService.isValidLogin();
        setIsLogin(valid);
      } catch {
        setIsLogin(false);
      }
    };

    fetchData();
    checkLogin();
  }, []);

  // grouping kategori
  const matic = data.filter((i) => i.kategoriveh === "matic");
  const sport = data.filter((i) => i.kategoriveh === "sport");
  const offroad = data.filter((i) => i.kategoriveh === "offroad");

  // CARD UI
  const Card = (item: Catalog) => (
    <div
      key={item.objectId}
      className="group relative rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#020617] border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    >
      {/* LABEL */}
      <div className="absolute top-0 right-0 bg-red-600 text-xs px-3 py-1 font-semibold z-20">
        HOT
      </div>

      {/* IMAGE */}
      <div className="h-52 overflow-hidden">
        <img
          src={item.vehimage}
          alt={item.vehicle}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h2 className="text-white font-semibold text-lg">
          {item.vehicle}
        </h2>

        <p className="text-gray-400 text-sm mt-2 line-clamp-2">
          {item.deskripsi}
        </p>

        {/* PRICE + BUTTON */}
        <div className="mt-4 flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md">
          <div>
            <p className="text-xs text-gray-400">Harga</p>
            <p className="text-lg font-bold text-blue-400">
              {item.price} {/* ✅ LANGSUNG STRING */}
            </p>
          </div>

          <a
            href={item.linkveh}
            target="_blank"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:scale-110 transition"
          >
            →
          </a>
        </div>
      </div>
    </div>
  );

  // SECTION
  const Section = (title: string, items: Catalog[]) => (
    <section>
      <h1 className="text-2xl font-bold text-white mb-6">{title}</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map(Card)}
      </div>
    </section>
  );

  return (
    <main className="min-h-screen bg-black p-6 space-y-14">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold">
          Catalog
        </h1>

        {/* 🔥 BUTTON LOGIN ONLY */}
        {isLogin && (
          <button
            onClick={() => router.push("/catalog/create")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            + Tambah Catalog
          </button>
        )}
      </div>

      {/* LIST */}
      {Section("Motor Matic", matic)}
      {Section("Motor Sport", sport)}
      {Section("Motor Offroad", offroad)}

    </main>
  );
}