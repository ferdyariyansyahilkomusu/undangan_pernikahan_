export function formatWaktuRelatif(timestampMs: number): string {
  const diffMs = Date.now() - timestampMs;
  const diffSec = Math.floor(diffMs / 1000);

  if (diffSec < 30) return "Baru saja";
  if (diffSec < 60) return `${diffSec} detik lalu`;

  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin} menit lalu`;

  const diffJam = Math.floor(diffMin / 60);
  if (diffJam < 24) return `${diffJam} jam lalu`;

  const diffHari = Math.floor(diffJam / 24);
  if (diffHari < 30) return `${diffHari} hari lalu`;

  const diffBulan = Math.floor(diffHari / 30);
  return `${diffBulan} bulan lalu`;
}