document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const closeBtn = lightbox ? lightbox.querySelector(".close") : null;

  // Click vào bất kỳ ảnh nào để phóng to bằng Lightbox
  document.querySelectorAll(".gallery-grid img, .hero-image-wrap img").forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      if (lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "Artwork";
        if (lightboxTitle) lightboxTitle.textContent = img.alt || "Artwork";
        lightbox.setAttribute("aria-hidden", "false");
        lightbox.classList.add("active");
      }
    });
  });

  // Đóng Lightbox
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.setAttribute("aria-hidden", "true");
      lightbox.classList.remove("active");
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.setAttribute("aria-hidden", "true");
        lightbox.classList.remove("active");
      }
    });
  }
});