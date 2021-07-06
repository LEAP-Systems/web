export function genConnectedDots(network) {
  // Draw the scene
  var canvas = document.getElementById(network)
  var ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const FPS = 60; // Frames per second
  var stars = [], // Array that contains the stars
    mouse = {
      x: 0,
      y: 0,
    }; // mouse location

  // Push stars to array

  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1 + 1,
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "lighter";
    for (let i = 0; i < stars.length; i++) {
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(stars[i].x, stars[i].y, stars[i].radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = "black";
      ctx.stroke();
    }

    ctx.beginPath();
    for (let i = 0; i < stars.length; i++) {
      var starI = stars[i];
      ctx.moveTo(starI.x, starI.y);
      if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
      for (var j = 0; j < stars.length; j++) {
        var starII = stars[j];
        if (distance(starI, starII) < 150) {
          //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
          ctx.lineTo(starII.x, starII.y);
        }
      }
    }
    ctx.lineWidth = 0.05;
    ctx.strokeStyle = "white";
    ctx.stroke();
  }

  function distance(point1, point2) {
    return Math.sqrt((point2.x - point1.x)**2 + (point2.y - point1.y)**2);
  }

  // Update star locations

  function update() {
    for (var i = 0, x = stars.length; i < x; i++) {
      var s = stars[i];

      s.x += s.vx / FPS;
      s.y += s.vy / FPS;

      if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
      if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
    }
  }

  canvas.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Update and draw

  function tick() {
    draw();
    update();
    requestAnimationFrame(tick);
  }

  tick();
}
