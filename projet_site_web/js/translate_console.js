document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translate-button');
    let isEnglish = localStorage.getItem('isEnglish') === 'true';

    const translations = {
        fr: {
            title: "TechCompany - Console Portable",
            headerTitle: "TechCompany",
            navHome: "Accueil",
            navHardware: "Nos produits Hardware",
            navContact: "Nous contacter",
            navAccount: "Compte",
            productTitle: "GameTech Pro 2024",
            descriptionTitle: "Description",
            productDescription: "La GameTech Pro 2024 est la console portable ultime pour les gamers. Avec son écran haute résolution, ses performances de pointe et sa bibliothèque de jeux étendue, elle offre une expérience de jeu inégalée.",
            specsTitle: "Fiche Technique",
            specsScreen: "Écran : 7 pouces, LCD, 1920 x 1080 pixels, 60 Hz",
            specsCpu: "Processeur : Octa-core 2.8 GHz, chipset custom",
            specsRam: "RAM : 8 Go LPDDR4",
            specsStorage: "Stockage : 128 Go, extensible via microSD",
            specsBattery: "Batterie : 6000 mAh, charge rapide 45W",
            specsConnectivity: "Connectivité : Wi-Fi 6, Bluetooth 5.1, USB Type-C",
            specsOther: "Autres : Haut-parleurs stéréo, prise casque 3.5mm, support des manettes sans fil",
            priceTitle: "Prix",
            productPrice: "499€",
            orderButton: "Commander",
            footerText: "&copy; 2024 TechCompany. Tous droits réservés.",
            button: "🇬🇧"
        },
        en: {
            title: "TechCompany - Portable Console",
            headerTitle: "TechCompany",
            navHome: "Home",
            navHardware: "Our Hardware Products",
            navContact: "Contact Us",
            navAccount: "Account",
            productTitle: "GameTech Pro 2024",
            descriptionTitle: "Description",
            productDescription: "The GameTech Pro 2024 is the ultimate portable console for gamers. With its high-resolution screen, top-notch performance, and extensive game library, it offers an unparalleled gaming experience.",
            specsTitle: "Specifications",
            specsScreen: "Screen: 7 inches, LCD, 1920 x 1080 pixels, 60 Hz",
            specsCpu: "Processor: Octa-core 2.8 GHz, custom chipset",
            specsRam: "RAM: 8 GB LPDDR4",
            specsStorage: "Storage: 128 GB, expandable via microSD",
            specsBattery: "Battery: 6000 mAh, 45W fast charging",
            specsConnectivity: "Connectivity: Wi-Fi 6, Bluetooth 5.1, USB Type-C",
            specsOther: "Other: Stereo speakers, 3.5mm headphone jack, support for wireless controllers",
            priceTitle: "Price",
            productPrice: "€499",
            orderButton: "Order",
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
        document.getElementById('product-title').textContent = translations[lang].productTitle;
        document.getElementById('description-title').textContent = translations[lang].descriptionTitle;
        document.getElementById('product-description').textContent = translations[lang].productDescription;
        document.getElementById('specs-title').textContent = translations[lang].specsTitle;
        document.getElementById('specs-screen').textContent = translations[lang].specsScreen;
        document.getElementById('specs-cpu').textContent = translations[lang].specsCpu;
        document.getElementById('specs-ram').textContent = translations[lang].specsRam;
        document.getElementById('specs-storage').textContent = translations[lang].specsStorage;
        document.getElementById('specs-battery').textContent = translations[lang].specsBattery;
        document.getElementById('specs-connectivity').textContent = translations[lang].specsConnectivity;
        document.getElementById('specs-other').textContent = translations[lang].specsOther;
        document.getElementById('price-title').textContent = translations[lang].priceTitle;
        document.getElementById('product-price').textContent = translations[lang].productPrice;
        document.getElementById('order-button').textContent = translations[lang].orderButton;
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