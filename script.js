document.addEventListener("DOMContentLoaded", () => {

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const closeBtn = lightbox
    ? lightbox.querySelector(".close")
    : null;

  // Không có lightbox thì dừng
  if (!lightbox || !lightboxImg) return;


  /* =========================
     MỞ LIGHTBOX
  ========================= */

  const galleryImages = document.querySelectorAll(
    ".gallery-grid img, .hero-image-wrap img"
  );

  galleryImages.forEach((img) => {

    img.style.cursor = "pointer";

    img.addEventListener("click", () => {

      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt || "Artwork";

      if (lightboxTitle) {
        lightboxTitle.textContent = img.alt || "Artwork";
      }

      lightbox.classList.add("active");
      lightbox.setAttribute("aria-hidden", "false");

      // Không cho cuộn trang phía sau
      document.body.style.overflow = "hidden";
    });

  });


  /* =========================
     ĐÓNG LIGHTBOX
  ========================= */

  function closeLightbox() {

    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    // Xóa ảnh sau khi đóng để nhẹ hơn
    setTimeout(() => {
      if (!lightbox.classList.contains("active")) {
        lightboxImg.src = "";
      }
    }, 250);
  }


  // Nút X
  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }


  // Click ra ngoài ảnh
  lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
      closeLightbox();
    }

  });


  // Nhấn ESC để đóng
  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" &&
      lightbox.classList.contains("active")) {

      closeLightbox();
    }

  });

});