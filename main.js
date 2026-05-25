// Mobile nav toggle
document.getElementById('mobile-menu-btn')?.addEventListener('click', function () {
  document.getElementById('mobile-nav').classList.toggle('open');
});

// Frog chat bubble
(function () {
  const sounds = ['*ribbit*', '*croak*', '*brrp*', '*ribbit ribbit*', '*CROAK*', '*mrrp*', '*ribbit?*', '*...ribbit*'];
  const bubble = document.getElementById('frog-bubble');
  if (!bubble) return;

  let timer;

  function speak() {
    clearTimeout(timer);
    bubble.classList.remove('hide');
    bubble.classList.add('visible');
    bubble.textContent = sounds[Math.floor(Math.random() * sounds.length)];
    timer = setTimeout(function () {
      bubble.classList.add('hide');
      setTimeout(function () { bubble.classList.remove('visible', 'hide'); }, 300);
    }, 2000);
  }

  const frogCorner = document.querySelector('.frog-corner');
  if (frogCorner) {
    frogCorner.style.pointerEvents = 'auto';
    frogCorner.style.cursor = 'pointer';
    frogCorner.addEventListener('click', speak);
  }

  const frogMobile = document.querySelector('.frog-corner-mobile img');
  if (frogMobile) {
    frogMobile.style.cursor = 'pointer';
    frogMobile.style.webkitTapHighlightColor = 'transparent';
    frogMobile.addEventListener('click', speak);
  }
})();
