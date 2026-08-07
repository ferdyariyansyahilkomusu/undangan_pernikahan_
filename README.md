# 💍 Undangan Pernikahan Digital — Arka & Naya

Website undangan pernikahan digital modern, elegan, dan mobile-first. Dibangun dengan **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide React**.

## ✨ Fitur

1. **Cover / Opening Animation** — sampul dengan efek "amplop terbuka" (dua panel bergeser), monogram, nama tamu personal (`?to=Nama`), dan tombol *Buka Undangan*.
2. **Hero Section** — nama mempelai, tanggal, ambient floating elements.
3. **The Couple** — foto, nama lengkap, nama orang tua, Instagram.
4. **Detail Acara** — Akad & Resepsi lengkap dengan countdown real-time dan tombol *Lihat Lokasi* (Google Maps).
5. **Amplop Digital** — daftar rekening/e-wallet dengan tombol *Salin* + toast "Berhasil disalin!".
6. **RSVP & Ucapan** — form konfirmasi kehadiran (Hadir/Tidak Hadir) + daftar ucapan tamu (live, client-side).
7. **Narahubung** — tombol chat WhatsApp langsung ke panitia/keluarga.
8. **Footer** — ucapan terima kasih + kutipan ayat pernikahan.

Palet warna: **ivory / sage green / gold** — nuansa romantis dan elegan. Font: **Cormorant Garamond** (display), **Great Vibes** (script nama), **Jost** (body).

## 🚀 Instalasi

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka di browser
# http://localhost:3000
```

Jika membangun dari nol (bukan dari kode ini), berikut daftar perintah untuk setup proyek serta seluruh dependency yang dipakai:

```bash
npx create-next-app@latest wedding-invitation --typescript --tailwind --app
cd wedding-invitation
npm install framer-motion lucide-react
```

## 🛠️ Build untuk Produksi

```bash
npm run build
npm start
```

## 📁 Struktur Proyek

```
wedding-invitation/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout + font loader (Google Fonts)
│   │   ├── page.tsx           # Merakit seluruh section + state buka undangan
│   │   └── globals.css        # Tailwind base + utility kustom
│   ├── components/
│   │   ├── CoverSection.tsx   # Sampul dengan animasi buka amplop
│   │   ├── HeroSection.tsx    # Hero setelah undangan dibuka
│   │   ├── CoupleSection.tsx  # Profil mempelai
│   │   ├── EventSection.tsx   # Detail Akad & Resepsi + countdown
│   │   ├── Countdown.tsx      # Timer mundur real-time
│   │   ├── GiftSection.tsx    # Amplop digital + copy-to-clipboard
│   │   ├── RSVPSection.tsx    # Form RSVP + daftar ucapan
│   │   ├── ContactSection.tsx # Narahubung / WhatsApp
│   │   ├── Footer.tsx         # Penutup + quote
│   │   ├── SectionHeading.tsx # Heading section yang reusable
│   │   └── FloatingElements.tsx # Elemen dekoratif ambient
│   ├── lib/
│   │   ├── data.ts            # ⚠️ SEMUA KONTEN diedit di sini
│   │   └── useCountdown.ts    # Hook countdown
│   └── types/
│       └── index.ts           # Semua TypeScript interface
├── tailwind.config.ts         # Token warna, font, animasi kustom
└── package.json
```

## ✏️ Cara Mengubah Konten

Cukup edit satu file: **`src/lib/data.ts`**. Semua nama mempelai, tanggal, alamat acara, nomor rekening, kontak WhatsApp, dan kutipan diambil dari sana — tidak perlu menyentuh komponen.

Untuk link Google Maps yang akurat, buka [Google Maps](https://maps.google.com), cari lokasi venue, klik *Share* → *Copy Link*, lalu tempel ke field `mapsUrl`.

Untuk mempersonalisasi tiap tamu, bagikan link dengan parameter `?to=`, contoh:
```
https://domain-anda.com/?to=Bapak+Budi+%26+Keluarga
```

## 🔗 Menghubungkan RSVP ke Backend (opsional)

Saat ini form RSVP & ucapan hanya tersimpan sementara di browser (client-side state) agar proyek tetap ringan tanpa backend. Untuk menyimpan data secara permanen, hubungkan `handleSubmit` di `RSVPSection.tsx` ke:
- **Firebase Firestore** (gratis, real-time), atau
- **Google Sheets API** via endpoint serverless, atau
- **Supabase** (Postgres + REST API instan).

## 📱 Aksesibilitas & Performa

- Mobile-first, diuji pada breakpoint 360px ke atas.
- Menghormati `prefers-reduced-motion` untuk pengguna yang sensitif terhadap animasi.
- Gambar dioptimasi otomatis lewat `next/image`.
