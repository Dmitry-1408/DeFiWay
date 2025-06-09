"use strict";

const wrappers = document.querySelectorAll(".accordion__wrapper");

wrappers.forEach((wrapper) => {
  const button = wrapper.querySelector(".accordion__cross");

  button.addEventListener("click", () => {
    // Если нужно, чтобы только один блок открывался:
    wrappers.forEach((i) => {
      if (i !== wrapper) {
        i.classList.remove("active");
      }
    });

    wrapper.classList.toggle("active");
  });
});
