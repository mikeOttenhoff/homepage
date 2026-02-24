import logo from "@img/goudenLotusAwards2025/gla_logo.svg";
import img1 from "@img/goudenLotusAwards2025/nieuwsberichten_658x395_datagedrevenWerken.jpg";
import img2 from "@img/goudenLotusAwards2025/gla_adv.jpg";
import img3 from "@img/goudenLotusAwards2025/gla_doubleRectangle_600x500_banner.webp";
import puffin from "@img/puffin.webm";
import jungle from "@img/Tropical-Jungle-Background-Graphics-84339217-1.webp";
import scoutingPoster1 from "@img/scouting/scouting_MontgomeryPoster_v2.jpg";
import scoutingPoster2 from "@img/scouting/scouting_WeCanDoItPoster_V2.jpg";
import canva from "@img/canva_magicWrite_300x250/index.html";

// item.img = {
//   type: "image" | "video" | "youtube" | "lottie",
//   src?: string,
//   id?: string,
//   json?: string,
//   alt?: string
// };

export const content_database = {
  gla: {
    title: "Gouden Lotus Award",
    textContent: "Een nieuw logo ontwerp voor de Gouden Lotus Awards.",
    img: { type: "image", src: logo },
    link: "",
    link_name: "",
    github_link: "",
    keyWords: ["Ontwerp", "Illustrator", "Advertentie", "Banners"],
    // fullscreen
    fullscreen: {
      description:
        "Voor 'De Gouden Lotus Awards' is er een nieuw logo bedacht. Dit logo wordt gebruikt op o.a. de website, advertenties en nog veel meer. Hier een kleine greep van de content die voor dit project gemaakt zijn.",
      media: [
        {
          type: "image",
          src: img1,
          alt: "algemeen logo, gouden lotus awards",
        },
        {
          type: "image",
          src: img2,
          alt: "Advertentie, gouden lotus awards",
        },
        {
          type: "image",
          src: img3,
          alt: "Online banner, gouden lotus awards",
        },
      ],
    },
  },
  papegaaiDuiker: {
    title: "Papegaai duiker",
    textContent:
      "Een animatie gemaakt met After Effects en de plugin Joystick 'n Sliders",
    img: { type: "video", src: puffin },
    link: "",
    link_name: "",
    github_link: "",
    keyWords: ["After Effects, Joystick 'n sliders, animatie"],
    // fullscreen
    fullscreen: {
      description:
        "Het karakter is gemaakt met Illustrator en de animatie gemaakt met After Effects en de plugin Joystick 'n Sliders. ",
      media: [],
    },
  },
  lostCities_rekenApp: {
    title: "Lost Cities, reken app",
    textContent:
      "Een reken app voor Lost Cities, een kaartspel voor twee spelers waar je op expeditie gaat en deze expeditie winstgevend moet maken.",
    img: { type: "image", src: jungle },
    link: "https://mikeottenhoff.github.io/lostCities_points/",
    link_name: "Lost cities, punten teller",
    github_link: "https://github.com/mikeOttenhoff/lostCities_points",
    keyWords: ["HTML, SCSS, CSS, Javascript"],
  },
  galileo: {
    title: "Galileo",
    textContent:
      "De (Motion) Graphics voor 3 seizoenen Galileo samengevat in 3 complilaties",
    img: { type: "youtube", id: "gRAPgTZhdJE" },
    link: "",
    link_name: "",
    github_link: "",
    keyWords: ["Ontwerp", "Motion graphics", "Graphics", "Editing"],
    // fullscreen
    fullscreen: {
      description:
        "Bij kennis en weetjes programma 'Galileo' heb ik 3 seizoenen diverse Motion graphic content gemaakt.",
      media: [
        {
          type: "youtube",
          id: "gRAPgTZhdJE",
        },
        {
          type: "youtube",
          id: "NS5eZy9Y7xM",
        },
        {
          type: "youtube",
          id: "aN5rLLGxgvc",
        },
      ],
    },
  },
  canva: {
    title: "Canva",
    textContent:
      "Een test opdracht voor Canva. Gemaakt naar Canva's styleguide en extra voorwaarden",
    img: { type: "html", src: canva },
    className: "canvaOpdracht",
    link: "",
    link_name: "",
    github_link: "",
    keyWords: ["After Effects, Lottie, Bodymovin"],
  },
  hypovak2021: {
    title: "Hypovak 2021, Online banner",
    textContent:
      "Een online banner voor HypoVak 2021 met een man die van alles in zijn leven probeert hoog te houden",
    img: {
      type: "lottie",
      json: "./hypovak2021/banner_website_336x280.json",
    },
    link: "",
    link_name: "",
    github_link: "",
    keyWords: ["After Effects, Lottie, Bodymovin"],
  },
  beleggersFair: {
    title: "BeleggersFair, video promo's",
    textContent:
      "Een verzameling promotie videos voor de BeleggersFair, een beleggers evenement.",
    img: { type: "youtube", id: "6u2cH7ktUP4" },
    link: "",
    link_name: "",
    github_link: "",
    keyWords: ["Ontwerp", "Motion graphics", "Graphics", "Editing"],
    // fullscreen
    fullscreen: {
      description: "",
      media: [
        {
          type: "youtube",
          id: "RSYx7LD531c",
        },
        {
          type: "youtube",
          id: "q8bf5AuNylc",
        },
        {
          type: "youtube",
          id: "6u2cH7ktUP4",
        },
        {
          type: "youtube",
          id: "gKu70PIdM0A",
        },
        {
          type: "youtube",
          id: "qZaGQKuovzU",
        },
        {
          type: "youtube",
          id: "GQfnDpuveC8",
        },
        {
          type: "youtube",
          id: "DmgDPHxGNoU",
        },
      ],
    },
  },
  hypovak: {
    title: "HypoVak, video promo's",
    textContent:
      "Een verzameling promotie videos voor hypotheek evenement HypoVak.",
    img: { type: "youtube", id: "LVA4AuT985k" },
    link: "",
    link_name: "",
    github_link: "",
    keyWords: ["Ontwerp", "Motion graphics", "Graphics", "Editing"],
    // fullscreen
    fullscreen: {
      description: "",
      media: [
        {
          type: "youtube",
          id: "LVA4AuT985k",
        },
        {
          type: "youtube",
          id: "0B1e7-CYzoU",
        },
        {
          type: "youtube",
          id: "2i819cscPTM",
        },
        {
          type: "youtube",
          id: "ytjYBjze0LI",
        },
        {
          type: "youtube",
          id: "LxcTGyNvit0",
        },
        {
          type: "youtube",
          id: "EzxUY2TcbMw",
        },
      ],
    },
  },
  scouting: {
    title: "Scouting posters",
    textContent: "Promo posters voor mijn scouting vereniging",
    img: { type: "image", src: scoutingPoster1 },
    link: "",
    link_name: "",
    github_link: "",
    keyWords: ["Advertentie"],
    // fullscreen
    fullscreen: {
      description:
        "Promotie materiaal gebaseerd op bekende oude posters, aangepast als oproep materiaal voor mijn scouting groep.",
      media: [
        {
          type: "image",
          src: scoutingPoster1,
          alt: "Montgomery poster voor scouting",
        },
        {
          type: "image",
          src: scoutingPoster2,
          alt: "We can do it poster voor scouting",
        },
      ],
    },
  },
};
