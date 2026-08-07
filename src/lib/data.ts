import { WeddingData } from "@/types";

export const weddingData: WeddingData = {
  mempelaiPria: {
    namaPanggilan: "Ahmad",
    namaLengkap: "Ahmad Akhir Hasibuan, S.Sos., Gr.",
    anakKe: "Putra Keenam",
    namaAyah: "Bapak Parlindungan Hasibuan",
    namaIbu: "Ibu Timro Harahap",
    fotoUrl:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
    instagram: "AhmadAkhirhasibuan",
  },
  mempelaiWanita: {
    namaPanggilan: "Atia",
    namaLengkap: "Atia Ramadani, S.Pd",
    anakKe: "Putri kedua",
    namaAyah: "Bapak Fahrul",
    namaIbu: "Ibu Dara Ayu Nasution",
    fotoUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
    instagram: "Atia.ramadani96",
  },
  tanggalSingkat: "30.08.2026",
  tanggalPenuh: "Minggu, 30 Agustus 2026",
  countdownTarget: "2026-08-30T08:00:00+07:00",
  akad: {
    namaAcara: "Akad Nikah",
    tanggal: "Kamis, 27 Agustus 2026",
    jamMulai: "08.00",
    jamSelesai: "10.00",
    lokasiNama: "Masjid Al-Ikhlas",
    alamatLengkap:
      "Jl. Pendidikan No.89, Tegal Rejo, Kec. Medan Perjuangan, Kota Medan, Sumatera Utara 20237",
    mapsUrl: "https://maps.app.goo.gl/GbZezuzy5Sgtvzsm9",
  },
  resepsi: {
    namaAcara: "Resepsi",
    tanggal: "Minggu, 30 Agustus 2026",
    jamMulai: "09.30",
    jamSelesai: "17.30",
    lokasiNama: "Grand Ballroom Hotel Aryaduta",
    alamatLengkap:
      "Gedung Dakwah Muhammadiyah, Jl. Garuda I No.1, Tegal Sari Mandala II, Kec. Medan Denai, Kota Medan, Sumatera Utara 20224",
    mapsUrl: "https://maps.app.goo.gl/karNKk6xDH2SWwNb7",
  },
  rekening: [
    { bank: "BNI", nomor: "387266517", atasNama: "AHMAD AKHIR HASIBUAN" },
    { bank: "Dana", nomor: "082276583363", atasNama: "AHMAD AKHIR HSB" },
  ],
  narahubung: [
    { nama: "Ahmad Akhir HSB (Keluarga Pria)", peran: "Mempelai Pria", nomorWhatsapp: "082276583363" },
    { nama: "Atia Ramadani (Keluarga Wanita)", peran: "Mempelai Wanita", nomorWhatsapp: "089517553083"},
  ],
  quote: {
    teks:
      "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.",
    sumber: "QS. Ar-Rum: 21",
  },
};
