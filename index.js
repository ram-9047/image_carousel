const images = document.getElementById("imgs");

const allImages = document.querySelectorAll("#imgs img");
let index = 0;
function run() {
  index++;
  if (index > allImages.length - 1) {
    index = 0;
  }

  images.style.transform = `translateX(${-index * 500}px)`;
}

setInterval(run, 2000);
// run();
