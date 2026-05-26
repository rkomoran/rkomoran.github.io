// Frog explosion easter egg
(function () {
  var gifs = [
    'assets/images/frog.gif',
    'assets/images/frog-jump.gif',
    'assets/images/frog-chonk.gif',
    'assets/images/frog-pixel.gif',
    'assets/images/200w.gif',
    'assets/images/ppfrog-pog-ppfrog.gif',
    'assets/images/tumblr_3f7ad0edea8bc95c5efd8e11fa75252f_5c40ad82_500.gif',
    'assets/images/tumblr_pptw6ud4je1qksv0l_540.gif',
  ];

  var prefix = (function () {
    var s = document.querySelector('script[src*="assets/js/main.js"]');
    if (s) { var m = s.src.match(/^(.*?)assets\/js\/main\.js/); if (m) return m[1]; }
    return '';
  })();

  var clickCount = 0;

  function explode() {
    var frogs = [];
    var count = window.innerWidth < 600 ? 15 : 30;
    for (var i = 0; i < count; i++) {
      var img = document.createElement('img');
      img.src = prefix + gifs[Math.floor(Math.random() * gifs.length)];
      var size = 40 + Math.floor(Math.random() * 80);
      img.style.cssText = [
        'position:fixed',
        'z-index:9999',
        'pointer-events:none',
        'width:' + size + 'px',
        'height:auto',
        'image-rendering:pixelated',
        'left:' + Math.random() * 95 + 'vw',
        'top:' + Math.random() * 90 + 'vh',
        'opacity:0',
        'transition:opacity .3s ease',
        'transform:rotate(' + (Math.random() * 40 - 20) + 'deg)',
      ].join(';');
      document.body.appendChild(img);
      frogs.push(img);
      setTimeout(function (el) { el.style.opacity = '1'; }, 20, img);
    }
    setTimeout(function () {
      frogs.forEach(function (el) { el.style.opacity = '0'; });
      setTimeout(function () { frogs.forEach(function (el) { el.remove(); }); }, 400);
    }, 2500);
  }

  window._frogClickCount = 0;
  window._addFrogClick = function () {
    window._frogClickCount++;
    if (window._frogClickCount >= 10) {
      window._frogClickCount = 0;
      explode();
    }
  };
})();

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
    frogCorner.addEventListener('click', function () { speak(bubbleDesktop); window._addFrogClick(); });
  }

  // Mobile in-flow frog
  var frogMobile = document.querySelector('.frog-corner-mobile img');
  var bubbleMobile = document.getElementById('frog-bubble-mobile');
  if (frogMobile && bubbleMobile) {
    frogMobile.style.cursor = 'pointer';
    frogMobile.style.webkitTapHighlightColor = 'transparent';
    frogMobile.addEventListener('click', function () { speak(bubbleMobile); window._addFrogClick(); });
  }
})();
