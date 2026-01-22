import { ui_elements } from "./_ui_elements.js";

export const export_carousel = function (
  arrow_left_body,
  arrow_right_body,
  image_container,
  mediaItems,
  dots_container,
) {
  if (!mediaItems || !mediaItems.length) return;

  //first setup
  let currentIndex = 0;
  const lastIndex = mediaItems.length - 1;
  let autoSlideInterval;

  function renderMedia(media) {
    let element;

    switch (media.type) {
      case "image":
        element = document.createElement("img");
        element.src = media.src;
        element.alt = media.alt || "";
        break;

      case "video":
        element = document.createElement("video");
        element.src = media.src;
        element.autoplay = true;
        element.loop = true;
        element.muted = true;
        element.playsInline = true;
        break;

      case "youtube":
        element = document.createElement("iframe");
        element.src = `https://www.youtube.com/embed/${media.id}`;
        element.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        element.allowFullscreen = true;
        element.style.width = "100%";
        element.style.aspectRatio = "16 / 9";
        break;

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
    }

    return element;
  }

  // Removes old content and replaces with current currentIndex content
  function updateCarousel() {
    image_container.innerHTML = "";
    image_container.append(renderMedia(mediaItems[currentIndex]));

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function nextImage() {
    currentIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1;
    updateCarousel();
  }

  function previousImage() {
    currentIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1;
    updateCarousel();
  }

  image_container.innerHTML = "";
  image_container.append(renderMedia(mediaItems[currentIndex]));

  dots_container.innerHTML = "";
  // Dots logic
  const dots = mediaItems.map((key, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
    dots_container.append(dot);
    return dot;
  });

  //Arrow next
  arrow_right_body.addEventListener("click", function () {
    nextImage();
    resetAutoSlide();
  });

  //Arrow previous
  arrow_left_body.addEventListener("click", function () {
    previousImage();
    resetAutoSlide();
  });

  //Auto run
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextImage, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Start auto slide on load
  // startAutoSlide();
};
