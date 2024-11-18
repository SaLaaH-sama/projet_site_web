document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translate-button');
    let isEnglish = localStorage.getItem('isEnglish') === 'true';

    const translations = {
        fr: {
            title: "TechCompany - Accueil",
            headerTitle: "TechCompany",
            navHome: "Accueil",
            navHardware: "Nos produits Hardware",
            navContact: "Nous contacter",
            navAccount: "Compte",
            welcome: "Bienvenue chez TechCompany",
            description: "TechCompany est une entreprise innovante spécialisée dans la vente de hardware et de software de haute qualité. Notre mission est de fournir les meilleurs produits technologiques pour répondre à tous vos besoins.",
            footerText: "&copy; 2024 TechCompany. Tous droits réservés.",
            button: "🇬🇧"
        },
        en: {
            title: "TechCompany - Home",
            headerTitle: "TechCompany",
            navHome: "Home",
            navHardware: "Our Hardware Products",
            navContact: "Contact Us",
            navAccount: "Account",
            welcome: "Welcome to TechCompany",
            description: "TechCompany is an innovative company specializing in the sale of high-quality hardware and software. Our mission is to provide the best technological products to meet all your needs.",
            footerText: "&copy; 2024 TechCompany. All rights reserved.",
            button: "🇫🇷"
        }
    };

    const updateLanguage = () => {
        const lang = isEnglish ? 'en' : 'fr';
        document.title = translations[lang].title;
        document.getElementById('header-title').textContent = translations[lang].headerTitle;
        document.getElementById('nav-home').textContent = translations[lang].navHome;
        document.getElementById('nav-hardware').textContent = translations[lang].navHardware;
        document.getElementById('nav-contact').textContent = translations[lang].navContact;
        document.getElementById('nav-account').textContent = translations[lang].navAccount;
        document.getElementById('welcome').textContent = translations[lang].welcome;
        document.getElementById('description').textContent = translations[lang].description;
        document.getElementById('footer-text').innerHTML = translations[lang].footerText;
        translateButton.textContent = translations[lang].button;
    };

    translateButton.addEventListener('click', () => {
        isEnglish = !isEnglish;
        localStorage.setItem('isEnglish', isEnglish);
        updateLanguage();
    });

    updateLanguage();
});