"use client";

import { useState, useEffect } from "react";
import Backendless from "@/app/lib/backendless";
import { useRouter } from "next/navigation";

export default function CreateBlog() {
  const [judul, setJudul] = useState("");
  const [isiblog, setIsi] = useState("");
  const [gambarblog, setGambar] = useState("");
  const [linkblog, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const valid = await Backendless.UserService.isValidLogin();
      if (!valid) {
        window.location.href = "/login";
      }
    };

    checkLogin();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return; // 🔥 anti double click

    setLoading(true);

    try {
      const user = await Backendless.UserService.getCurrentUser();

      if (!user) {
        alert("Harus login dulu!");
        return;
      }

      const newBlog = {
        judul,
        isiblog,
        gambarblog,
        linkblog,
        authorname: user.email,
      };

      console.log("DATA DIKIRIM:", newBlog); // 🔥 debug

      await Backendless.Data.of("blog").save(newBlog);

      alert("Blog berhasil ditambahkan!");
      window.location.href = "/blog";
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 max-w-xl mx-auto relative z-10">
      <h1 className="text-2xl font-bold mb-6">Tambah Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          type="text"
          placeholder="Judul"
          className="w-full border p-3 rounded"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          required
        />

        <textarea
          placeholder="Isi Blog"
          className="w-full border p-3 rounded"
          value={isiblog}
          onChange={(e) => setIsi(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="URL Gambar"
          className="w-full border p-3 rounded"
          value={gambarblog}
          onChange={(e) => setGambar(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Link Blog"
          className="w-full border p-3 rounded"
          value={linkblog}
          onChange={(e) => setLink(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded disabled:bg-gray-400"
        >
          {loading ? "Menyimpan..." : "Simpan Blog"}
        </button>
      </form>
    </main>
  );
}