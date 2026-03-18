"use client";

import { useState, useEffect } from "react";
import Backendless from "@/app/lib/backendless";
import { useRouter } from "next/navigation";

export default function CreateCatalog() {
  const [vehicle, setVehicle] = useState("");
  const [vehimage, setVehimage] = useState("");
  const [price, setPrice] = useState(""); // ✅ STRING
  const [deskripsi, setDeskripsi] = useState("");
  const [linkveh, setLinkveh] = useState("");
  const [kategoriveh, setKategori] = useState("matic");

  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const valid = await Backendless.UserService.isValidLogin();
      if (!valid) {
        alert("Harus login dulu!");
        router.push("/");
      }
    };

    checkLogin();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await Backendless.Data.of("catalog").save({
        vehicle,
        vehimage,
        price, // ✅ LANGSUNG STRING
        deskripsi,
        linkveh,
        kategoriveh,
      });

      alert("Catalog berhasil ditambahkan!");
      router.push("/service");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f172a] p-6 rounded-xl w-full max-w-md space-y-4"
      >
        <h1 className="text-white text-xl font-bold">
          Tambah Catalog
        </h1>

        <input
          placeholder="Nama Kendaraan"
          className="w-full p-3 rounded bg-black text-white border"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          required
        />

        <input
          placeholder="Image URL"
          className="w-full p-3 rounded bg-black text-white border"
          value={vehimage}
          onChange={(e) => setVehimage(e.target.value)}
          required
        />

        <input
          placeholder="Harga (contoh: Rp 25 juta / Call)"
          className="w-full p-3 rounded bg-black text-white border"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <textarea
          placeholder="Deskripsi"
          className="w-full p-3 rounded bg-black text-white border"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          required
        />

        <input
          placeholder="Link"
          className="w-full p-3 rounded bg-black text-white border"
          value={linkveh}
          onChange={(e) => setLinkveh(e.target.value)}
          required
        />

        <select
          className="w-full p-3 rounded bg-black text-white border"
          value={kategoriveh}
          onChange={(e) => setKategori(e.target.value)}
        >
          <option value="matic">Matic</option>
          <option value="sport">Sport</option>
          <option value="offroad">Offroad</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </main>
  );
}