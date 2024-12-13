document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[loading='lazy']");
  
    images.forEach((img) => {
      img.onload = () => {
        img.classList.add("lazyloaded"); // Add the lazyloaded class when the image is fully loaded
      };
    });
  });
  