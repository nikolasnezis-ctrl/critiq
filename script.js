let score = 0;
const target = document.getElementById("target");

function move() {
  target.style.left = Math.random() * (innerWidth - 80) + "px";
  target.style.top = Math.random() * (innerHeight - 80) + "px";
}

target.onclick = () => {
  score++;
  document.getElementById("score").textContent = score;
  move();
};

move();
