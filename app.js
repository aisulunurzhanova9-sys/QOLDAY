const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const text = {
  kk: {
    navHome:"Басты бет", navTranslator:"Аудармашы",
    navHelp:"Көмек", navReviews:"Пікірлер",
    eyebrow:"АҚТӨБЕ · ҚАЗАҚША / РУССКИЙ",
    heroTitle:"Сізге көмектесуге дайынбыз!",
    heroText:"Ымдау тілі аудармашысымен байланысыңыз немесе қажетті көмекті таңдаңыз.",
    callTranslator:"Онлайн аудармашыны шақыру",
    translatorStatus:"Аудармашының мәртебесі",
    available:"Аудармашы бос", busy:"Аудармашы бос емес",
    demoMode:"Демо режимі", quickActions:"Жылдам әрекеттер",
    videoCall:"Бейнеқоңырау", videoCallDesc:"Аудармашымен байланысу",
    needHelp:"Маған көмек керек", needHelpDesc:"Қажетті көмек түрін таңдаңыз",
    textChat:"Мәтіндік байланыс", textChatDesc:"Демо хабарлама үлгісі",
    reviews:"Пікірлер", reviewsDesc:"Баға беріп, пікір қалдыру",
    safetyTitle:"Маңызды ақпарат",
    safetyText:"Бұл демонстрациялық прототип. Шұғыл жағдайда тиісті жедел қызметке тікелей хабарласыңыз.",
    backHome:"Басты бетке қайту",
    translatorSection:"ОНЛАЙН ҚЫЗМЕТ",
    translatorTitle:"Ымдау тілі аудармашысы",
    translatorIntro:"Бос аудармашымен тікелей байланысу мүмкіндігін тексеріңіз.",
    connectionStatus:"Қосылу мәртебесі",
    connectButton:"Аудармашыға қосылу",
    toggleStatus:"Демо: мәртебені өзгерту",
    noTranslatorTitle:"Қазір бос аудармашы жоқ",
    noTranslatorText:"Нақты кезекке қойылған жоқ. Мәтіндік баламаны таңдауға болады.",
    tryText:"Мәтіндік байланысқа өту",
    backTranslator:"Аудармашы бөліміне қайту",
    demoCall:"ДЕМО ҚОҢЫРАУ", callTitle:"Бейнеқоңырау",
    callIntro:"Бұл экран нақты аудио немесе видео жібермейді.",
    interpreterLabel:"Сурдоаудармашы", sampleVideo:"Демонстрациялық көрініс",
    camera:"Камера", microphone:"Микрофон", endCall:"Аяқтау",
    helpSection:"ҚОЛДАУ", helpTitle:"Қандай көмек қажет?",
    helpIntro:"Өзіңізге сәйкес нұсқаны таңдаңыз.",
    helpInterpreter:"Аудармашы қажет",
    helpInterpreterDesc:"Ымдау тілі арқылы сөйлесу",
    helpMedical:"Медициналық көмек қажет",
    helpMedicalDesc:"Медициналық мекемеде көмек сұрау",
    helpInstitution:"Мекемеде көмек қажет",
    helpInstitutionDesc:"Қызметкермен байланысу",
    emergencyTitle:"Шұғыл жағдай",
    emergencyText:"QOLDAU прототипі жедел қызметке қоңырау шалмайды. Қауіп төнсе, тиісті жедел қызметке тікелей хабарласыңыз.",
    chatTitle:"Мәтіндік байланыс",
    chatIntro:"Хабарлама үлгісі. Ол серверге жіберілмейді.",
    chatWelcome:"Сәлеметсіз бе! Бұл QOLDAU демо чаты.",
    messageLabel:"Хабарлама",
    messagePlaceholder:"Хабарламаңызды жазыңыз...",
    sendMessage:"Демо хабарлама қосу",
    feedbackSection:"КЕРІ БАЙЛАНЫС",
    reviewsTitle:"Пікірлер мен бағалау",
    reviewsIntro:"Пікірлер тек осы демонстрацияда көрсетіледі.",
    ratingLabel:"Қызметті бағалаңыз",
    reviewTextLabel:"Пікіріңіз",
    reviewPlaceholder:"Қызмет туралы пікіріңізді жазыңыз...",
    submitReview:"Пікірді қосу",
    userReviews:"Пайдаланушылар пікірі",
    footerText:"Ақтөбе · Қолжетімді байланыс",
    footerDemo:"Демонстрациялық прототип · Нақты қызметтер қосылмаған",
    unavailable:"Қазір бос аудармашы жоқ. Мәтіндік байланысты қолданып көріңіз.",
    demoNotice:"Бұл демонстрациялық функция. Нақты бейнеқоңырау қосылмаған.",
    sent:"Демо хабарлама қосылды.",
    reviewAdded:"Пікір демонстрацияға қосылды.",
    helpChosen:"Таңдалған көмек түрі: "
  },
  ru: {
    navHome:"Главная", navTranslator:"Переводчик",
    navHelp:"Помощь", navReviews:"Отзывы",
    eyebrow:"АКТОБЕ · КАЗАХСКИЙ / РУССКИЙ",
    heroTitle:"Мы готовы вам помочь!",
    heroText:"Свяжитесь с переводчиком жестового языка или выберите нужную помощь.",
    callTranslator:"Вызвать онлайн-переводчика",
    translatorStatus:"Статус переводчика",
    available:"Переводчик свободен", busy:"Переводчик занят",
    demoMode:"Демо-режим", quickActions:"Быстрые действия",
    videoCall:"Видеозвонок", videoCallDesc:"Связаться с переводчиком",
    needHelp:"Мне нужна помощь", needHelpDesc:"Выберите нужный вид помощи",
    textChat:"Текстовая связь", textChatDesc:"Демо-сообщение",
    reviews:"Отзывы", reviewsDesc:"Оценить и оставить отзыв",
    safetyTitle:"Важная информация",
    safetyText:"Это демонстрационный прототип. В экстренной ситуации обратитесь напрямую в соответствующую службу.",
    backHome:"Вернуться на главную",
    translatorSection:"ОНЛАЙН-СЕРВИС",
    translatorTitle:"Переводчик жестового языка",
    translatorIntro:"Проверьте возможность связи со свободным переводчиком.",
    connectionStatus:"Статус подключения",
    connectButton:"Связаться с переводчиком",
    toggleStatus:"Демо: изменить статус",
    noTranslatorTitle:"Сейчас нет свободного переводчика",
    noTranslatorText:"Запрос не поставлен в реальную очередь. Можно использовать текстовую связь.",
    tryText:"Перейти к текстовой связи",
    backTranslator:"Вернуться к переводчику",
    demoCall:"ДЕМОЗВОНОК", callTitle:"Видеозвонок",
    callIntro:"Этот экран не передаёт реальные аудио или видео.",
    interpreterLabel:"Переводчик жестового языка",
    sampleVideo:"Демонстрационный экран",
    camera:"Камера", microphone:"Микрофон", endCall:"Завершить",
    helpSection:"ПОДДЕРЖКА", helpTitle:"Какая помощь вам нужна?",
    helpIntro:"Выберите подходящий вариант.",
    helpInterpreter:"Нужен переводчик",
    helpInterpreterDesc:"Общение на жестовом языке",
    helpMedical:"Нужна медицинская помощь",
    helpMedicalDesc:"Помощь в медицинском учреждении",
    helpInstitution:"Нужна помощь в учреждении",
    helpInstitutionDesc:"Связь с сотрудником",
    emergencyTitle:"Экстренная ситуация",
    emergencyText:"Прототип QOLDAU не вызывает экстренные службы. При опасности обратитесь напрямую в соответствующую службу.",
    chatTitle:"Текстовая связь",
    chatIntro:"Демо-сообщение. Оно не отправляется на сервер.",
    chatWelcome:"Здравствуйте! Это демо-чат QOLDAU.",
    messageLabel:"Сообщение",
    messagePlaceholder:"Введите сообщение...",
    sendMessage:"Добавить демо-сообщение",
    feedbackSection:"ОБРАТНАЯ СВЯЗЬ",
    reviewsTitle:"Отзывы и оценки",
    reviewsIntro:"Отзывы отображаются только в демонстрации.",
    ratingLabel:"Оцените сервис",
    reviewTextLabel:"Ваш отзыв",
    reviewPlaceholder:"Напишите отзыв о сервисе...",
    submitReview:"Добавить отзыв",
    userReviews:"Отзывы пользователей",
    footerText:"Актобе · Доступная связь",
    footerDemo:"Демонстрационный прототип · Реальные услуги не подключены",
    unavailable:"Сейчас нет свободного переводчика. Попробуйте текстовую связь.",
    demoNotice:"Это демонстрационная функция. Реальный видеозвонок не подключён.",
    sent:"Демо-сообщение добавлено.",
    reviewAdded:"Отзыв добавлен в демонстрацию.",
    helpChosen:"Выбранный вид помощи: "
  }
};

