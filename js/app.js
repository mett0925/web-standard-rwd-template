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
