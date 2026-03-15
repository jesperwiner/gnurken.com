import Navigation from "@/components/Navigation";
import FadeImage from "@/components/FadeImage";

export default function About() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navigation />

      <main className="flex flex-col gap-8 items-center text-center max-w-4xl px-8 py-10">
        {/* About Header */}
        <div className="mb-2">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-1 font-[family-name:var(--font-geist-mono)] tracking-tight">
            About Gnurken
          </h1>
        </div>

        {/* About Content */}
        <div className="space-y-8 text-white text-left">
          {/* Personal Introduction */}
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 rounded-lg p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-shrink-0">
                <FadeImage
                  src="/1682940540988.jpeg"
                  alt="Jesper Winér profile picture"
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-white/20 mx-auto md:mx-0"
                  priority
                />
              </div>
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  I'm <strong>Jesper Winér</strong>, but most people know me as
                  &ldquo;Gnurken&rdquo; in the digital realm. At 50, I've
                  mastered the art of crafting elegant web experiences at
                  Nordnet Bank in Stockholm's vibrant Kungsholmen district. My
                  weapon of choice? TypeScript paired with React and modern
                  CSS3, though I'm equally lethal with Java, C#, and the
                  timeless Perl.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  When I'm not architecting the next breakthrough in fintech,
                  you'll find me conquering virtual worlds. I'm a gaming veteran
                  with over 11 years of World of Warcraft mastery under my belt
                  since 2005. Currently on hiatus from Azeroth, but legends
                  never truly retire. This very site serves as my digital
                  playground—a proving ground where I push the boundaries of
                  what's possible with cutting-edge tech.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  I'm also diving deep into the world of video production, using
                  Adobe Premiere's professional arsenal. Here, you'll discover
                  my epic WoW cinematic collection, innovative C# projects, and
                  curated galleries showcasing both vintage gaming treasures and
                  bleeding-edge builds that would make any tech enthusiast
                  jealous.
                </p>
              </div>
            </div>
          </div>

          {/* Top 3 Movies Section */}
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-800/30 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center font-[family-name:var(--font-geist-mono)] tracking-tight">
              Top 3 Favorite Movies
            </h2>
            <div className="space-y-6">
              <div className="pl-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">1. Forrest Gump</h3>
                  <a
                    href="https://www.imdb.com/title/tt0109830/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-600 hover:bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold transition-colors cursor-pointer"
                  >
                    ⭐ 8.8 IMDB
                  </a>
                </div>
                <div className="flex gap-4">
                  <FadeImage
                    src="https://image.tmdb.org/t/p/w300/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"
                    alt="Forrest Gump poster"
                    width={100}
                    height={150}
                    className="rounded flex-shrink-0"
                  />
                  <p className="leading-relaxed">
                    Watched Forrest Gump many times and will do many more. It's
                    my all time favorite movie and I don't see it getting bumped
                    down any time soon. Tom Hanks is perfect as Gump and the
                    supporting cast is awesome, especially Gary Sinise as Lt.
                    Dan. I guess the effects will be dated eventually but I
                    think they still hold up.
                  </p>
                </div>
              </div>

              <div className="pl-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">
                    2. The Empire Strikes Back
                  </h3>
                  <a
                    href="https://www.imdb.com/title/tt0080684/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-600 hover:bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold transition-colors cursor-pointer"
                  >
                    ⭐ 8.7 IMDB
                  </a>
                </div>
                <div className="flex gap-4">
                  <FadeImage
                    src="https://image.tmdb.org/t/p/w300/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg"
                    alt="The Empire Strikes Back poster"
                    width={100}
                    height={150}
                    className="rounded flex-shrink-0"
                  />
                  <p className="leading-relaxed">
                    No surprise that a computer geek likes fantasy and sci-fi.
                    The Empire Strikes Back is the best of them and proves that
                    George Lucas is a better storyteller than director. Some of
                    the special edition additions are ok but the Wampa on Hoth
                    didn't need to be changed, the Cloud City extensions are
                    great however.
                  </p>
                </div>
              </div>

              <div className="pl-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">3. V for Vendetta</h3>
                  <a
                    href="https://www.imdb.com/title/tt0434409/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-600 hover:bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold transition-colors cursor-pointer"
                  >
                    ⭐ 8.1 IMDB
                  </a>
                </div>
                <div className="flex gap-4">
                  <FadeImage
                    src="https://image.tmdb.org/t/p/w300/piZOwjyk1g51oPHonc7zaQY3WOv.jpg"
                    alt="V for Vendetta poster"
                    width={100}
                    height={150}
                    className="rounded flex-shrink-0"
                  />
                  <p className="leading-relaxed">
                    This future dystopian society doesn't seem as far fetched as
                    it did in 2005. Hugo Weaving is playing the shadowy
                    vigilante perfectly despite being masked the entire movie.
                    This also is Natalie Portman's best performance ever as the
                    orphan Evey. I watch this movie every year on 5th Nov.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-black/20 rounded-lg">
                <h4 className="font-bold mb-2">Honorable mentions:</h4>
                <p className="text-sm">
                  <a
                    href="https://www.imdb.com/title/tt0111161/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    The Shawshank Redemption
                  </a>
                  {", "}
                  <a
                    href="https://www.imdb.com/title/tt0103064/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    Terminator 2
                  </a>
                  {", "}
                  <a
                    href="https://www.imdb.com/title/tt0133093/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    The Matrix
                  </a>
                  {", "}
                  <a
                    href="https://www.imdb.com/title/tt0081590/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    Sällskapsresan
                  </a>
                  {", "}
                  <a
                    href="https://www.imdb.com/title/tt0090605/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    Aliens
                  </a>
                  {", "}
                  <a
                    href="https://www.imdb.com/title/tt0095016/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    Die Hard
                  </a>
                  {" & "}
                  <a
                    href="https://www.imdb.com/title/tt0468569/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    The Dark Knight
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Favorite Games Section */}
          <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/30 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center font-[family-name:var(--font-geist-mono)] tracking-tight">
              Favorite Games
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-[100px] h-[140px] flex-shrink-0 overflow-hidden rounded">
                  <FadeImage
                    src="/games/halo.jpg"
                    alt="Halo: The Master Chief Collection"
                    width={100}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold">Halo</h3>
                    <a
                      href="https://www.metacritic.com/game/the-master-chief-collection/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      85 MC
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed">
                    The Master Chief Collection is the definitive way to
                    experience one of gaming's most iconic FPS franchises.
                    Countless hours spent in both campaign and multiplayer.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[100px] h-[140px] flex-shrink-0 overflow-hidden rounded">
                  <FadeImage
                    src="/games/wow.png"
                    alt="World of Warcraft"
                    width={100}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold">World of Warcraft</h3>
                    <a
                      href="https://www.metacritic.com/game/world-of-warcraft/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      93 MC
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Over 11 years in Azeroth since 2005. Currently on hiatus but
                    the memories of epic raids and PvP battles remain some of my
                    greatest gaming moments.
                    <br />
                    RIP Manbane, never forgotten.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[100px] flex-shrink-0 pt-[8px]">
                  <FadeImage
                    src="/games/tetris.jpg"
                    alt="Tetris"
                    width={100}
                    height={100}
                    className="rounded"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Tetris</h3>
                  <p className="text-sm leading-relaxed">
                    The timeless classic that never gets old. Simple to learn,
                    impossible to master. Still the most perfect game ever
                    designed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[100px] h-[140px] flex-shrink-0 overflow-hidden rounded">
                  <FadeImage
                    src="/games/horizon.jpg"
                    alt="Horizon Zero Dawn"
                    width={100}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold">Horizon Zero Dawn</h3>
                    <a
                      href="https://www.metacritic.com/game/horizon-zero-dawn-complete-edition/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      84 MC
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed">
                    A stunning open world with an incredible story about a
                    post-apocalyptic world ruled by robotic creatures. Aloy is
                    one of gaming's best protagonists.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[100px] h-[140px] flex-shrink-0 overflow-hidden rounded mt-[4px]">
                  <FadeImage
                    src="/games/redalert.jpg"
                    alt="Command & Conquer: Red Alert"
                    width={100}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold">Red Alert</h3>
                    <a
                      href="https://www.metacritic.com/game/command-and-conquer-red-alert/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      90 MC
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Command & Conquer: Red Alert perfected the RTS genre for me.
                    The original 1996 classic with its Cold War alternate
                    history and iconic gameplay.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[100px] h-[140px] flex-shrink-0 overflow-hidden rounded">
                  <FadeImage
                    src="/games/ittakestwo.jpg"
                    alt="It Takes Two"
                    width={100}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold">It Takes Two</h3>
                    <a
                      href="https://www.metacritic.com/game/it-takes-two/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      88 MC
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed">
                    The best co-op game ever made. Every level introduces
                    completely new mechanics and the creativity on display is
                    unmatched.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-b from-cyan-900/40 to-blue-900/30 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p>TypeScript, React, ES6, CSS3</p>
            </div>
            <div className="bg-gradient-to-b from-violet-900/40 to-indigo-900/30 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Backend</h3>
              <p>Java, C#, Perl</p>
            </div>
            <div className="bg-gradient-to-b from-rose-900/40 to-pink-900/30 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Video Editing</h3>
              <p>Adobe Premiere</p>
            </div>
          </div>

          {/* AI */}
          <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/30 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-4 font-[family-name:var(--font-geist-mono)] tracking-tight">
              {/* Gemini logo */}
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
                  fill="url(#gemini-grad)"
                />
                <defs>
                  <linearGradient
                    id="gemini-grad"
                    x1="0"
                    y1="0"
                    x2="24"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4285F4" />
                    <stop offset="0.5" stopColor="#9B72CB" />
                    <stop offset="1" stopColor="#D96570" />
                  </linearGradient>
                </defs>
              </svg>
              AI
              {/* Claude logo */}
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
                  fill="#D97757"
                />
              </svg>
            </h2>
            <p className="text-lg leading-relaxed">
              AI has become an integral part of my workflow and I'm constantly
              exploring new ways to leverage it. My go-to tools are Google
              Gemini and Anthropic's Claude, which I use daily for everything
              from coding assistance and brainstorming to research and content
              creation.
            </p>
          </div>

          {/* Social Media */}
          <div className="bg-gradient-to-br from-slate-800/40 to-gray-900/30 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center font-[family-name:var(--font-geist-mono)] tracking-tight">
              Connect with me
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/jesper-win%C3%A9r-4b6a7981/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/jesper.winer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href="https://twitter.com/JesperWiner?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X (Twitter)
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
