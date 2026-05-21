const heroImage = document.querySelector('.hero-home-img-animated');
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (heroImage && !prefersReducedMotion) {
  const heroImages = [
    './img/home/Mask_Group.jpg',
    './img/home/dish_1.jpg',
    './img/home/dish_2.jpg',
    './img/home/dish_3.jpg',
    './img/home/dish_4.jpg',
    './img/home/gallery_1.jpg',
    './img/home/gallery_2.jpg',
  ];
  const imageChangeDelay = 4200;
  const fadeDuration = 900;
  let currentImageIndex = 0;

  heroImages.slice(1).forEach(src => {
    const image = new Image();
    image.src = src;
  });

  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    heroImage.classList.add('is-changing');

    setTimeout(() => {
      heroImage.src = heroImages[currentImageIndex];
      heroImage.classList.remove('is-changing');
    }, fadeDuration);
  }, imageChangeDelay);
}
