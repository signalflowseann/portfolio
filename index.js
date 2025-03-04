const HEADER_HEIGHT = 60;

window.addEventListener('scroll', function() {
  const { scrollY } = window;
  this.document.querySelector('header').classList.toggle('darken-header', scrollY > HEADER_HEIGHT);
});