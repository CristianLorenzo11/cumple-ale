document.addEventListener('DOMContentLoaded', () => {
  const welcomeModal = document.getElementById('welcome-modal');
  const verBtn = document.getElementById('ver-btn');
  const introContainer = document.getElementById('intro-container');
  const introVideo = document.getElementById('intro-video');
  const capitulo31 = document.getElementById('capitulo31-container');
  const finalContainer = document.getElementById('final-container');
  const finalVideo = document.getElementById('video-segment'); // ← ID corregido
  const videoSource = document.getElementById('video-source');
  const finalModal = document.getElementById('final-modal');

  // Lista de videos en el orden deseado (en el mismo directorio que el HTML)
  const videoList = [
    
    "V13.mp4",
    "V14.mp4",
    "V16.mp4",
    "V15.mp4"
  ];

  let currentIndex = 0;

  function playSegment(index) {
    if (index < videoList.length) {
      videoSource.src = videoList[index];
      finalVideo.load();
      finalVideo.play();
    } else {
      finalContainer.classList.add('hidden');
      finalModal.classList.remove('hidden');
    }
  }

finalVideo.addEventListener('ended', () => {
  const circle = document.getElementById('circle-transition');
  circle.classList.add('active');

  setTimeout(() => {
    circle.classList.remove('active');

    currentIndex++;
    playSegment(currentIndex);
  }, 1000); // tiempo de duración del efecto
});

  verBtn.addEventListener('click', () => {
    welcomeModal.classList.add('hidden');
    introContainer.classList.remove('hidden');
    introVideo.play();
  });

  introVideo.addEventListener('ended', () => {
    introContainer.classList.add('fade-out');

    setTimeout(() => {
      introContainer.classList.add('hidden');
      introContainer.classList.remove('fade-out');

      capitulo31.classList.remove('hidden');
      capitulo31.classList.remove('fade-out');

      setTimeout(() => {
        capitulo31.classList.add('fade-out');

        setTimeout(() => {
          capitulo31.classList.add('hidden');
          capitulo31.classList.remove('fade-out');

          finalContainer.classList.remove('hidden');
          playSegment(currentIndex);
        }, 1000); // fade-out duración capítulo
      }, 5000); // duración visible del capítulo 31
    }, 1000); // fade-out intro
  });
});
