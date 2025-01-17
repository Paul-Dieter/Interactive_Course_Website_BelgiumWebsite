const track = document.getElementById("image-track");
const images = track.querySelectorAll(".image");

const totalWidth = Array.from(images).reduce((acc, image) => acc + image.clientWidth, 0);

let startPosition = 0;
let autoMoveInterval;
let direction = -1; // 1 for forward, -1 for backward
const scrollSpeed = 0.9; // Adjust this value to control the speed of scrolling
const changeDirectionInterval = 7000; // Interval to change direction (in milliseconds)

const handleOnDown = e => {
  // set dragging if we want
  track.dataset.mouseDownAt = e.clientX;
  track.dataset.isDragging = "true";
  clearInterval(autoMoveInterval);
};

const handleOnUp = () => {
  if (track.dataset.isDragging === "true") {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
    track.dataset.isDragging = "false";
    startAutoMove();
  }
};

const handleOnMove = e => {
  if (track.dataset.mouseDownAt === "0" || track.dataset.isDragging !== "true") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });

  for (const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
};

const autoMove = () => {
  startPosition += scrollSpeed * direction;

  if (Math.abs(startPosition) >= totalWidth) {
    startPosition = 0;
  }

  track.style.transform = `translate(${startPosition}px, -50%)`;

  for (const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${100 + (startPosition / totalWidth) * 100}% center`;
  }
};

const startAutoMove = () => {
  autoMoveInterval = setInterval(autoMove, 16); // Adjust the interval as needed
  setInterval(() => {
    direction *= -1; // Reverse the direction
  }, changeDirectionInterval);
};

// Attach global event listeners for mouseup and mousemove
window.addEventListener("mouseup", handleOnUp);
window.addEventListener("touchend", e => handleOnUp(e.touches[0]));
window.addEventListener("mousemove", handleOnMove);
window.addEventListener("touchmove", e => handleOnMove(e.touches[0]));

// Start auto movement
startAutoMove();
