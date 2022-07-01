const canvas = document.querySelector("#draw");
canvas.width  = 750;
canvas.height = 500;
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 0;
let drawing = false;
let ix = 0;
let iy = 0;
let hue = 0;
let direc = false;

function display(e) {
  if (!drawing) return;
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.lineWidth = hue / 2;
  ctx.beginPath();
  ctx.moveTo(ix, iy);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ix = e.offsetX;
  iy = e.offsetY;
  // if (hue >= 360)
  //     hue = 0;
  // //hue = hue + 3;

  if (hue < 1 || hue > 359) {
    direc = !direc;
  }
  if (direc) {
    hue++;
  } else {
    hue--;
  }
}

canvas.addEventListener("mousemove", display);
canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  ix = e.offsetX;
  iy = e.offsetY;
});
canvas.addEventListener("mouseup", () => (drawing = false));
