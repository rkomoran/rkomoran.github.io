// Mobile nav toggle
document.getElementById('mobile-menu-btn')?.addEventListener('click', function () {
  document.getElementById('mobile-nav').classList.toggle('open');
});

// Frog chat bubble
(function () {
  const sounds = ['*ribbit*', '*croak*', '*brrp*', '*ribbit ribbit*', '*CROAK*', '*mrrp*', '*ribbit?*', '*...ribbit*'];

  let timer;

  function speak(bubble) {
    clearTimeout(timer);
    bubble.classList.remove('hide');
    bubble.classList.add('visible');
    bubble.textContent = sounds[Math.floor(Math.random() * sounds.length)];
    timer = setTimeout(function () {
      bubble.classList.add('hide');
      setTimeout(function () { bubble.classList.remove('visible', 'hide'); }, 300);
    }, 2000);
  }

  // Desktop fixed frog
  var frogCorner = document.querySelector('.frog-corner');
  var bubbleDesktop = document.getElementById('frog-bubble');
  if (frogCorner && bubbleDesktop) {
    frogCorner.style.pointerEvents = 'auto';
    frogCorner.style.cursor = 'pointer';
    frogCorner.addEventListener('click', function () { speak(bubbleDesktop); });
  }

  // Mobile in-flow frog
  var frogMobile = document.querySelector('.frog-corner-mobile img');
  var bubbleMobile = document.getElementById('frog-bubble-mobile');
  if (frogMobile && bubbleMobile) {
    frogMobile.style.cursor = 'pointer';
    frogMobile.style.webkitTapHighlightColor = 'transparent';
    frogMobile.addEventListener('click', function () { speak(bubbleMobile); });
  }
})();
