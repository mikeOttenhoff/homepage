import { ui_elements } from "./_ui_elements.js";

export const export_carousel = function (
  arrow_left_body,
  arrow_right_body,
  image_container,
  images,
  dots_container
) {
  // const {
  //   arrow_left_body,
  //   arrow_right_body,
  //   image_container,
  //   images,
  //   dots_container,
  // } = ui_elements();

  if (!images || !images.length) return;

  //first setup
  let currentIndex = 0;
  const firstElement = 0;
  const lastElement = images.length - 1;
  let autoSlideInterval;

  image_container.innerHTML = "";
  image_container.append(images[currentIndex]);

  dots_container.innerHTML = "";
  // Dots logic
  const dots = images.map((key, index) => {
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

  // Removes old content and replaces with current currentIndex content
  function updateCarousel() {
    image_container.innerHTML = "";
    image_container.append(images[currentIndex]);

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  const nextImage = function () {
    if (currentIndex >= lastElement) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateCarousel();
  };

  const previousImage = function () {
    if (currentIndex <= firstElement) {
      currentIndex = lastElement;
    } else {
      currentIndex--;
    }
    updateCarousel();
  };

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
  startAutoSlide();
};
