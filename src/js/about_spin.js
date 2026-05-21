const aboutSection = document.querySelector('.about-home');
const aboutImage = document.querySelector('.about-home-img');
const canAnimateAboutImage =
  aboutSection &&
  aboutImage &&
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canAnimateAboutImage) {
  const repeatDelay = 5000;
  let spinInterval;

  const spinImage = () => {
    aboutImage.classList.remove('is-spinning');
    void aboutImage.offsetWidth;
    aboutImage.classList.add('is-spinning');
  };

  const stopSpin = () => {
    clearInterval(spinInterval);
    spinInterval = undefined;
    aboutImage.classList.remove('is-spinning');
  };

  const startSpin = () => {
    if (spinInterval) {
      return;
    }

    spinImage();
    spinInterval = setInterval(spinImage, repeatDelay);
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        startSpin();
      } else {
        stopSpin();
      }
    },
    { threshold: 0.35 }
  );

  observer.observe(aboutSection);
}
