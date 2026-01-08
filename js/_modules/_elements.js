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

  const aboutMe = document.createElement("div");
  aboutMe.classList.add("aboutMe");

  header.append(header_menu);

  //content
  const article = document.createElement("article");
  article.classList.add("content_container");

  // footer
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  container.append(header, aboutMe, article, footer);

  body.append(container);
};