let lang = "kk";
let isAvailable = true;
let rating = 5;

function translate() {
  const t = text[lang];
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  $$("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
  $("#home-status-text").textContent = isAvailable ? t.available : t.busy;
  $("#translator-status").innerHTML = "● <span>" + (isAvailable ? t.available : t.busy) + "</span>";
  $("#translator-status").classList.toggle("busy", !isAvailable);
  $("#home-status-dot").classList.toggle("busy", !isAvailable);
  $("#unavailable-notice").classList.toggle("hidden", isAvailable);
}

function showPage(name) {
  const target = $("#page-" + name) || $("#page-home");
  $$(".page").forEach(p => p.classList.remove("active"));
  target.classList.add("active");
  $$(".nav-link").forEach(b => b.classList.toggle("active", b.dataset.page === name));
  $("#main-nav").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  $("#language").addEventListener("change", e => {
    lang = e.target.value;
    translate();
  });

  document.addEventListener("click", e => {
    const go = e.target.closest("[data-go], [data-page]");
    if (go) {
      e.preventDefault();
      showPage(go.dataset.go || go.dataset.page);
    }
  });

  $("#menu-toggle").addEventListener("click", () => {
    const nav = $("#main-nav");
    nav.classList.toggle("open");
    $("#menu-toggle").setAttribute("aria-expanded", nav.classList.contains("open"));
  });

  $("#toggle-availability").addEventListener("click", () => {
    isAvailable = !isAvailable;
    translate();
  });

  $("#connect-button").addEventListener("click", () => {
    if (isAvailable) {
      showPage("call");
      $("#call-feedback").textContent = text[lang].demoNotice;
    } else {
      $("#unavailable-notice").classList.remove("hidden");
    }
  });

  $("#camera-toggle").addEventListener("click", e => {
    e.currentTarget.classList.toggle("off");
    $("#call-feedback").textContent = text[lang].demoNotice;
  });

  $("#mic-toggle").addEventListener("click", e => {
    e.currentTarget.classList.toggle("off");
    $("#call-feedback").textContent = text[lang].demoNotice;
  });

  $("#end-call").addEventListener("click", () => showPage("translator"));

  $$("[data-help]").forEach(button => {
    button.addEventListener("click", () => {
      $("#help-feedback").textContent = text[lang].helpChosen + button.innerText.trim();
    });
  });

  $("#chat-form").addEventListener("submit", e => {
    e.preventDefault();
    const input = $("#chat-input");
    if (!input.value.trim()) return;
    const msg = document.createElement("div");
    msg.className = "chat-user-message";
    msg.textContent = input.value.trim();
    $("#chat-messages").appendChild(msg);
    input.value = "";
    $("#chat-feedback").textContent = text[lang].sent;
  });

  $$(".star").forEach(star => {
    star.classList.toggle("selected", Number(star.dataset.rating) <= rating);
    star.addEventListener("click", () => {
      rating = Number(star.dataset.rating);
      $$(".star").forEach(s => s.classList.toggle("selected", Number(s.dataset.rating) <= rating));
    });
  });

  $("#review-form").addEventListener("submit", e => {
    e.preventDefault();
    const content = $("#review-text").value.trim();
    if (!content) {
      $("#review-feedback").textContent = text[lang].reviewPlaceholder;
      return;
    }
    const card = document.createElement("article");
    card.className = "review-card";
    const stars = document.createElement("div");
    stars.className = "review-stars";
    stars.textContent = "★".repeat(rating) + "☆".repeat(5 - rating);
    const p = document.createElement("p");
    p.textContent = content;
    card.append(stars, p);
    $("#review-list").prepend(card);
    $("#review-count").textContent = String(Number($("#review-count").textContent || 0) + 1);
    $("#review-text").value = "";
    $("#review-feedback").textContent = text[lang].reviewAdded;
  });

  translate();
});
// WhatsApp видео-диспетчер
const whatsappMessage = encodeURIComponent(
  (localStorage.getItem("lang") || "kk") === "ru"
    ? "Здравствуйте! Я обращаюсь в службу ВДС. Мне нужна помощь. Прошу принять моё обращение."
    : "Сәлеметсіз бе! Мен ВДС қызметіне хабарласып тұрмын. Маған көмек қажет. Өтінішімді қабылдауыңызды сұраймын."
);
  
    
);
);
const whatsappLink = "https://wa.me/77009617640?text=" + whatsappMessage;

document.querySelectorAll("#connect-button, [data-demo-call]").forEach(button => {
  button.addEventListener("click", function () {
    window.open(whatsappLink, "_blank");
  });
});
