const button = document.querySelector(" button.change-color");
const spanColor = document.querySelector(".color");
const widget = document.querySelector(".widget");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    widget.style.backgroundColor = randomColor;
    spanColor.textContent = randomColor;
});