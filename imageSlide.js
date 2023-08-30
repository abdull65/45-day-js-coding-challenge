const sliderImgEl = document.querySelector(".imageBox img");
let currentImageIndex = 0;
let imageGalleryArr = [
  "./images/photo-1.jpg",
  "./images/photo-2.jpg",
  "./images/photo-3.jpg",
  "./images/photo-4.jpg",
  "./images/photo-5.jpg",
  "./images/photo-6.png",
  "./images/photo-7.png",
  "./images/photo-8.jpg",
  "./images/photo-9.jpg",
  "./images/photo-10.jpg",
];

const showCurrentImage = function () {
  const currentImage = imageGalleryArr.slice(
    currentImageIndex,
    currentImageIndex + 1
  );
  sliderImgEl.src = currentImage[0];
};
const nextSlide = function () {
  currentImageIndex = (currentImageIndex + 1) % imageGalleryArr.length;
  showCurrentImage();
  console.log(currentImageIndex);
};
const prevSlide = function () {
  currentImageIndex = currentImageIndex =
    (currentImageIndex - 1 + imageGalleryArr.length) % imageGalleryArr.length;
  console.log(currentImageIndex);
  showCurrentImage();
};

document.querySelector("#nextBtn").addEventListener("click", () => {
  nextSlide();
});
document.querySelector("#prevBtn").addEventListener("click", () => {
  prevSlide();
});
const autoSLideFunc = function () {
  setInterval(() => {
    showCurrentImage();
    nextSlide();
  }, 4000);
};
autoSLideFunc();
showCurrentImage();
