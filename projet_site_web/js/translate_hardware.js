document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translate-button');
    let isEnglish = localStorage.getItem('isEnglish') === 'true';

    const translations = {
        fr: {
            title: "TechCompany - Nos produits Hardware",
            headerTitle: "TechCompany",
            navHome: "Accueil",
            navHardware: "Nos produits Hardware",
            navContact: "Nous contacter",
            navAccount: "Compte",
            hardwareTitle: "Nos Produits Hardware",
            hardwareDescription: "Découvrez notre gamme de produits hardware : ordinateurs, smartphones, consoles et bien plus encore.",
            productLaptop: "Ordinateur portable",
            productSmartphone: "Smartphone",
            productConsole: "Console portable",
            footerText: "&copy; 2024 TechCompany. Tous droits réservés.",
            button: "🇬🇧"
        },
        en: {
            title: "TechCompany - Our Hardware Products",
            headerTitle: "TechCompany",
            navHome: "Home",
            navHardware: "Our Hardware Products",
            navContact: "Contact Us",
            navAccount: "Account",
            hardwareTitle: "Our Hardware Products",
            hardwareDescription: "Discover our range of hardware products: computers, smartphones, consoles, and much more.",
            productLaptop: "Laptop",
            productSmartphone: "Smartphone",
            productConsole: "Portable Console",
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
        document.getElementById('hardware-title').textContent = translations[lang].hardwareTitle;
        document.getElementById('hardware-description').textContent = translations[lang].hardwareDescription;
        document.getElementById('product-laptop').textContent = translations[lang].productLaptop;
        document.getElementById('product-smartphone').textContent = translations[lang].productSmartphone;
        document.getElementById('product-console').textContent = translations[lang].productConsole;
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