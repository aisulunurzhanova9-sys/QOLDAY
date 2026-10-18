const translations = {
  kk: {
    title: "QOLDAU",
    subtitle: "Сізге әрдайым қолдау бар",
    home: "Басты бет",
    interpreter: "Аудармашыны шақыру",
    available: "Аудармашы бос",
    busy: "Аудармашы бос емес",
    call: "Бейнеқоңырау бастау",
    help: "Көмек",
    reviews: "Пікірлер",
    demo: "Бұл демонстрациялық прототип. Нақты қоңырау қосылмаған."
  },
  ru: {
    title: "QOLDAU",
    subtitle: "Поддержка всегда рядом",
    home: "Главная",
    interpreter: "Вызвать переводчика",
    available: "Переводчик свободен",
    busy: "Переводчик занят",
    call: "Начать видеозвонок",
    help: "Помощь",
    reviews: "Отзывы",
    demo: "Это демонстрационный прототип. Реальный звонок не подключён."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const languageButtons = document.querySelectorAll("[data-lang]");
  languageButtons.forEach(button => {
    button.addEventListener("click", () => {
      const language = button.dataset.lang;
      document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (translations[language] && translations[language][key]) {
          element.textContent = translations[language][key];
        }
      });
    });
  });

  document.querySelectorAll("[data-demo-call]").forEach(button => {
    button.addEventListener("click", () => {
      alert(translations.kk.demo);
    });
  });
});
