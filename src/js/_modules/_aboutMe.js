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

  const aboutMe_textContent = document.createElement("div");
  const aboutMe_textContent_p1 = document.createElement("p");
  aboutMe_textContent_p1.textContent =
    "Hoi, ik ben Mike — freelance multimedia vormgever. Ik werk graag aan uiteenlopende projecten en help bedrijven om hun ideeën te vertalen naar heldere en aantrekkelijke visuals. ";
  const aboutMe_textContent_p2 = document.createElement("p");
  aboutMe_textContent_p2.textContent =
    "Op zoek naar een vormgever die meedenkt en snel schakelt? Stuur gerust een bericht — ik denk graag met je mee.";
  aboutMe_textContent.append(aboutMe_textContent_p1, aboutMe_textContent_p2);

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
