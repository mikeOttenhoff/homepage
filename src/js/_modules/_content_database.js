import logo from "@img/goudenLotusAwards2025/gla_logo.svg";
import img1 from "@img/goudenLotusAwards2025/nieuwsberichten_658x395_datagedrevenWerken.jpg";
import img2 from "@img/goudenLotusAwards2025/gla_adv.jpg";
import img3 from "@img/goudenLotusAwards2025/gla_doubleRectangle_600x500_banner.webp";
import puffin from "@img/puffin.webm";
import jungle from "@img/Tropical-Jungle-Background-Graphics-84339217-1.webp";

export const content_database = {
  gla: {
    title: "Gouden Lotus Award",
    textContent: "Een nieuw logo ontwerp voor de Gouden Lotus Awards.",
    img: logo,
    link: "https://infinance.nl/gouden-lotus-awards/",
    link_name: "Gouden Lotus Awards",
    github_link: "",
    keyWords: ["Ontwerp", "Illustrator", "Advertentie", "Banners"],
    // fullscreen
    fullscreen: {
      description:
        "Voor 'De Gouden Lotus Awards' is er een nieuw logo bedacht. Dit logo wordt gebruikt op o.a. de website, advertenties en nog veel meer. Hier een kleine greep van de content die voor dit project gemaakt zijn.",
      images: [
        {
          link: img1,
          alt: "Photo 1",
        },
        {
          link: img2,
          alt: "Photo 2",
        },
        {
          link: img3,
          alt: "Photo 3",
        },
      ],
    },
  },
  papegaaiDuiker: {
    title: "Papegaai duiker",
    textContent:
      "Een animatie gemaakt met After Effects en de plugin Joystick 'n Sliders",
    img: puffin,
    link: "",
    link_name: "",
    github_link: "",
    keyWords: ["After Effects, Joystick 'n sliders, animatie"],
    // fullscreen
    fullscreen: {
      description:
        "Een animatie gemaakt met After Effects en de plugin Joystick 'n Sliders",
    },
  },
  lostCities_rekenApp: {
    title: "Lost Cities, reken app",
    textContent:
      "Een reken app voor Lost Cities, een kaartspel voor twee spelers waar je op expeditie gaat en deze expeditie winstgevend moet maken. \n\n De reken app heb ik gemaakt omdat het berekenen van de punten irritant was.",
    img: jungle,
    link: "",
    link_name: "",
    github_link: "https://mikeottenhoff.github.io/lostCities_points/",
    keyWords: ["HTML, SCSS, CSS, Javascript"],
  },
};
