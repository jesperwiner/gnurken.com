const BASE = "/movies/wow-movies";

export type Video = {
  title: string;
  url: string;
};

export type Raid = {
  name: string;
  cover?: string;
  videos: Video[];
};

export type Expansion = {
  name: string;
  cover?: string;
  raids: Raid[];
};

export const expansions: Expansion[] = [
  {
    name: "Classic",
    cover: "/movies/covers/classic.jpg",
    raids: [
      {
        name: "Molten Core",
        cover: "/movies/covers/molten-core.jpg",
        videos: [
          {
            title: "Axis vs. Garr - 2006-04-06",
            url: `${BASE}/classic/molten-core/Axis vs. Garr - 2006-04-06.mp4`,
          },
          {
            title: "Axis vs. Geddon - 2006-04-06",
            url: `${BASE}/classic/molten-core/Axis vs. Geddon - 2006-04-06.mp4`,
          },
          {
            title: "Axis vs. Ragnaros - 2006-02-26",
            url: `${BASE}/classic/molten-core/Axis vs. Ragnaros - 2006-02-26.mp4`,
          },
          {
            title: "Axis vs. Ragnaros - 2006-04-07, Part I",
            url: `${BASE}/classic/molten-core/Axis vs. Ragnaros - 2006-04-07, Part I.mp4`,
          },
          {
            title: "Axis vs. Ragnaros - 2006-04-07, Part II",
            url: `${BASE}/classic/molten-core/Axis vs. Ragnaros - 2006-04-07, Part II.mp4`,
          },
          {
            title: "Axis vs. Ragnaros - 2006-07-11",
            url: `${BASE}/classic/molten-core/Axis vs. Ragnaros - 2006-07-11.mp4`,
          },
          {
            title: "Axis vs. Ragnaros - Party - 2006-02-26",
            url: `${BASE}/classic/molten-core/Axis vs. Ragnaros - Party - 2006-02-26.mp4`,
          },
          {
            title: "Axis vs. Rangaros - Try - 2006-02-13",
            url: `${BASE}/classic/molten-core/Axis vs. Rangaros - Try - 2006-02-13.mp4`,
          },
          {
            title: "Golemagg at level 70",
            url: `${BASE}/classic/molten-core/Golemagg at level 70.mp4`,
          },
          {
            title: "Ragnaros at level 70",
            url: `${BASE}/classic/molten-core/Ragnaros at level 70.mp4`,
          },
        ],
      },
      {
        name: "Onyxia's Lair",
        cover: "/movies/covers/onyxias-lair.jpg",
        videos: [
          {
            title: "Axis vs. Onyxia - Doit doit downed",
            url: `${BASE}/classic/onyxias-lair/Axis vs. Onyxia - Doit doit downed.mp4`,
          },
          {
            title: "Axis vs. Onyxia - Headplanting - 2006-02-23",
            url: `${BASE}/classic/onyxias-lair/Axis vs. Onyxia - Headplanting - 2006-02-23.mp4`,
          },
          {
            title: "Axis vs. Onyxia - Redcomet speech",
            url: `${BASE}/classic/onyxias-lair/Axis vs. Onyxia - Redcomet speech.mp4`,
          },
        ],
      },
      {
        name: "Zul'Gurub",
        cover: "/movies/covers/zulgurub.jpg",
        videos: [
          {
            title: "Axis - EyeoftheTiger - 2006-02-14, Part I",
            url: `${BASE}/classic/zulgurub/Axis - EyeoftheTiger - 2006-02-14, Part I.mp4`,
          },
          {
            title: "Axis - EyeoftheTiger - 2006-02-14, Part II",
            url: `${BASE}/classic/zulgurub/Axis - EyeoftheTiger - 2006-02-14, Part II.mp4`,
          },
          {
            title: "Axis vs. High Priest Thekal - 2006-02-14",
            url: `${BASE}/classic/zulgurub/Axis vs. High Priest Thekal - 2006-02-14.mp4`,
          },
          {
            title: "Axis vs. High Priestess Arlokk - 2006-04-09",
            url: `${BASE}/classic/zulgurub/Axis vs. High Priestess Arlokk - 2006-04-09.mp4`,
          },
          {
            title: "Axis vs. High Priestess Arlokk - 2006-04-10",
            url: `${BASE}/classic/zulgurub/Axis vs. High Priestess Arlokk - 2006-04-10.mp4`,
          },
          {
            title: "Axis vs. High Priestess Marli - 2006-04-09",
            url: `${BASE}/classic/zulgurub/Axis vs. High Priestess Marli - 2006-04-09.mp4`,
          },
          {
            title: "Axis vs. High Priestess Marli - 2006-05-20",
            url: `${BASE}/classic/zulgurub/Axis vs. High Priestess Marli - 2006-05-20.mp4`,
          },
          {
            title: "Axis vs. Jindo The Hexxer - 2006-04-12",
            url: `${BASE}/classic/zulgurub/Axis vs. Jindo The Hexxer - 2006-04-12.mp4`,
          },
          {
            title: "Axis vs. MojoMadness - 2006-02-14",
            url: `${BASE}/classic/zulgurub/Axis vs. MojoMadness - 2006-02-14.mp4`,
          },
        ],
      },
      {
        name: "Blackwing Lair",
        cover: "/movies/covers/blackwing-lair.jpg",
        videos: [
          {
            title: "Axis vs. Broodlord Lashlayer - 2006-05-02, Part I",
            url: `${BASE}/classic/blackwing-lair/Axis vs. Broodlord Lashlayer - 2006-05-02, Part I.mp4`,
          },
          {
            title: "Axis vs. Broodlord Lashlayer - 2006-05-02, Part II",
            url: `${BASE}/classic/blackwing-lair/Axis vs. Broodlord Lashlayer - 2006-05-02, Part II.mp4`,
          },
          {
            title: "Axis vs. Broodlord Lashlayer - Party - 2006-05-02",
            url: `${BASE}/classic/blackwing-lair/Axis vs. Broodlord Lashlayer - Party - 2006-05-02.mp4`,
          },
          {
            title: "Axis vs. Chromaggus - 2006-05-20",
            url: `${BASE}/classic/blackwing-lair/Axis vs. Chromaggus - 2006-05-20.mp4`,
          },
          {
            title: "Axis vs. Chromaggus - First kill after reform",
            url: `${BASE}/classic/blackwing-lair/Axis vs. Chromaggus - First kill after reform.mp4`,
          },
          {
            title: "Axis vs. Flamegore",
            url: `${BASE}/classic/blackwing-lair/Axis vs. Flamegore.mp4`,
          },
          {
            title: "Axis vs. Razorgore phase 2 - 2006-04-14, Part I",
            url: `${BASE}/classic/blackwing-lair/Axis vs. Razorgore phase 2 - 2006-04-14, Part I.mp4`,
          },
          {
            title: "Axis vs. Razorgore phase 2 - 2006-04-14, Part II",
            url: `${BASE}/classic/blackwing-lair/Axis vs. Razorgore phase 2 - 2006-04-14, Part II.mp4`,
          },
          {
            title: "Axis vs. Vaelastrasz - 2006-04-24",
            url: `${BASE}/classic/blackwing-lair/Axis vs. Vaelastrasz - 2006-04-24.mp4`,
          },
          {
            title: "Axis vs. Vaelastrasz - First kill after reform",
            url: `${BASE}/classic/blackwing-lair/Axis vs. Vaelastrasz - First kill after reform.mp4`,
          },
          {
            title: "Lemmings vs. Nefarian",
            url: `${BASE}/classic/blackwing-lair/Lemmings vs. Nefarian.mp4`,
          },
          {
            title: "Lemmings vs. Razorgore",
            url: `${BASE}/classic/blackwing-lair/Lemmings vs. Razorgore.mp4`,
          },
          {
            title: "Lemmings vs. Vaelastrasz",
            url: `${BASE}/classic/blackwing-lair/Lemmings vs. Vaelastrasz.mp4`,
          },
          {
            title: "Mayhem vs. Nefarian",
            url: `${BASE}/classic/blackwing-lair/Mayhem vs. Nefarian.mp4`,
          },
          {
            title: "Talons vs. Broodlord Lashlayer",
            url: `${BASE}/classic/blackwing-lair/Talons vs. Broodlord Lashlayer.mp4`,
          },
          {
            title: "Talons vs. Vaelastrasz",
            url: `${BASE}/classic/blackwing-lair/Talons vs. Vaelastrasz.mp4`,
          },
        ],
      },
      {
        name: "Ruins of Ahn'Qiraj",
        cover: "/movies/covers/ruins-of-ahnqiraj.jpg",
        videos: [
          {
            title: "Axis vs. Ayamiss - 2006-05-02",
            url: `${BASE}/classic/ruins-of-ahnqiraj/Axis vs. Ayamiss - 2006-05-02.mp4`,
          },
          {
            title: "Axis vs. Ossirian - 2006-07-09",
            url: `${BASE}/classic/ruins-of-ahnqiraj/Axis vs. Ossirian - 2006-07-09.mp4`,
          },
        ],
      },
      {
        name: "Ahn'Qiraj Temple",
        cover: "/movies/covers/ahnqiraj-temple.jpg",
        videos: [
          {
            title: "Axis vs. Sartura",
            url: `${BASE}/classic/ahnqiraj-temple/Axis vs. Sartura.mp4`,
          },
          {
            title: "Mayhem vs. C'thun - Instant Wipe",
            url: `${BASE}/classic/ahnqiraj-temple/Mayhem vs. Cthun - Instant Wipe.mp4`,
          },
          {
            title: "Mayhem vs. Huhuran",
            url: `${BASE}/classic/ahnqiraj-temple/Mayhem vs. Huhuran.mp4`,
          },
        ],
      },
      {
        name: "Other Classic",
        cover: "/movies/covers/classic.jpg",
        videos: [
          {
            title: "Argent Dawn vs. Emeriss - Soulja lead PUG",
            url: `${BASE}/classic/Argent Dawn vs. Emeriss - Soulja lead PUG.mp4`,
          },
          {
            title: "Axis vs. Drakkisath - 5 man with Teamspeak",
            url: `${BASE}/classic/Axis vs. Drakkisath - 5 man with Teamspeak.mp4`,
          },
          {
            title: "Axis vs. Drakkisath - 5 man",
            url: `${BASE}/classic/Axis vs. Drakkisath - 5 man.mp4`,
          },
          {
            title: "Axis vs. Taerar",
            url: `${BASE}/classic/Axis vs. Taerar.mp4`,
          },
          {
            title: "Axis vs. Thunderaan - Egbert kill 1",
            url: `${BASE}/classic/Axis vs. Thunderaan - Egbert kill 1.mp4`,
          },
          {
            title: "Axis vs. Thunderaan - Egbert kill 2",
            url: `${BASE}/classic/Axis vs. Thunderaan - Egbert kill 2.mp4`,
          },
          {
            title: "Axis vs. Thunderaan - Gnurken",
            url: `${BASE}/classic/Axis vs. Thunderaan - Gnurken.mp4`,
          },
        ],
      },
    ],
  },
  {
    name: "Burning Crusade",
    cover: "/movies/covers/karazhan.jpg",
    raids: [
      {
        name: "Karazhan",
        cover: "/movies/covers/karazhan.jpg",
        videos: [
          {
            title: "Echo vs. Netherspite",
            url: `${BASE}/burning-crusade/karazhan/Echo vs. Netherspite.mp4`,
          },
          {
            title: "GeeksRus vs. Chess",
            url: `${BASE}/burning-crusade/karazhan/GeeksRus vs. Chess.mp4`,
          },
          {
            title: "GeeksRus vs. Huntsman",
            url: `${BASE}/burning-crusade/karazhan/GeeksRus vs. Huntsman.mp4`,
          },
          {
            title: "GeeksRus vs. Illhoof",
            url: `${BASE}/burning-crusade/karazhan/GeeksRus vs. Illhoof.mp4`,
          },
          {
            title: "GeeksRus vs. Maiden",
            url: `${BASE}/burning-crusade/karazhan/GeeksRus vs. Maiden.mp4`,
          },
          {
            title: "GeeksRus vs. Moroes",
            url: `${BASE}/burning-crusade/karazhan/GeeksRus vs. Moroes.mp4`,
          },
          {
            title: "GeeksRus vs. Netherspite",
            url: `${BASE}/burning-crusade/karazhan/GeeksRus vs. Netherspite.mp4`,
          },
          {
            title: "GeeksRus vs. Nightbane",
            url: `${BASE}/burning-crusade/karazhan/GeeksRus vs. Nightbane.mp4`,
          },
          {
            title: "GeeksRus vs. Prince Malchezaar",
            url: `${BASE}/burning-crusade/karazhan/GeeksRus vs. PrinceMalchezaar.mp4`,
          },
          {
            title: "GeeksRus vs. Shade of Aran",
            url: `${BASE}/burning-crusade/karazhan/GeeksRus vs. ShadeOfAran.mp4`,
          },
          {
            title: "GeeksRus vs. Wizard of Oz",
            url: `${BASE}/burning-crusade/karazhan/GeeksRus vs. WizardOfOz.mp4`,
          },
        ],
      },
      {
        name: "Serpentshrine Cavern",
        cover: "/movies/covers/serpentshrine-cavern.jpg",
        videos: [
          {
            title: "Illumination vs. Hydross",
            url: `${BASE}/burning-crusade/serpentshrine-cavern/Illumination vs. Hydross.mp4`,
          },
          {
            title: "Illumination vs. Karathress",
            url: `${BASE}/burning-crusade/serpentshrine-cavern/Illumination vs. Karathress.mp4`,
          },
          {
            title: "Illumination vs. Lady Vashj",
            url: `${BASE}/burning-crusade/serpentshrine-cavern/Illumination vs. Lady Vashj.mp4`,
          },
          {
            title: "Illumination vs. Leotheras",
            url: `${BASE}/burning-crusade/serpentshrine-cavern/Illumination vs. Leotheras.mp4`,
          },
          {
            title: "Illumination vs. Lurker",
            url: `${BASE}/burning-crusade/serpentshrine-cavern/Illumination vs. Lurker.mp4`,
          },
          {
            title: "Illumination vs. Morogrim",
            url: `${BASE}/burning-crusade/serpentshrine-cavern/Illumination vs. Morogrim.mp4`,
          },
        ],
      },
      {
        name: "Tempest Keep",
        cover: "/movies/covers/tempest-keep.jpg",
        videos: [
          {
            title: "Illumination vs. Alar",
            url: `${BASE}/burning-crusade/tempest-keep/Illumination vs. Alar.mp4`,
          },
          {
            title: "Illumination vs. Kael'thas",
            url: `${BASE}/burning-crusade/tempest-keep/Illumination vs. Kaelthas.mp4`,
          },
          {
            title: "Illumination vs. Solarian - Wipe",
            url: `${BASE}/burning-crusade/tempest-keep/Illumination vs. Solarian - Wipe.mp4`,
          },
          {
            title: "Illumination vs. Solarian",
            url: `${BASE}/burning-crusade/tempest-keep/Illumination vs. Solarian.mp4`,
          },
          {
            title: "Illumination vs. Void Reaver",
            url: `${BASE}/burning-crusade/tempest-keep/Illumination vs. VoidReaver.mp4`,
          },
        ],
      },
      {
        name: "Black Temple",
        cover: "/movies/covers/black-temple.jpg",
        videos: [
          {
            title: "Illumination vs. Bloodboil",
            url: `${BASE}/burning-crusade/black-temple/Illumination vs. Bloodboil.mp4`,
          },
          {
            title: "Illumination vs. High Warlord Naj'entus",
            url: `${BASE}/burning-crusade/black-temple/Illumination vs. HWN.mp4`,
          },
          {
            title: "Illumination vs. Illidan Stormrage",
            url: `${BASE}/burning-crusade/black-temple/Illumination vs. Illidan Stormrage.mp4`,
          },
          {
            title: "Illumination vs. Illidari Council",
            url: `${BASE}/burning-crusade/black-temple/Illumination vs. Illidari Council.mp4`,
          },
          {
            title: "Illumination vs. Mother Shahraz",
            url: `${BASE}/burning-crusade/black-temple/Illumination vs. Mother Shahraz.mp4`,
          },
          {
            title: "Illumination vs. RoS - Hidrasactum",
            url: `${BASE}/burning-crusade/black-temple/Illumination vs. RoS - Hidrasactum.mp4`,
          },
          {
            title: "Illumination vs. Reliquary of Souls",
            url: `${BASE}/burning-crusade/black-temple/Illumination vs. RoS.mp4`,
          },
          {
            title: "Illumination vs. Shade of Akama",
            url: `${BASE}/burning-crusade/black-temple/Illumination vs. Shade of Akama.mp4`,
          },
          {
            title: "Illumination vs. Supremus",
            url: `${BASE}/burning-crusade/black-temple/Illumination vs. Supremus.mp4`,
          },
          {
            title: "Illumination vs. Teron Gorefiend",
            url: `${BASE}/burning-crusade/black-temple/Illumination vs. Teron.mp4`,
          },
        ],
      },
      {
        name: "The Battle for Mount Hyjal",
        cover: "/movies/covers/mount-hyjal.jpg",
        videos: [
          {
            title: "Illumination vs. Anetheron",
            url: `${BASE}/burning-crusade/mount-hyjal/Illumination vs. Anetheron.mp4`,
          },
          {
            title: "Illumination vs. Archimonde",
            url: `${BASE}/burning-crusade/mount-hyjal/Illumination vs. Archimonde.mp4`,
          },
          {
            title: "Illumination vs. Azgalor",
            url: `${BASE}/burning-crusade/mount-hyjal/Illumination vs. Azgalor.mp4`,
          },
          {
            title: "Illumination vs. Kazrogal",
            url: `${BASE}/burning-crusade/mount-hyjal/Illumination vs. Kazrogal.mp4`,
          },
          {
            title: "Illumination vs. Rage Winterchill",
            url: `${BASE}/burning-crusade/mount-hyjal/Illumination vs. Rage Winterchill.mp4`,
          },
        ],
      },
      {
        name: "The Sunwell",
        cover: "/movies/covers/the-sunwell.jpg",
        videos: [
          {
            title: "Illumination vs. Brutallus",
            url: `${BASE}/burning-crusade/sunwell/Illumination vs. Brutallus.mp4`,
          },
          {
            title: "Illumination vs. Eredar Twins",
            url: `${BASE}/burning-crusade/sunwell/Illumination vs. Eredar Twins.mp4`,
          },
          {
            title: "Illumination vs. Felmyst",
            url: `${BASE}/burning-crusade/sunwell/Illumination vs. Felmyst.mp4`,
          },
          {
            title: "Illumination vs. Kalecgos",
            url: `${BASE}/burning-crusade/sunwell/Illumination vs. Kalecgos.mp4`,
          },
          {
            title: "Illumination vs. Kil'Jaeden",
            url: `${BASE}/burning-crusade/sunwell/Illumination vs. KilJaeden.mp4`,
          },
          {
            title: "Illumination vs. M'uru",
            url: `${BASE}/burning-crusade/sunwell/Illumination vs. Muru.mp4`,
          },
        ],
      },
      {
        name: "Other Burning Crusade",
        cover: "/movies/covers/gruuls-lair.jpg",
        videos: [
          {
            title: "Doomwalker",
            url: `${BASE}/burning-crusade/Doomwalker.mp4`,
          },
          {
            title: "Illumination vs. Gruul",
            url: `${BASE}/burning-crusade/Illumination vs. Gruul.mp4`,
          },
          {
            title: "Illumination vs. Magtheridon",
            url: `${BASE}/burning-crusade/Illumination vs. Magtheridon.mp4`,
          },
          {
            title: "NoPain Presents Illumination",
            url: `${BASE}/burning-crusade/NoPain Presents Illumination.mp4`,
          },
          { title: "Ruul solo", url: `${BASE}/burning-crusade/Ruul solo.mp4` },
        ],
      },
    ],
  },
  {
    name: "Wrath of the Lich King",
    cover: "/movies/covers/wrath-of-the-lich-king.jpg",
    raids: [
      {
        name: "Ulduar",
        cover: "/movies/covers/ulduar.jpg",
        videos: [
          {
            title: "Illumination vs. Algalon (Cefe)",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Illumination vs. Algalon(Cefe).mp4`,
          },
          {
            title: "Illumination vs. Algalon (Hidrasactum)",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Illumination vs. Algalon(Hidrasactum).mp4`,
          },
          {
            title: "Illumination vs. Algalon (Nadezhda ver2)",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Illumination vs. Algalon(Nadezhda ver2).mp4`,
          },
          {
            title: "Illumination vs. General Vezax (Hardmode) PriestPOV",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Illumination vs. GeneralVezax(Hardmode) PriestPOV.mp4`,
          },
          {
            title: "Illumination vs. General Vezax (Hardmode)",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Illumination vs. GeneralVezax(Hardmode).mp4`,
          },
          {
            title: "Illumination vs. Hodir Hardmode",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Illumination vs. Hodir Hardmode.mp4`,
          },
          {
            title: "Illumination vs. Ignis",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Illumination vs. Ignis.mp4`,
          },
          {
            title: "Illumination vs. Iron Council (Hard)",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Illumination vs. IronCouncil(Hard).mp4`,
          },
          {
            title: "Illumination vs. Iron Council (Hardmode)",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Illumination vs. IronCouncil(Hardmode).mp4`,
          },
          {
            title: "Illumination vs. Mimiron (Hardmode)",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Illumination vs. Mimiron(Hardmode).mp4`,
          },
          {
            title: "Illumination vs. Thorim (Hardmode)",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Illumination vs. Thorim(hardmode).mp4`,
          },
          {
            title: "Illumination vs. XT-002",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Illumination vs. XT-002.mp4`,
          },
          {
            title: "Illumination vs. Yogg-Saron",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Illumination vs. YoggSaron.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Algalon",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Algalon.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Flame Leviathan Hardmode",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. FlameLeviathan Hardmode.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Freya Hardmode v2",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Freya Hardmode v2.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Ignis the Furnace Master v2",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Ignis the Furnace Master v2.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Iron Council HardMode",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. IronCouncil HardMode.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Mimiron Hardmode",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Mimiron Hardmode.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Mimiron v2",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Mimiron v2.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Ulduar (high quality)",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Ulduar (high quality).mp4`,
          },
          {
            title: "Sallskapsraiden vs. Yogg-Saron v2",
            url: `${BASE}/wrath-of-the-lich-king/ulduar/Sallskapsraiden vs. Yogg-Saron v2.mp4`,
          },
        ],
      },
      {
        name: "Trial of the Crusader",
        cover: "/movies/covers/trial-of-the-crusader.jpg",
        videos: [
          {
            title: "Illumination vs. Northrend Beasts (Heroic)",
            url: `${BASE}/wrath-of-the-lich-king/trial-of-the-crusader/Illumination vs. NorthrendBeasts(Heroic).mp4`,
          },
          {
            title: "Sallskapsraiden Tribute to Insanity",
            url: `${BASE}/wrath-of-the-lich-king/trial-of-the-crusader/Sallskapsraiden Tribute to Insanity.mp4`,
          },
        ],
      },
      {
        name: "Icecrown Citadel",
        cover: "/movies/covers/icecrown-citadel.jpg",
        videos: [
          {
            title: "Illumination vs. Blood Princes Heroic",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Blood Princes Heroic.mp4`,
          },
          {
            title: "Illumination vs. Blood Queen Heroic",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Blood Queen Heroic.mp4`,
          },
          {
            title: "Illumination vs. Deathbringer Saurfang Heroic",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Deathbringer Saurfang Heroic.mp4`,
          },
          {
            title: "Illumination vs. Gunship Battle Heroic",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Gunship Battle Heroic.mp4`,
          },
          {
            title: "Illumination vs. Lady Deathwhisper Heroic",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Lady Deathwhisper Heroic.mp4`,
          },
          {
            title: "Illumination vs. Lord Marrowgar Heroic",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Lord Marrowgar Heroic.mp4`,
          },
          {
            title: "Illumination vs. Professor Putricide Heroic",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Professor Putricide Heroic.mp4`,
          },
          {
            title: "Illumination vs. Rotface Heroic",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Illumination vs. Rotface Heroic.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Blood Princes Heroic",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Blood Princes Heroic.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Blood-Queen Lana'thel",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Blood-Queen Lana'thel.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Deathbringer Saurfang",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Deathbringer Saurfang.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Festergut Heroic HighBitrate",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Festergut Heroic HighBitrate.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Gunship Battle",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Gunship Battle.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Lady Deathwhisper Full House",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Lady Deathwhisper Full House.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Lord Marrowgar Heroic",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Lord Marrowgar Heroic.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Professor Putricide",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Professor Putricide.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Rotface",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Rotface.mp4`,
          },
          {
            title: "Sallskapsraiden vs. Valithria Dreamwalker Heroic",
            url: `${BASE}/wrath-of-the-lich-king/icecrown-citadel/Sallskapsraiden vs. Valithria Dreamwalker Heroic.mp4`,
          },
        ],
      },
      {
        name: "Specials",
        cover: "/movies/covers/wrath-of-the-lich-king.jpg",
        videos: [
          {
            title: "Illumination vs. Sartharion",
            url: `${BASE}/wrath-of-the-lich-king/Illumination vs. Sartharion.mp4`,
          },
          {
            title: "Sallskapsraiden",
            url: `${BASE}/wrath-of-the-lich-king/Sallskapsraiden.mp4`,
          },
        ],
      },
    ],
  },
  {
    name: "Warlords of Draenor",
    cover: "/movies/covers/blackrock-foundry.jpg",
    raids: [
      {
        name: "Blackrock Foundry",
        cover: "/movies/covers/blackrock-foundry.jpg",
        videos: [
          {
            title: "Undecided vs. Beastlord Darmac Mythic v2",
            url: `${BASE}/warlords-of-draenor/blackrock-foundry/Undecided vs. Beastlord Darmac Mythic v2.mp4`,
          },
          {
            title: "Undecided vs. Blackhand Heroic",
            url: `${BASE}/warlords-of-draenor/blackrock-foundry/Undecided vs. Blackhand Heroic.mp4`,
          },
          {
            title: "Undecided vs. Blast Furnace Heroic",
            url: `${BASE}/warlords-of-draenor/blackrock-foundry/Undecided vs. Blast Furnace Heroic.mp4`,
          },
          {
            title: "Undecided vs. Flamebender Mythic",
            url: `${BASE}/warlords-of-draenor/blackrock-foundry/Undecided vs. Flamebender Mythic.mp4`,
          },
          {
            title: "Undecided vs. Gruul Mythic",
            url: `${BASE}/warlords-of-draenor/blackrock-foundry/Undecided vs. Gruul Mythic.mp4`,
          },
          {
            title: "Undecided vs. Hansgar and Franzok Mythic",
            url: `${BASE}/warlords-of-draenor/blackrock-foundry/Undecided vs. Hansgar and Franzok Mythic.mp4`,
          },
          {
            title: "Undecided vs. Oregorger Mythic",
            url: `${BASE}/warlords-of-draenor/blackrock-foundry/Undecided vs. Oregorger Mythic.mp4`,
          },
        ],
      },
      {
        name: "Hellfire Citadel",
        cover: "/movies/covers/hellfire-citadel.jpg",
        videos: [
          {
            title: "Undecided Hellfire Heroic Speed Run",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided Hellfire Heroic Speed Run.mp4`,
          },
          {
            title: "Undecided vs. Archimonde Mythic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Archimonde Mythic.mp4`,
          },
          {
            title: "Undecided vs. Fel Lord Zakuun Mythic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Fel Lord Zakuun Mythic.mp4`,
          },
          {
            title: "Undecided vs. Gorefiend Mythic (no christmas)",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Gorefiend Mythic no christmas.mp4`,
          },
          {
            title: "Undecided vs. Gorefiend Mythic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Gorefiend Mythic.mp4`,
          },
          {
            title: "Undecided vs. Hellfire Assault Mythic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Hellfire Assault Mythic.mp4`,
          },
          {
            title: "Undecided vs. Hellfire High Council Mythic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Hellfire High Council Mythic.mp4`,
          },
          {
            title: "Undecided vs. Iron Reaver Mythic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Iron Reaver Mythic.mp4`,
          },
          {
            title: "Undecided vs. Kilrogg Deadeye Mythic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Kilrogg Deadeye Mythic.mp4`,
          },
          {
            title: "Undecided vs. Kormrok Mythic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Kormrok Mythic.mp4`,
          },
          {
            title: "Undecided vs. Mannoroth Heroic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Mannoroth Heroic.mp4`,
          },
          {
            title: "Undecided vs. Mannoroth Mythic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Mannoroth Mythic.mp4`,
          },
          {
            title: "Undecided vs. Shadow-Lord Iskar Mythic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Shadow-Lord Iskar Mythic.mp4`,
          },
          {
            title: "Undecided vs. Socrethar Heroic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Socrethar Heroic.mp4`,
          },
          {
            title: "Undecided vs. Socrethar the Eternal Mythic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Socrethar the Eternal Mythic.mp4`,
          },
          {
            title: "Undecided vs. Tyrant Velhari Heroic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Tyrant Velhari Heroic.mp4`,
          },
          {
            title: "Undecided vs. Tyrant Velhari Mythic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. Tyrant Velhari Mythic.mp4`,
          },
          {
            title: "Undecided vs. Xhul'Horac Mythic",
            url: `${BASE}/warlords-of-draenor/hellfire-citadel/Undecided vs. XhulHorac Mythic.mp4`,
          },
        ],
      },
    ],
  },
  {
    name: "Legion",
    cover: "/movies/covers/emerald-nightmare.jpg",
    raids: [
      {
        name: "Emerald Nightmare",
        cover: "/movies/covers/emerald-nightmare.jpg",
        videos: [
          {
            title: "Undecided vs. Cenarius Mythic",
            url: `${BASE}/legion/emerald-nightmare/Undecided vs. Cenarius Mytic.mp4`,
          },
          {
            title: "Undecided vs. Dragons of Nightmare Mythic (with Portals)",
            url: `${BASE}/legion/emerald-nightmare/Undecided vs. Dragons of Nightmare Mythic With Portals.mp4`,
          },
          {
            title: "Undecided vs. Dragons of Nightmare Mythic",
            url: `${BASE}/legion/emerald-nightmare/Undecided vs. Dragons of Nightmare Mythic.mp4`,
          },
          {
            title: "Undecided vs. Elerethe Renferal Mythic",
            url: `${BASE}/legion/emerald-nightmare/Undecided vs. Elerethe Renferal Mythic.mp4`,
          },
          {
            title: "Undecided vs. Il'gynoth Mythic",
            url: `${BASE}/legion/emerald-nightmare/Undecided vs. Ilgynoth Mythic.mp4`,
          },
          {
            title: "Undecided vs. Nythendra Mythic",
            url: `${BASE}/legion/emerald-nightmare/Undecided vs. Nythendra Mythic.mp4`,
          },
          {
            title: "Undecided vs. Ursoc Mythic",
            url: `${BASE}/legion/emerald-nightmare/Undecided vs. Ursoc Mythic.mp4`,
          },
          {
            title: "Undecided vs. Xavius Mythic",
            url: `${BASE}/legion/emerald-nightmare/Undecided vs. Xavius Mytic.mp4`,
          },
        ],
      },
      {
        name: "Nighthold",
        cover: "/movies/covers/nighthold.jpg",
        videos: [
          {
            title: "Undecided vs. Chronomatic Anomaly Mythic",
            url: `${BASE}/legion/nighthold/Undecided vs. Chronomatic Anomaly Mythic.mp4`,
          },
          {
            title: "Undecided vs. Skorpyron Mythic",
            url: `${BASE}/legion/nighthold/Undecided vs. Skorpyron Mythic.mp4`,
          },
          {
            title: "Undecided vs. Trilliax Mythic",
            url: `${BASE}/legion/nighthold/Undecided vs. Trilliax Mythic.mp4`,
          },
          {
            title: "Undecided vs. High Botanist Tel'arn Mythic",
            url: `${BASE}/legion/nighthold/Undecided_vs_High_Botanist_Telarn_Mythic.mp4`,
          },
          {
            title: "Undecided vs. Krosus Mythic",
            url: `${BASE}/legion/nighthold/Undecided_vs_Krosus_Mythic.mp4`,
          },
          {
            title: "Undecided vs. Spellblade Aluriel Mythic",
            url: `${BASE}/legion/nighthold/Undecided_vs_Spellblade_Aluriel_Mythic.mp4`,
          },
          {
            title: "Undecided vs. Tichondrius Mythic",
            url: `${BASE}/legion/nighthold/Undecided_vs_Tichondrius_Mythic.mp4`,
          },
        ],
      },
    ],
  },
  {
    name: "Other",
    cover: "/movies/covers/other.jpg",
    raids: [
      {
        name: "",
        cover: "",
        videos: [
          {
            title: "11 Years of WoW Raiding",
            url: `${BASE}/other/11_Years_of_WoW_Raiding.mp4`,
          },
          {
            title: "Illumination Raiding",
            url: `${BASE}/other/Illumination_Raiding.mp4`,
          },
        ],
      },
    ],
  },
];
