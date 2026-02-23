export const footer = function () {
  const footer = document.querySelector(".footer");

  //Container
  const footer_container = document.createElement("div");
  footer_container.classList.add("footer_container");

  const footer_menu = document.createElement("div");
  footer_menu.classList.add("footer_menu");

  const footer_textContent = document.createElement("p");
  footer_textContent.textContent = `${new Date().getFullYear()} - Mike Ottenhoff, audiovisueel vormgever`;

  // append
  footer_container.append(footer_menu, footer_textContent);
  footer.append(footer_container);

  const menuItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "algemene voorwaarden",
      url: "./pages/algemeneVoorwaarden.html",
    },
    {
      name: "github",
      url: "https://github.com/mikeOttenhoff",
      external: true,
    },
  ];

  const footer_menu_element = (name, url = "#", external = false) => {
    const anchor = document.createElement("a");
    anchor.textContent = name;
    anchor.href = url;

    if (external) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }

    return anchor;
  };

  menuItems.forEach(item => {
    footer_menu.append(footer_menu_element(item.name, item.url, item.external));
  });
};
