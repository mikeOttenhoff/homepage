import logo from "@img/Logo.svg";

export const header = function () {
  const header = document.querySelector(".header");
  const menuLogo = document.querySelector(".header_logo");
  const header_menu = document.querySelector(".header_menu");

  menuLogo.src = logo;
  menuLogo.alt = "Mike Ottenhoff, audiovisueel vormgever logo ";

  header.append(menuLogo);

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

  menuItems.forEach(item => {
    header_menu.append(header_menu_element(item.name, item.url, item.external));
  });
};
