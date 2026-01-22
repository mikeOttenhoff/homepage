// import { carousel_items } from "./_carousel_img.js";
import arrowleft from "@img/arrow_left.svg";
import arrowRight from "@img/arrow_right.svg";

export const ui_elements = function (
  container = document.body,
  mediaItems = [],
) {
  // const body = document.body;

  //Main container
  const carousel_body = document.createElement("div");
  carousel_body.classList.add("carousel_body");

  //left Arrow
  const arrow_left_body = document.createElement("div");
  arrow_left_body.classList.add("arrow_left");
  const arrow_left = document.createElement("img");
  arrow_left.src = arrowleft;
  arrow_left_body.append(arrow_left);

  //right arrow
  const arrow_right_body = document.createElement("div");
  arrow_right_body.classList.add("arrow_right");
  const arrow_right = document.createElement("img");
  arrow_right.src = arrowRight;
  arrow_right_body.append(arrow_right);

  // container in which the image will be placed
  const image_container = document.createElement("div");
  image_container.classList.add("image_container");

  //container for navigational dots in the bottom
  const dots_container = document.createElement("div");
  dots_container.classList.add("dots_container");

  // // Images made from carousel_img list
  // const images = imagesData.map(function (e) {
  //   const image = document.createElement("img");
  //   image.src = e.link;
  //   image.alt = e.alt || "";
  //   // image_container.append(image);
  //   return image;
  // });

  carousel_body.append(
    arrow_left_body,
    arrow_right_body,
    image_container,
    dots_container,
  );
  container.append(carousel_body);

  return {
    arrow_left_body,
    arrow_right_body,
    image_container,
    mediaItems,
    dots_container,
  };
};
