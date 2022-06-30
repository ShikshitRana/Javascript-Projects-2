function time() {
  let today = new Date();

  let secs = today.getSeconds();
  let secsDeg = secs * 6;
  let secsHa = document.querySelector(".second-hand");
  secsHa.style.transform = "rotate(" + secsDeg + "deg)";

  let min = today.getMinutes();
  let minDeg = min * 6 + secs * (360 / 3600);
  let minHa = document.querySelector(".minute-hand");
  minHa.style.transform = "rotate(" + minDeg + "deg)";

  let hour = today.getHours();
  let hourDeg = hour * 30 + min * (360 / 720);
  let hourHa = document.querySelector(".hour-hand");
  hourHa.style.transform = "rotate(" + hourDeg + "deg)";
}

setInterval("time()", 1000);
