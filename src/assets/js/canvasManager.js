const borderWidth = 40;
const speed = 14;
const initDate = new Date();

const homeBgColor = '#1c4966';

let xpos = 0;
let ypos = 0;
let xoff = 0;
let yoff = 0;
let toff = 0;
let t = 0;
let transition = 0;
let animRequest = null;

const loopOffset = 100;

export function init(canvas, bg, bgOutline) {
  renderCanvas(home, canvas, bg, bgOutline);
}

export function transitionToPortfolio(canvas, bg, bgOutline) {
  renderTransition(home, null, canvas, bg, bgOutline);
}

export function transitionToHome(canvas, bg, bgOutline) {
  renderTransition(null, home, canvas, bg, bgOutline);
}

function renderCanvas(renderMethod, canvas, bg, bgOutline) {
  if(animRequest) window.cancelAnimationFrame(animRequest);
  window.addEventListener('resize', updateSize, false);
  function updateSize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }

  canvas.addEventListener('mousemove', function(e) {
    xpos = e.clientX;
    ypos = e.clientY;
  });

  bg.onload = function() {
    draw();
  }

  function draw() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);

    renderMethod(canvas, bg, bgOutline);

    animRequest = window.requestAnimationFrame(draw);
  }

  updateSize();
  draw();
}

function renderTransition(from, to, canvas, bg, bgOutline) {
  if(animRequest) window.cancelAnimationFrame(animRequest);
  window.addEventListener('resize', updateSize, false);
  function updateSize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }

  canvas.addEventListener('mousemove', function(e) {
    xpos = e.clientX;
    ypos = e.clientY;
  });

  const transitionInitDate = new Date();

  function draw() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(to) to(canvas, bg, bgOutline);

    // Begin drawing new page in clip
    ctx.save();

    wipe(transitionInitDate, ctx, canvas);

    if(from) from(canvas, bg, bgOutline);

    ctx.restore();

    animRequest = window.requestAnimationFrame(draw);
  }

  updateSize();
  draw();
}

function home(canvas, bg, bgOutline) {
  const ctx = canvas.getContext('2d');

  xoff = -(canvas.width/2 - xpos) / 15;
  yoff = -(canvas.height/2 - ypos) / 15;

  toff = (new Date() - initDate) % (((canvas.height * 2) - loopOffset) * speed) / speed;

  ctx.fillStyle = homeBgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(bg, xoff/2, yoff/2 - toff, canvas.width, canvas.height * 2);
  ctx.drawImage(bgOutline, xoff, yoff - toff, canvas.width, canvas.height * 2);

  ctx.drawImage(bg, xoff/2, yoff/2 - toff + canvas.height * 2 - loopOffset, canvas.width, canvas.height * 2);
  ctx.drawImage(bgOutline, xoff, yoff - toff + canvas.height * 2 - loopOffset, canvas.width, canvas.height * 2);

  drawBorder(ctx, canvas);
}

function wipe(transitionInitDate, ctx, canvas) {
  if(new Date() - transitionInitDate < 3000){
    t = (new Date() - transitionInitDate) / 200;
    transition = t*t*t;
  } else {
    transition = canvas.width + 600;
  }

  let region = new Path2D();
  region.rect(transition,       0,                       canvas.width,       canvas.height / 4);
  region.rect(transition - 200, canvas.height / 4,       canvas.width + 200, (canvas.height / 4) * 2);
  region.rect(transition - 400, (canvas.height / 4) * 2, canvas.width + 400, (canvas.height / 4) * 3);
  region.rect(transition - 600, (canvas.height / 4) * 3, canvas.width + 600, canvas.height);
  ctx.clip(region);
}

function drawBorder(ctx, canvas) {
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, borderWidth);
  ctx.fillRect(0, borderWidth, borderWidth, canvas.height);
  ctx.fillRect(canvas.width-borderWidth, 0, canvas.width, canvas.height);
  ctx.fillRect(0, canvas.height-borderWidth, canvas.width, borderWidth);
}

export function clearAnimation(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  window.cancelAnimationFrame(animRequest);
}