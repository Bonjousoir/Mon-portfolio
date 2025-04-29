
const music = new Audio('Josman - Babygirl (Lyrics).mp3');
const musicToggle = document.getElementById('music-toggle');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    musicToggle.textContent = '⏸️ Pause';
    isPlaying = true;
  } else {
    music.pause();
    musicToggle.textContent = '🎵 Musique';
    isPlaying = false;
  }
});

// 🎨 Changement de thème
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ✨ Canvas animé
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 2 + 1,
  speedX: Math.random() * 1 - 0.5,
  speedY: Math.random() * 1 - 0.5
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fill();
    
    p.x += p.speedX;
    p.y += p.speedY;
    
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  });
  
  requestAnimationFrame(animate);
}

animate();
