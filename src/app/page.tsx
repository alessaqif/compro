"use client"

import Image from "next/image"

export default function HomePage() {
  return (
    <main className="bg-[#0f172a] text-white font-sans">

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">

        {/* Background Image */}
        <Image
          src='/utama.jpg'
          alt="office"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-3xl">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Yamaha Motorcycles 
          </h2>

          <p className="text-lg text-white/90 mb-8">
            Mengungkapkan keinginan Yamaha untuk membawa KANDO kepada pelanggan dan “menggeber hati mereka” melalui banyak produk inovatif dan KANDO Creating yang kita lakukan
          </p>

          {/* <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div> */}
        </div>

      </section>


      {/* Company Overview */}
      <section className="py-24 px-10 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Company Overview
            </h2>

            <p className="text-gray-300 leading-relaxed">
              perusahaan global yang bergerak di bidang manufaktur sepeda motor dan produk mobilitas. Dikenal dengan inovasi teknologi, kualitas tinggi, dan desain yang dinamis, Yamaha terus menghadirkan produk yang memberikan pengalaman berkendara yang andal dan menyenangkan bagi masyarakat di seluruh dunia.
            </p>
          </div>

          {/* Image instead of gradient */}
          <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/company1.webp"
              alt="team meeting"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </section>


      {/* Products / Services */}
      <section className="py-24 px-10 bg-[#020617]">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-4">Matic</h3>
              <p className="text-gray-300 text-sm mb-6">
                Motor matic Yamaha (skuter otomatis) adalah jenis sepeda motor yang menggunakan transmisi otomatis (CVT) sehingga pengendara tidak perlu mengoper gigi secara manual. Motor ini dirancang untuk memberikan kemudahan, kenyamanan, dan efisiensi bahan bakar, sehingga sangat populer untuk penggunaan sehari-hari di perkotaan.
              </p>
              <button className="text-blue-400 text-sm hover:underline">
                Learn More →
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-4">Sport</h3>
              <p className="text-gray-300 text-sm mb-6">
                Motor sport Yamaha adalah jenis sepeda motor yang dirancang dengan fokus pada performa, kecepatan, dan desain sporty. Motor ini biasanya menggunakan transmisi manual, mesin berkapasitas lebih besar dibanding motor harian biasa, serta memiliki posisi berkendara yang memberikan kontrol lebih baik saat melaju dengan kecepatan tinggi.
              </p>
              <button className="text-blue-400 text-sm hover:underline">
                Learn More →
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-4">Offroad</h3>
              <p className="text-gray-300 text-sm mb-6">
                Motor off-road Yamaha adalah jenis sepeda motor yang dirancang khusus untuk digunakan di medan yang tidak rata seperti tanah, pasir, lumpur, atau jalur pegunungan. Motor ini memiliki struktur yang kuat, suspensi panjang, dan ban khusus yang memungkinkan pengendara melewati berbagai kondisi jalan yang menantang.
              </p>
              <button className="text-blue-400 text-sm hover:underline">
                Learn More →
              </button>
            </div>

          </div>

        </div>

      </section>


      {/* Testimonials */}
      <section className="py-24 px-10 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <p className="text-gray-300 text-sm">
              1. ⭐⭐⭐⭐⭐
 <br />Motor dari Yamaha Motor dikenal memiliki performa mesin yang kuat dan responsif. Desainnya juga modern dan sporty sehingga cocok untuk penggunaan sehari-hari maupun perjalanan jauh.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <p className="text-gray-300 text-sm">
              2. ⭐⭐⭐⭐☆
<br />Saya sangat puas dengan kualitas motor Yamaha Motor. Konsumsi bahan bakarnya cukup irit dan fitur yang diberikan cukup lengkap dibandingkan dengan motor di kelasnya.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <p className="text-gray-300 text-sm">
              3. ⭐⭐⭐⭐⭐
<br />Pengalaman menggunakan motor dari Yamaha Motor sangat nyaman. Handling stabil, mesin halus, serta perawatannya relatif mudah karena jaringan servisnya luas.
            </p>
          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-white/10 text-center py-8 text-gray-400 text-sm">
        "SEMAKIN DI DEPAN"
      </footer>

    </main>
  )
}