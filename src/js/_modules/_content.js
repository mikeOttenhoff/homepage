import { content_database } from "./_content_database.js";

export const content = function () {
  const content = Object.entries(content_database);
  const content_container = document.querySelector(".content_container");

  function appendLink(container, href, text) {
    if (!href) return;

    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    container.append(link);
  }

  content.forEach(function ([key, item]) {
    const assignment_container = document.createElement("div");
    assignment_container.classList.add("content");

    const assignment_img_link = document.createElement("img");
    assignment_img_link.src = item.img;

    if (item.img) {
      assignment_container.append(assignment_img_link);
    }

    const assignment_title = document.createElement("h3");
    assignment_title.textContent = item.title;
    assignment_title.classList.add("content_title");

    const assignment_textContent = document.createElement("p");
    assignment_textContent.textContent = item.textContent;

    const assignment_linkContainer = document.createElement("div");
    assignment_linkContainer.classList.add("link_container");

    appendLink(assignment_linkContainer, item.link, item.link_name);
    appendLink(assignment_linkContainer, item.github_link, "GitHub");

    assignment_container.append(
      assignment_title,
      assignment_textContent,
      assignment_linkContainer
    );

    content_container.append(assignment_container);
    // console.log(key, item);
  });
};
