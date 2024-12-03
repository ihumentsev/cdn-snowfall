// snowfall.js
const canvas = document.createElement("canvas");
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "9999";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const scriptTag = document.querySelector("script[data-flake]");
const flakeType = scriptTag ? scriptTag.getAttribute("data-flake") : "default";
console.log(flakeType);

const snowflakes = [];
const numberOfSnowflakes = 100;

for (let i = 0; i < numberOfSnowflakes; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size:
      flakeType === "circle" ? Math.random() * 5 + 2 : Math.random() * 16 + 2,
    speedY: Math.random() * 1 + 0.5,
    speedX: Math.random() * 0.5,
    opacity: Math.random() * 0.8 + 0.2,
    type: flakeType, // Указываем тип снежинки
  });
}

function updateSnowflake(flake) {
  flake.y += flake.speedY;
  flake.x += Math.sin(flake.y / 50) * flake.speedX;

  if (flake.y > canvas.height) {
    flake.y = -flake.size;
    flake.x = Math.random() * canvas.width;
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach((flake) => {
    updateSnowflake(flake);

    // Проверка на тип снежинки и отрисовка соответствующего типа
    if (flake.type === "snowflake") {
      ctx.font = `${flake.size}px Arial`;
      ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
      // Добавление тени
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)"; // Цвет тени
      ctx.shadowBlur = 3; // Размытие тени
      ctx.shadowOffsetX = 1; // Смещение тени по горизонтали
      ctx.shadowOffsetY = 1; // Смещение тени по вертикали
      ctx.fillText("❄", flake.x, flake.y); // Символ снежинки
    } else if (flake.type === "circle") {
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
      // Добавление тени
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)"; // Цвет тени
      ctx.shadowBlur = 3; // Размытие тени
      ctx.shadowOffsetX = 1; // Смещение тени по горизонтали
      ctx.shadowOffsetY = 1; // Смещение тени по вертикали
      ctx.fill();
    } else if (flake.type === "star") {
      // Для звездочки рисуем звезду
      ctx.font = `${flake.size}px Arial`;
      ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
      // Добавление тени
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)"; // Цвет тени
      ctx.shadowBlur = 3; // Размытие тени
      ctx.shadowOffsetX = 1; // Смещение тени по горизонтали
      ctx.shadowOffsetY = 1; // Смещение тени по вертикали
      ctx.fillText("★", flake.x, flake.y);
    }
  });

  requestAnimationFrame(drawSnowflakes);
}

drawSnowflakes();
