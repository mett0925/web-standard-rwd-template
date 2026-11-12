const topBtn = document.querySelector(".top");
let hideTimer;
topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  topBtn.classList.toggle("show", window.scrollY > 100);

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
