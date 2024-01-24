const widget = document.querySelector(".widget");
const backgroundColor = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", () => {
  const newBackgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = newBackgroundColor;
  backgroundColor.textContent = newBackgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}