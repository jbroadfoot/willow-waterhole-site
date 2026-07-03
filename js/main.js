/* Willow Waterhole — shared behavior (build v3.0) */
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.nav-toggle');
  var ul = document.getElementById('nav-menu');
  if (btn && ul) {
    btn.addEventListener('click', function () {
      var open = ul.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
});
