import { content_database } from "./_content_database.js";

export const content = function () {
  const content = Object.entries(content_database);
  const content_container = document.querySelector(".content_container");

  content.forEach(function ([key, item]) {
    const assignment_container = document.createElement("div");
    const assignment_title = item.title;
    const assignment_textContent = item.textContent;
    const assignment_img_link = item.img;
    const assignment_link = item.link;
    const assignment_github_link = item.github_link;
    assignment_container.append(
      assignment_title,
      assignment_textContent,
      assignment_img_link,
      assignment_link,
      assignment_github_link
    );

    content_container.append(assignment_container);
    console.log(key, item);
  });
};
