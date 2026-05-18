/* CURSOR */

const cursor =
  document.querySelector(".cursor");

const blur =
  document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (e) => {

  cursor.style.left =
    e.clientX + "px";

  cursor.style.top =
    e.clientY + "px";

  blur.style.left =
    e.clientX + "px";

  blur.style.top =
    e.clientY + "px";

});

/* CURSOR HOVER */

const hoverItems =
  document.querySelectorAll("a, .btn");

hoverItems.forEach((item) => {

  item.addEventListener("mouseenter", () => {

    cursor.style.width = "24px";
    cursor.style.height = "24px";

  });

  item.addEventListener("mouseleave", () => {

    cursor.style.width = "14px";
    cursor.style.height = "14px";

  });

});

/* PRELOADER */

window.addEventListener("load", () => {

  const preloader =
    document.querySelector(".preloader");

  setTimeout(() => {

    preloader.classList.add("hide");

  }, 1000);

});

/* SCROLL INDICATOR */

window.addEventListener("scroll", () => {

  const scrollTop =
    document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent =
    (scrollTop / height) * 100;

  document.querySelector(
    ".scroll-indicator"
  ).style.width =
    scrollPercent + "%";

});

/* SCROLL ANIMATION */

const observer =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

});

const hiddenElements =
  document.querySelectorAll(
    ".about-card, .service-card, .process-item"
  );

hiddenElements.forEach((el) => {

  el.classList.add("hidden");

  observer.observe(el);

});

/* MOBILE MENU */

const menuBtn =
  document.getElementById("menuBtn");

const navLinks =
  document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

/* CLOSE MENU */

document.querySelectorAll(".nav-links a")
.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});