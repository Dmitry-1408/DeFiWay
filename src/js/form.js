"use strict";

const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("emailInput");
const message = document.getElementById("formMessage");

function isValidEmail(email) {
  // Простая регулярка для проверки email
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Отключаем стандартную отправку формы

  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    message.textContent = "Введите корректный email.";
    message.classList.add("error");
    return;
  }

  // Очистка сообщений
  message.textContent = "";
  message.classList.remove("error");

  // Симуляция обработки
  console.log("Отправка email:", email);

  // Уведомление пользователя
  message.textContent = "Спасибо за подписку!";
  message.classList.remove("error");

  // Очистка поля
  emailInput.value = "";
});
