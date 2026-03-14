import Navigation from "@/components/Navigation";

export default function GamingRig() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <Navigation />
      <main className="flex flex-col gap-8 p-8 pb-20 sm:p-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Gaming Rig & Desk
        </h1>
        <div className="grid md:grid-cols-2 gap-8 text-white">
          <div className="bg-white/15 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-center">Gaming Rig</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Case-Labs Mercury S8</li>
              <li>Intel 4790k</li>
              <li>Asus Z97 Gryphon</li>
              <li>16gb Corsair Dominator</li>
              <li>Titan X (Pascal)</li>
              <li>Samsung 960 Pro 512gb</li>
              <li>Corsair AX 860i</li>
              <li>Watercooled</li>
            </ul>
          </div>
          <div className="bg-white/15 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-center">Desk</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Ikea countertop</li>
              <li>Ikea Alex drawers</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
