import { content_database } from "./_content_database.js";
import { ui_elements, export_carousel } from "./_components/carousel/main.js";

export const content = function () {
  const contentEntries = Object.entries(content_database);
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

    const mediaItems =
      item.fullscreen?.media ??
      item.fullscreen?.images?.map(img => ({
        type: "image",
        src: img.link,
        alt: img.alt,
      }));

    if (Array.isArray(mediaItems) && mediaItems.length) {
      const carouselContainer = document.createElement("div");
      carouselContainer.classList.add("carousel_container");

      carouselContainer.addEventListener("click", e => e.stopPropagation());

      container.append(carouselContainer);

      // Initialize carousel inside this container
      const carouselElements = ui_elements(carouselContainer, mediaItems);

      export_carousel(
        carouselElements.arrow_left_body,
        carouselElements.arrow_right_body,
        carouselElements.image_container,
        carouselElements.mediaItems,
        carouselElements.dots_container,
      );
    }

    if (!container.hasChildNodes()) return null;
    return container;
  }

  contentEntries.forEach(function ([key, item]) {
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

    const media = item.img;
    if (media) {
      let element;

      switch (media.type) {
        // 🖼 Image
        case "image":
          element = document.createElement("img");
          element.classList.add("content_img");
          element.src = media.src;
          element.alt = media.alt || "";
          break;

        // 🎥 Local video
        case "video":
          element = document.createElement("video");
          element.src = media.src;
          element.autoplay = true;
          element.loop = true;
          element.muted = true;
          element.playsInline = true;
          element.style.maxWidth = "100%";
          break;

        // ▶️ YouTube
        case "youtube":
          element = document.createElement("iframe");
          element.src = `https://www.youtube.com/embed/${media.id}?autoplay=0&mute=1`;
          element.allow =
            "clipboard-write; encrypted-media; picture-in-picture";
          element.allowFullscreen = true;
          element.style.width = "100%";
          element.style.aspectRatio = "16 / 9";
          break;

        // ✨ Bodymovin / Lottie
        case "lottie":
          element = document.createElement("div");
          element.classList.add("lottie");

          lottie.loadAnimation({
            container: element,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: media.json,
          });
          break;

        default:
          console.warn("Unsupported media type:", media);
      }

      if (element) {
        assignment_container.append(element);
      }
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

    //append everything
    assignment_container.append(
      assignment_title,
      assignment_textContent,
      assignment_linkContainer,
    );

    content_container.append(assignment_container);
    // console.log(key, item);
  });
};
