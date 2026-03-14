import Navigation from "@/components/Navigation";

export default function Movies() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <Navigation />
      <main className="flex flex-col gap-8 p-8 pb-20 sm:p-20">
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-4">WoW Movies - Other</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/T3yPyc5iSgE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/m4g0sVl2h2w"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/v24_B3eW8sA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/v24_B3eW8sA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}