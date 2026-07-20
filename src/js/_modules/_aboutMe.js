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
    "Hoi, ik ben Mike, freelance multimedia vormgever. Ik help bedrijven om hun ideeën te vertalen naar heldere en aantrekkelijke visuals. ";
  const aboutMe_textContent_p2 = document.createElement("p");
  aboutMe_textContent_p2.textContent =
    "Op zoek naar een vormgever die meedenkt en snel schakelt? Stuur gerust een bericht, ik denk graag met je mee.";
  const aboutMe_textContent_p3 = document.createElement("p");
  aboutMe_textContent_p3.textContent = "Bekijk ook mijn ";

  const behanceLink = document.createElement("a");
  behanceLink.classList.add("extraLinks");
  behanceLink.href = "https://www.behance.net/mikeottenhoff";
  behanceLink.target = "_blank";
  behanceLink.rel = "noopener noreferrer";
  behanceLink.textContent = "Behance";

  const soundcloudLink = document.createElement("a");
  soundcloudLink.classList.add("extraLinks");
  soundcloudLink.href = "https://soundcloud.com/mike-ottenhoff";
  soundcloudLink.target = "_blank";
  soundcloudLink.rel = "noopener noreferrer";
  soundcloudLink.textContent = "SoundCloud";

  aboutMe_textContent_p3.appendChild(behanceLink);
  aboutMe_textContent_p3.append(" en ");
  aboutMe_textContent_p3.appendChild(soundcloudLink);
  aboutMe_textContent_p3.append(
    " voor meer van mijn creatieve werk en persoonlijke projecten.",
  );

  aboutMe_textContent.append(
    aboutMe_textContent_p1,
    aboutMe_textContent_p2,
    aboutMe_textContent_p3,
  );

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
