import Navigation from "@/components/Navigation";

export default function Projects() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <Navigation />
      <main className="flex flex-col gap-8 p-8 pb-20 sm:p-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
        <p className="text-center text-lg">This page is under construction.</p>
      </main>
    </div>
  );
}
