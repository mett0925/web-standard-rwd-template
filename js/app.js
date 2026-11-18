const topBtn = document.querySelector(".top");
const header = document.querySelector("#top");
let hideTimer;

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  topBtn.classList.toggle("show", window.scrollY > 100);
  header.classList.toggle("header-transparent", window.scrollY < 1);

  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    topBtn.classList.remove("show");
  }, 3000);
});

const tabs = document.querySelectorAll(".guide-tabs li ");
const contents = document.querySelectorAll(".guide-content li");

init(0);

function init(num) {
  tabs[num].classList.add("on");
  contents[num].classList.add("on");
}

function reset() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("on");
    contents[i].classList.remove("on");
  }
}

[tabs, contents].forEach(function (list) {
  list.forEach(function (item, i) {
    item.addEventListener("click", function () {
      reset();
      init(i);
    });
  });
});

const navBtn = document.querySelector(".mob-nav-btn");

function setNav(open) {
  document.body.classList.toggle("m-nav-open", open);
  navBtn.setAttribute("aria-expanded", open);
  navBtn.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
}

navBtn.addEventListener("click", function () {
  setNav(!document.body.classList.contains("m-nav-open"));
});

document.querySelectorAll("nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    setNav(false);
  });
});

const lightbox = document.querySelector(".photo-modal");
const lightboxImg = lightbox.querySelector("img");
const lightboxTxt = lightbox.querySelector("p");

function openLightbox(item) {
  const caption = item.querySelector("p").textContent;
  lightboxImg.src = getComputedStyle(item).backgroundImage.slice(5, -2);
  lightboxImg.alt = caption;
  lightboxTxt.textContent = caption;
  lightbox.showModal();
}

document.querySelectorAll(".photos li").forEach(function (item) {
  item.tabIndex = 0;
  item.setAttribute("role", "button");
  item.addEventListener("click", function () {
    openLightbox(item);
  });
  item.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLightbox(item);
    }
  });
});

const postModal = document.querySelector(".post-modal");
const postModalTitle = postModal.querySelector("h3");
const postModalBody = postModal.querySelector(".post-body");

document.querySelectorAll("#posts .more").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const info = link.closest(".info");
    postModalTitle.textContent = info.querySelector("h3").textContent;
    postModalBody.innerHTML = info.querySelector(".detail").innerHTML;
    postModalBody.scrollTop = 0;
    postModal.showModal();
  });
});

document.querySelectorAll("dialog.lightbox").forEach(function (dialog) {
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close();
  });
});

if (window.AOS) {
  AOS.init({
    duration: 800,
    once: false,
    disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  });
}

new Swiper(".gallery", {
  navigation: {
    nextEl: ".gallery .swiper-button-next",
    prevEl: ".gallery .swiper-button-prev",
  },
  loop: true,
});
