export function getCopyrightYear(currentYear: number): string {
  return currentYear === 2026 ? "2026" : `2026-${currentYear}`;
}

export default function Footer() {
  const yearText = getCopyrightYear(new Date().getFullYear());

  return (
    <footer className="w-full flex items-center justify-center p-4 bg-black">
      <p className="text-sm text-gray-500">© {yearText} Winne Productions</p>
    </footer>
  );
}
