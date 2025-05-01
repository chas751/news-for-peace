const translations = {
  ru: {
    home: "Главная",
    politics: "Политика",
    donate: "Донаты",
    contacts: "Контакты",
    "news1-title": "Мировые лидеры обсудили климатический кризис",
    "news1-text": "На саммите G20 лидеры стран договорились о новых мерах по снижению выбросов...",
    "news2-title": "Новое соглашение между странами ЕС",
    "news2-text": "Европейский союз подписал соглашение о торговле с азиатскими партнёрами...",
    "news3-title": "Выборы в Южной Америке вызвали протесты",
    "news3-text": "После объявления результатов выборов жители вышли на улицы...",
    "news4-title": "Санкции против технологических компаний",
    "news4-text": "Правительство США ввело новые санкции против ряда китайских компаний...",
    "read-more": "Читать далее",
    "donate-title": "Поддержите наш проект",
    "donate-text": "Ваши донаты помогают нам продолжать работу и предоставлять актуальные новости!",
    "crypto-wallet": "Криптовалютный кошелёк:",
    "bank-details": "Банковские реквизиты (ВТБ):",
    "contact-title": "Связаться с нами",
    send: "Отправить",
    footer: "© 2025 Новости мира в всём мире. Все права защищены."
  },
  en: {
    home: "Home",
    politics: "Politics",
    donate: "Donate",
    contacts: "Contacts",
    "news1-title": "World Leaders Discuss Climate Crisis",
    "news1-text": "At the G20 summit, leaders agreed on new measures to reduce emissions...",
    "news2-title": "New Agreement Between EU Countries",
    "news2-text": "The European Union signed a trade agreement with Asian partners...",
    "news3-title": "Elections in South America Spark Protests",
    "news3-text": "After the election results were announced, residents took to the streets...",
    "news4-title": "Sanctions Against Tech Companies",
    "news4-text": "The U.S. government imposed new sanctions on several Chinese companies...",
    "read-more": "Read More",
    "donate-title": "Support Our Project",
    "donate-text": "Your donations help us continue our work and provide up-to-date news!",
    "crypto-wallet": "Cryptocurrency Wallet:",
    "bank-details": "Bank Details (VTB):",
    "contact-title": "Contact Us",
    send: "Send",
    footer: "© 2025 World News Everywhere. All rights reserved."
  },
  es: {
    home: "Inicio",
    politics: "Política",
    donate: "Donar",
    contacts: "Contactos",
    "news1-title": "Líderes mundiales discuten la crisis climática",
    "news1-text": "En la cumbre del G20, los líderes acordaron nuevas medidas para reducir emisiones...",
    "news2-title": "Nuevo acuerdo entre países de la UE",
    "news2-text": "La Unión Europea firmó un acuerdo comercial con socios asiáticos...",
    "news3-title": "Elecciones en América del Sur generan protestas",
    "news3-text": "Tras el anuncio de los resultados electorales, los residentes salieron a las calles...",
    "news4-title": "Sanciones contra empresas tecnológicas",
    "news4-text": "El gobierno de EE. UU. impuso nuevas sanciones a varias empresas chinas...",
    "read-more": "Leer más",
    "donate-title": "Apoya nuestro proyecto",
    "donate-text": "¡Tus donaciones nos ayudan a continuar nuestro trabajo y ofrecer noticias actualizadas!",
    "crypto-wallet": "Monedero de criptomonedas:",
    "bank-details": "Detalles bancarios (VTB):",
    "contact-title": "Contáctanos",
    send: "Enviar",
    footer: "© 2025 Noticias del mundo en todo el mundo. Todos los derechos reservados."
  }
  // Добавь остальные языки по аналогии, если нужно
};

function changeLanguage() {
  const lang = document.getElementById('language-select').value;
  document.querySelectorAll('[data-lang-key]').forEach(element => {
    const key = element.getAttribute('data-lang-key');
    element.textContent = translations[lang][key];
  });
  document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(input => {
    const placeholderKey = input.getAttribute('placeholder');
    if (placeholderKey) {
      input.setAttribute('placeholder', translations[lang][placeholderKey.toLowerCase()] || placeholderKey);
    }
  });
}

// Навигация по разделам
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.container').forEach(section => section.style.display = 'none');
    const sectionId = this.getAttribute('href').substring(1);
    document.getElementById(sectionId).style.display = 'block';
  });
});

// Инициализация языка при загрузке
document.addEventListener('DOMContentLoaded', () => changeLanguage());
