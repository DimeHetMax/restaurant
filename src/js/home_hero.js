const heroImage = document.querySelector('.hero-home-img-animated');
const backWelcomeTitle = document.querySelector('.back-welcome');

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const welcomeGreetings = [
  'Welcome',
  'Bienvenido',
  'Bienvenue',
  'Willkommen',
  'Benvenuto',
  'Bem-vindo',
  'Welkom',
  'Witamy',
  'Ласкаво просимо',
  'Vítejte',
  'Vitajte',
  'Velkommen',
  'Välkommen',
  'Tervetuloa',
  'Tere tulemast',
  'Laipni lūdzam',
  'Sveiki atvykę',
  'Dobrodošli',
  'Bine ați venit',
  'Καλώς ήρθατε',
  'Fáilte',
  'Croeso',
];

if (heroImage && !prefersReducedMotion) {
  const heroImages = [
    new URL('../img/home/Mask_Group.jpg', import.meta.url).href,
    new URL('../img/home/dish_1.jpg', import.meta.url).href,
    new URL('../img/home/dish_2.jpg', import.meta.url).href,
    new URL('../img/home/dish_3.jpg', import.meta.url).href,
    new URL('../img/home/dish_4.jpg', import.meta.url).href,
    new URL('../img/home/gallery_1.jpg', import.meta.url).href,
    new URL('../img/home/gallery_2.jpg', import.meta.url).href,
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

const updateWelcomeWord = arr => {
  if (!backWelcomeTitle || arr.length === 0) {
    return;
  }

  let wordIndex = 0;

  setInterval(() => {
    wordIndex = (wordIndex + 1) % arr.length;
    backWelcomeTitle.classList.add('is-changing');
    setTimeout(() => {
      backWelcomeTitle.textContent = arr[wordIndex];
      backWelcomeTitle.classList.remove('is-changing');
    }, 500);
  }, 2000);
};
if(backWelcomeTitle){
  updateWelcomeWord(welcomeGreetings);
}

