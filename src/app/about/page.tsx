"use client"

import { useEffect, useState } from "react"

type User = {
  name: { first: string; last: string }
  picture: { large: string }
}

export default function AboutPage() {

  const [team, setTeam] = useState<User[]>([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(data => setTeam(data.results))
  }, [])

  const roles = [
    "CEO",
    "Operations Manager",
    "Tech Manager",
    "Design Lead",
    "Marketing Lead",
    "Frontend Lead",
    "Backend Lead",
    "UI Developer",
    "API Developer",
    "QA Engineer"
  ]

  const Member = ({ user, role }: { user: User; role: string }) => (
    <div className="flex flex-col items-center">
      <img
        src={user.picture.large}
        className="w-20 h-20 rounded-full border-4 border-white/20 mb-2"
      />
      <p className="font-semibold text-sm">
        {user.name.first} {user.name.last}
      </p>
      <p className="text-xs text-blue-400">{role}</p>
    </div>
  )

  if (team.length === 0) return <div className="p-20 text-center">Loading...</div>

  return (
    <main className="px-6 py-20 max-w-6xl mx-auto text-white">

      {/* Company History */}
      <section className="mb-24">
        <h1 className="text-4xl font-bold mb-6">About Our Company</h1>
        <p className="text-gray-300 mb-4">
         perusahaan multinasional asal Jepang yang bergerak di bidang manufaktur kendaraan bermotor, khususnya sepeda motor, serta berbagai produk mobilitas dan mesin. Didirikan pada tahun 1955 dan berkantor pusat di Iwata, Jepang, Yamaha Motor telah berkembang menjadi salah satu produsen sepeda motor terkemuka di dunia.

          Dengan komitmen terhadap inovasi dan kualitas, Yamaha terus menghadirkan produk yang mengedepankan performa tinggi, efisiensi, serta desain yang modern dan dinamis. Perusahaan ini dikenal luas melalui berbagai lini produknya, mulai dari motor matic, sport, hingga off-road, yang dirancang untuk memenuhi kebutuhan beragam segmen pengguna.

         <br /><br />Selain fokus pada pengembangan teknologi mesin, Yamaha juga mengintegrasikan fitur-fitur canggih untuk meningkatkan kenyamanan, keamanan, dan pengalaman berkendara. Hal ini didukung oleh jaringan distribusi dan layanan purna jual yang luas di berbagai negara, termasuk Indonesia, sehingga memastikan kepuasan pelanggan secara berkelanjutan.

         <br /><br />Sebagai bagian dari visinya, Yamaha Motor berupaya menciptakan nilai tambah melalui inovasi berkelanjutan serta berkontribusi dalam menghadirkan solusi mobilitas yang ramah lingkungan dan efisien. Dengan reputasi global yang kuat, Yamaha terus menjadi pilihan utama bagi konsumen yang mengutamakan kualitas, performa, dan gaya dalam berkendara.
        </p>
      </section>

      {/* Team Tree */}
      <section className="mb-24">

        <h2 className="text-3xl font-bold text-center mb-16">
          Organization Structure
        </h2>

        <div className="flex flex-col items-center gap-16">

          {/* CEO */}
          <Member user={team[0]} role={roles[0]} />

          {/* Managers */}
          <div className="flex gap-24">
            <Member user={team[1]} role={roles[1]} />
            <Member user={team[2]} role={roles[2]} />
          </div>

          {/* Leads */}
          <div className="flex gap-16">
            <Member user={team[3]} role={roles[3]} />
            <Member user={team[4]} role={roles[4]} />
            <Member user={team[5]} role={roles[5]} />
            <Member user={team[6]} role={roles[6]} />
          </div>

          {/* Developers */}
          <div className="flex gap-16">
            <Member user={team[7]} role={roles[7]} />
            <Member user={team[8]} role={roles[8]} />
            <Member user={team[9]} role={roles[9]} />
          </div>

        </div>

      </section>

      {/* Culture */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
        <p className="text-gray-300 mb-4">
          budaya perusahaan di Yamaha Motor, ada satu nilai utama yang selalu mereka pegang, yaitu Kando.
         <br /><br />Kando ini adalah filosofi dari Jepang yang berarti menciptakan kepuasan dan pengalaman yang benar-benar berkesan bagi pelanggan.

         <br /><br />Di Yamaha, setiap tim didorong untuk terus berinovasi dan berani mencoba hal baru. Mereka percaya bahwa kreativitas dan kerja sama tim adalah kunci untuk menghasilkan produk yang berkualitas tinggi.

         <br /><br />Selain itu, Yamaha juga sangat menjunjung tinggi profesionalisme, tanggung jawab, dan integritas dalam setiap proses kerjanya. Jadi bukan hanya fokus pada produk, tapi juga bagaimana cara kerja tim di dalamnya.

         <br /><br />Yang menarik, Yamaha juga punya komitmen terhadap lingkungan. Mereka terus mengembangkan teknologi yang lebih efisien dan ramah lingkungan sebagai bagian dari tanggung jawab perusahaan ke depan.

         <br /><br />Intinya, budaya di Yamaha itu berfokus pada inovasi, kerja sama, dan bagaimana memberikan pengalaman terbaik bagi pelanggan.
        </p>
      </section>

    </main>
  )
}