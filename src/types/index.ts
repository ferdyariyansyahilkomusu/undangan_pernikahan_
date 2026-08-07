export interface Mempelai {
  namaPanggilan: string;
  namaLengkap: string;
  anakKe: string;
  namaAyah: string;
  namaIbu: string;
  fotoUrl: string;
  instagram?: string;
}

export interface DetailAcara {
  namaAcara: string;
  tanggal: string; // display string, e.g. "Sabtu, 20 Desember 2026"
  jamMulai: string;
  jamSelesai: string;
  lokasiNama: string;
  alamatLengkap: string;
  mapsUrl: string;
}

export interface RekeningBank {
  bank: string;
  nomor: string;
  atasNama: string;
}

export interface NarahubungPerson {
  nama: string;
  peran: string;
  nomorWhatsapp: string; // format 62xxxxxxxxxx, no plus/leading zero
}

export type StatusKehadiran = "Hadir" | "Tidak Hadir" | "Ragu-ragu";

export interface Ucapan {
  id: string;
  nama: string;
  status: StatusKehadiran;
  pesan: string;
  waktu: string;
}

export interface WeddingData {
  mempelaiPria: Mempelai;
  mempelaiWanita: Mempelai;
  tanggalSingkat: string; // "20.12.2026"
  tanggalPenuh: string; // "Sabtu, 20 Desember 2026"
  countdownTarget: string; // ISO date string
  akad: DetailAcara;
  resepsi: DetailAcara;
  rekening: RekeningBank[];
  narahubung: NarahubungPerson[];
  quote: {
    teks: string;
    sumber: string;
  };
}
