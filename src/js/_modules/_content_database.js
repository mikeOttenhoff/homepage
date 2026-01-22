import logo from "@img/goudenLotusAwards2025/gla_logo.svg";
import img1 from "@img/goudenLotusAwards2025/nieuwsberichten_658x395_datagedrevenWerken.jpg";
import img2 from "@img/goudenLotusAwards2025/gla_adv.jpg";
import img3 from "@img/goudenLotusAwards2025/gla_doubleRectangle_600x500_banner.webp";
import puffin from "@img/puffin.webm";
import jungle from "@img/Tropical-Jungle-Background-Graphics-84339217-1.webp";
import galileo from "@img/galileo.jpg";

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
    link: "https://infinance.nl/gouden-lotus-awards/",
    link_name: "Gouden Lotus Awards",
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
          alt: "Photo 1",
        },
        {
          type: "image",
          src: img2,
          alt: "Photo 2",
        },
        {
          type: "image",
          src: img3,
          alt: "Photo 3",
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
        "Een animatie gemaakt met After Effects en de plugin Joystick 'n Sliders",
      media: [],
    },
  },
  lostCities_rekenApp: {
    title: "Lost Cities, reken app",
    textContent:
      "Een reken app voor Lost Cities, een kaartspel voor twee spelers waar je op expeditie gaat en deze expeditie winstgevend moet maken. \n\n De reken app heb ik gemaakt omdat het berekenen van de punten irritant was.",
    img: { type: "image", src: jungle },
    link: "",
    link_name: "",
    github_link: "https://mikeottenhoff.github.io/lostCities_points/",
    keyWords: ["HTML, SCSS, CSS, Javascript"],
  },
  galileo: {
    title: "Galileo",
    textContent: "De 'Motion' Graphics voor 3 seizoenen Galileo",
    img: { type: "youtube", id: "gRAPgTZhdJE" },
    link: "",
    link_name: "",
    github_link: "",
    keyWords: ["Ontwerp", "Motion graphics", "Graphics", "Editing"],
    // fullscreen
    fullscreen: {
      description:
        "Voor kennis en weetjes programma 'Galileo' heb ik 3 seizoenen diverse content gemaakt ",
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
};
