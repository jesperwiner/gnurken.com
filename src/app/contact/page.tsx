import Navigation from "@/components/Navigation";

export default function Contact() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <Navigation />
      <main className="flex flex-col gap-8 p-8 pb-20 sm:p-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact</h1>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-gray-700 text-white text-center">
          <p className="text-lg">For any inquiries, please contact me at:</p>
          <a href="mailto:jesper.winer@gmail.com" className="text-2xl font-bold text-red-500 hover:underline">
            jesper.winer@gmail.com
          </a>
        </div>
      </main>
    </div>
  );
}