import fotoMike from "../../img/mikeOttenhoff.png";

export const aboutMe = function () {
  const aboutMe = document.querySelector(".aboutMe");

  //container
  const aboutMe_container = document.createElement("div");
  aboutMe_container.classList.add("aboutMe_container");

  // photo
  const aboutMe_photo = document.createElement("img");
  aboutMe_photo.src = fotoMike;
  aboutMe_photo.alt = "Foto Mike Ottenhoff, audiovisueel vormgever";

  // text
  const aboutMe_textContainer = document.createElement("div");
  aboutMe_textContainer.classList.add("aboutMe_textContainer");

  const aboutMe_title = document.createElement("h2");
  aboutMe_title.textContent = "Over Mij";

  const aboutMe_textContent = document.createElement("p");
  aboutMe_textContent.textContent =
    "Mijn naam is Mike en ik ben freelance multimediavormgever. Met ruim 10 jaar vormgeef ervaring die alle richtingen opgaat kan ik je zeker helpen. Hieronder vindt je wat van mijn meest recente werk.";

  const aboutMe_contactBtn = document.createElement("a");
  aboutMe_contactBtn.href = "mailto:mikeottenhoff@outlook.com";
  aboutMe_contactBtn.textContent = "Neem contact op";
  aboutMe_contactBtn.classList.add("aboutMe_contactBtn");

  // append
  aboutMe_textContainer.append(
    aboutMe_title,
    aboutMe_textContent,
    aboutMe_contactBtn,
  );
  aboutMe_container.append(aboutMe_photo, aboutMe_textContainer);
  aboutMe.append(aboutMe_container);
};
