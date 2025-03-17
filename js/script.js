document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      menu.classList.toggle("active");
      burger.classList.toggle("active");
      document.body.classList.toggle("no-scroll"); // Блокируем скролл при открытом меню
    });

    // Закрытие меню при клике вне его
    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !burger.contains(event.target)) {
        menu.classList.remove("active");
        burger.classList.remove("active");
        document.body.classList.remove("no-scroll");
      }
    });
  }
});
