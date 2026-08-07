import { WeddingData } from "@/types";

export const weddingData: WeddingData = {
  mempelaiPria: {
    namaPanggilan: "Ahmad",
    sebutan : "Putra",
    namaLengkap: "Ahmad Akhir HSB, S.Sos., Gr.",
    anakKe: "Putra Keenam",
    namaAyah: "Parlindungan Hasibuan",
    namaIbu: "Timro Harahap",
    fotoUrl: "/images/ahmadakhir.jpeg",
    instagram: "AhmadAkhirhasibuan",
  },
  mempelaiWanita: {
    namaPanggilan: "Atia",
    namaLengkap: "Atia Ramadani, S.Pd",
    sebutan: "Putri",
    anakKe: "Putri kedua",
    namaAyah: "Fahrul",
    namaIbu: "Dara Ayu Nasution",
    fotoUrl: "/images/atia.jpeg",
    instagram: "Atia.ramadani96",
  },
  tanggalSingkat: "30.08.2026",
  tanggalPenuh: "Minggu, 30 Agustus 2026",
  countdownTarget: "2026-08-30T08:00:00+07:00",
  akad: {
    namaAcara: "Akad Nikah",
    tanggal: "Kamis, 27 Agustus 2026",
    jamMulai: "09:00",
    jamSelesai: "10.00",
    lokasiNama: "Kantor Urusan Agama",
    alamatLengkap:
      "Jl. Pendidikan No.89, Tegal Rejo, Kec. Medan Perjuangan, Kota Medan, Sumatera Utara 20237",
    mapsUrl: "https://maps.app.goo.gl/GbZezuzy5Sgtvzsm9",
  },
  resepsi: {
    namaAcara: "Resepsi",
    tanggal: "Minggu, 30 Agustus 2026",
    jamMulai: "09.30",
    jamSelesai: "17.30",
    lokasiNama: "Gedung Dakwah Muhammadiyah",
    alamatLengkap:
      "Gedung Dakwah Muhammadiyah, Jl. Garuda I No.1, Tegal Sari Mandala II, Kec. Medan Denai, Kota Medan, Sumatera Utara 20224",
    mapsUrl: "https://maps.app.goo.gl/karNKk6xDH2SWwNb7",
  },
  rekening: [
    { 
      bank: "Bank BNI", 
      nomor: "387266517", 
      atasNama: "AHMAD AKHIR HASIBUAN",
      logo: "/images/bni.png" // Path untuk logo BNI
    },
    { 
      bank: "DANA", 
      nomor: "082276583363", 
      atasNama: "AHMAD AKHIR HSB",
      logo: "/images/Dana-logo.png" // Path untuk logo DANA
    },
  ],
  narahubung: [
    {
      nama: "Ahmad Akhir HSB (Keluarga Pria)",
      peran: "Mempelai Pria",
      nomorWhatsapp: "082276583363",
    },
    {
      nama: "Atia Ramadani (Keluarga Wanita)",
      peran: "Mempelai Wanita",
      nomorWhatsapp: "089517553083",
    },
  ],
  quote: {
    teks: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.",
    sumber: "QS. Ar-Rum: 21",
  },
  loveStory: [
  {
    id: "story-1",
    fotoUrl: "/images/love-story/1e.jpeg", 
    tanggal: "2025",
    judul: "Awal Pertemuan",
    cerita: "Semua kisah indah ini bermula dari ikatan tak kasat mata di ruang digital. Jauh sebelum tatap muka pertama terjadi, takdir rupanya telah menautkan kami melalui dunia maya, saling terhubung sebagai teman di platform Facebook Pro, di mana ia telah lebih dulu mengikuti dan menambahkan pertemananku. Hingga akhirnya, lembaran nyata kisah ini terbuka pada 27 Juni 2025. Tanpa disengaja, di tengah riuhnya sebuah kegiatan organisasi yang berbeda, semesta mempertemukan kami dalam satu detik yang penuh canda tawa dan tatapan muka secara langsung. Sosoknya yang semula hanya sebuah nama di beranda media sosial, kini hadir nyata di hadapan mata, merajut babak baru dalam perjalanan hidup kami.",
  },
  {
    id: "story-2",
    fotoUrl: "/images/love-story/1C.jpeg",
    tanggal: "2025",
    judul: "Mulai Dekat",
    cerita: "Seiring berjalannya waktu, takdir seolah tak kehabisan cara untuk mendekatkan. Tepat setelah pertemuan di acara organisasi tersebut, pada tanggal 27 Juni 2025, ia kembali hadir secara misterius datang tiba-tiba menyapaku lewat pesan Messenger Facebook Pro dan mengajak berkenalan lebih dekat. Dari sapaan sederhana itulah, kami memutuskan untuk menjalani ta'aruf secara online demi saling mengenal karakter satu sama lain. Siapa sangka, perbincangan virtual yang awalnya penuh rasa malu-malu perlahan berubah menjadi benih-benih cinta yang tulus. Puncaknya, saat kami memutuskan melangkah ke dunia nyata dan berjumpa di salah satu mal di kota Medan pada Juli 2025. Perasaan campur aduk, debar jantung, dan senyum bahagia menyatu dalam kebersamaan yang membuat dunia seolah terasa milik berdua saja. Dari sanalah komitmen terukir, mengubah hubungan misterius ini menjadi ikatan yang serius, penuh kepastian, hingga akhirnya siap membawa cinta kami menuju pelaminan.",
  },
],
};
