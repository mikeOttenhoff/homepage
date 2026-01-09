export const footer = function () {
  const footer = document.querySelector(".footer");

  //Container
  const footer_container = document.createElement("div");
  footer_container.classList.add("footer_container");

  const footer_title = document.createElement("h3");
  footer_title.textContent = "Neem contact op";

  const footer_textContent = document.createElement("p");
  footer_textContent.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam enim nec turpis tempor molestie. ";

  // append
  footer_container.append(footer_title, footer_textContent);
  footer.append(footer_container);
};
