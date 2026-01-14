import logo from "@img/Logo.svg";
import img1 from "@img/ding1/_fotos/WP_20131126_22_25_45_Pro.jpg";
import img2 from "@img/ding1/_fotos/WP_20131128_20_17_05_Pro.jpg";
import img3 from "@img/ding1/_fotos/WP_20131221_17_04_46_Pro.jpg";

export const content_database = {
  ding1: {
    title: "Hello World!",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam enim nec turpis tempor molestie. ",
    img: logo,

    link: "https://developer.mozilla.org/en-US/",
    link_name: "MDN",
    github_link: "https://github.com/mikeOttenhoff/hello-world",
    keyWords: ["HTML", "CSS", "JavaScript"],
    // fullscreen
    fullscreen: {
      description:
        "This project explores the basics of HTML, CSS and JavaScript. The focus was on structure and accessibility.",
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
  ding2: {
    title: "Git test",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam enim nec turpis tempor molestie. ",
    img: "",
    link: "https://stackoverflow.com/questions",
    link_name: "Stack Overflow",
    github_link: "https://github.com/mikeOttenhoff/git_test",
    keyWords: ["Git"],
    // fullscreen
    fullscreen: {
      description:
        "A small test project focused on Git workflows and version control.",
      tech: ["Git", "GitHub"],
    },
  },
  ding3: {
    title: "ding3",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam enim nec turpis tempor molestie. ",
    img: "",
    link: "",
    link_name: "",
    github_link: "",
    keyWords: ["grafisch vormgeven, design"],
  },
};
