"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const slider = () => {
    const slider = document.querySelector(".slider");
    const sliderContentItems = slider.querySelectorAll(".slider__content-item");
    const sliderBreadcrumbsItems = slider.querySelectorAll(
      ".slider__breadcrumbs-item"
    );
    const leftBtn = slider.querySelector(".slider__buttons-btn--left");
    const rightBtn = slider.querySelector(".slider__buttons-btn--right");
    let activeSlider = 0;

    sliderBreadcrumbsItems.forEach((breadcrumb) => {
      breadcrumb.addEventListener("click", (e) => {
        const dataAtr = e.target.closest("li").getAttribute("data-slider");
        sliderContentItems.forEach((slider, i) => {
          if (slider.getAttribute("data-slider") === dataAtr) {
            activeSlider = i;
            slider.classList.add("show");
          } else {
            slider.classList.remove("show");
          }
        });
      });
    });

    leftBtn.addEventListener("click", () => {
      if (activeSlider === 0) {
        activeSlider = sliderContentItems.length - 1;
      } else {
        activeSlider--;
      }
      sliderContentItems.forEach((slider, i) => {
        slider.classList.remove("show");
      });
      sliderContentItems[activeSlider].classList.add("show");
    });

    rightBtn.addEventListener("click", () => {
      if (activeSlider === sliderContentItems.length - 1) {
        activeSlider = 0;
      } else {
        activeSlider++;
      }
      sliderContentItems.forEach((slider, i) => {
        slider.classList.remove("show");
      });
      sliderContentItems[activeSlider].classList.add("show");
    });
  };

  slider();
});
