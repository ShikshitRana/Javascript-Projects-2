const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function toggleplay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton(e) {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skipping() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function toggleRanges() {
  video[this.name] = this.value;
}

function handleProgress() {
  let progres = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progres}%`;
}

function handleScrubbing(e) {
  let scrubTime = e.offsetX / progress.offsetWidth;
  video.currentTime = video.duration * scrubTime;

  // const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  // video.currentTime = scrubTime;
}

video.addEventListener("click", toggleplay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", toggleplay);
skipButtons.forEach((e) => e.addEventListener("click", skipping));
ranges.forEach((e) => e.addEventListener("change", toggleRanges));

let mousedown = false;
progress.addEventListener("click", handleScrubbing);
progress.addEventListener("mousemove", (e) => mousedown && handleScrubbing(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
