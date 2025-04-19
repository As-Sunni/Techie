"use strict";

const body = document.querySelector("body");
// const mySwiper = document.querySelector(".mySwiper");
//   mySwiper.setAttribute("slides-per-view", 3);

// function reduceSwiperSize() {
//   if (body.clientWidth <= 990) {
//     mySwiper.setAttribute("slides-per-view", 1);
//   } else {
//     mySwiper.setAttribute("slides-per-view", 1);
//   }
// }
// window.addEventListener("resize", reduceSwiperSize);

const btn = document.querySelector(".btn-box");
const nav = document.querySelector(".nav");

btn.addEventListener("click", function () {
  nav.classList.toggle("toggle");
});

const navi = document.querySelectorAll(".nav-list");
navi.forEach((s) =>
  s.addEventListener("click", function () {
    nav.classList.toggle("toggle");
  })
);

const tabButtons = document.querySelectorAll(".tab-button");
tabButtons.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".tab-content").forEach((tabContent) => {
      tabContent.classList.remove("show");
    });
    document.querySelectorAll(".tab-button").forEach((tabButton) => {
      tabButton.classList.remove("show");
    });

    document.querySelector(`.tab-content-${index + 1}`).classList.add("show");
    document.querySelector(`.tab-button-${index + 1}`).classList.add("show");
  });
});

