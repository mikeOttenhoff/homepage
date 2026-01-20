import { content_database } from "./_content_database.js";
import { ui_elements, export_carousel } from "./_components/carousel/main.js";

export const content = function () {
  const content = Object.entries(content_database);
  const content_container = document.querySelector(".content_container");

  function appendLink(container, href, text) {
    if (!href) return;

    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    link.target = "_blank";
    container.append(link);
  }

  function buildFullscreenContent(item) {
    const container = document.createElement("div");
    container.classList.add("extra_content");

    if (item.fullscreen?.description) {
      const desc = document.createElement("p");
      desc.textContent = item.fullscreen.description;
      item.textContent.remove;
      container.append(desc);
    }

    if (item.keyWords?.length) {
      const keyWordList = document.createElement("ul");
      keyWordList.classList.add("keyword_list");

      item.keyWords.forEach(keyWord => {
        const li = document.createElement("li");
        li.textContent = keyWord;
        keyWordList.append(li);
      });

      container.append(keyWordList);
    }

    if (
      Array.isArray(item.fullscreen?.images) &&
      item.fullscreen?.images?.length
    ) {
      const carouselContainer = document.createElement("div");
      carouselContainer.classList.add("carousel_container");

      carouselContainer.addEventListener("click", e => e.stopPropagation());

      container.append(carouselContainer);

      // Initialize carousel inside this container
      const carouselElements = ui_elements(
        carouselContainer,
        item.fullscreen.images
      );

      export_carousel(
        carouselElements.arrow_left_body,
        carouselElements.arrow_right_body,
        carouselElements.image_container,
        carouselElements.images,
        carouselElements.dots_container
      );
    }

    if (!container.hasChildNodes()) return null;
    return container;
  }

  content.forEach(function ([key, item]) {
    const assignment_container = document.createElement("div");
    assignment_container.classList.add("content");

    assignment_container.addEventListener("click", function (e) {
      if (e.target.closest(".carousel_container")) return;

      assignment_container.classList.toggle("fullscreen");
      let extra = assignment_container.querySelector(".extra_content");
      if (assignment_container.classList.contains("fullscreen")) {
        if (!extra) {
          assignment_container.append(buildFullscreenContent(item));
        }
      } else {
        extra?.remove();
      }
    });

    const imgFile = item.img;
    if (imgFile) {
      const extension = imgFile.split(".").pop().toLowerCase();

      let element;

      // Video formats
      const videoFormats = ["webm", "mp4", "ogg"];

      // Image formats
      const imageFormats = ["png", "jpg", "jpeg", "gif", "webp", "svg"];

      if (videoFormats.includes(extension)) {
        element = document.createElement("video");
        element.src = imgFile;
        element.autoplay = true;
        element.loop = true;
        element.muted = true; // required for autoplay
        element.playsInline = true; // better mobile support
        element.style.maxWidth = "100%"; // optional styling
      } else if (imageFormats.includes(extension)) {
        element = document.createElement("img");
        element.src = imgFile;
      } else {
        console.warn("Unsupported file format:", imgFile);
      }

      if (element) assignment_container.append(element);
    }

    const assignment_title = document.createElement("h3");
    assignment_title.textContent = item.title;
    assignment_title.classList.add("content_title");

    const assignment_textContent = document.createElement("p");
    assignment_textContent.textContent = item.textContent;
    assignment_textContent.classList.add("content_text");

    const assignment_linkContainer = document.createElement("div");
    assignment_linkContainer.classList.add("link_container");

    assignment_linkContainer.addEventListener("click", e => {
      e.stopPropagation();
    });

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
