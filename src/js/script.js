document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("progress");
  const label = document.querySelector("label[for='progress']");

  // Создаём элемент для отображения значения
  const valueDisplay = document.createElement("span");
  valueDisplay.classList.add("slider-value");
  valueDisplay.textContent = slider.value + " %";

  // Вставляем его сразу после label
  label.insertAdjacentElement("afterend", valueDisplay);

  // Обновляем значение при изменении слайдера
  slider.addEventListener("input", function () {
    valueDisplay.textContent = this.value + " %";
  });
});
