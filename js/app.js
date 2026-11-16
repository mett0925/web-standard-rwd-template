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
