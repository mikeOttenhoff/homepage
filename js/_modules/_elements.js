export const elements = function () {
  const body = document.body;

  const container = document.createElement("div");
  container.classList.add("container");

  //header
  const header = document.createElement("header");
  header.classList.add("header");

  const header_menu = document.createElement("nav");
  header_menu.classList.add("header_menu");
  header_menu.setAttribute("aria-label", "Main navigation");

  const header_menu_element = (name, url = "#", external = false) => {
    const anchor = document.createElement("a");
    anchor.textContent = name;
    anchor.href = url;

    if (external) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }

    return anchor;
  };

  const menuItems = [
    { name: "home", url: "/" },
    {
      name: "algemene voorwaarden",
      url: "../../pages/algemeneVoorwaarden.html",
    },
    {
      name: "github",
      url: "https://github.com/mikeOttenhoff",
      external: true,
    },
  ];

  menuItems.forEach(item => {
    header_menu.append(header_menu_element(item.name, item.url, item.external));
  });

  const header_aboutMe = document.createElement("div");
  header_aboutMe.classList.add("aboutMe");

  header.append(header_menu, header_aboutMe);

  //content
  const article = document.createElement("article");
  article.classList.add("content");

  // footer
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  container.append(header, article, footer);

  body.append(container);
};
