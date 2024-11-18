document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translate-button');
    let isEnglish = localStorage.getItem('isEnglish') === 'true';

    const translations = {
        fr: {
            title: "TechCompany - Ordinateur Portable",
            headerTitle: "TechCompany",
            navHome: "Accueil",
            navHardware: "Nos produits Hardware",
            navContact: "Nous contacter",
            navAccount: "Compte",
            productTitle: "Laptop Tech Pro 2024",
            specsTitle: "Fiche Technique",
            specsCpu: "Processeur : Intel Core i9 de 11e génération, jusqu’à 5,0 GHz en mode Turbo.",
            specsRam: "RAM : 32 Go de DDR4",
            specsStorage: "Stockage : SSD NVMe de 1 To",
            specsGpu: "Carte graphique : NVIDIA GeForce RTX 3080 avec 8 Go de VRAM",
            specsWifi: "Wi-Fi 6 pour des vitesses de connexion ultra-rapides.",
            specsBluetooth: "Bluetooth 5.2 pour connecter vos périphériques sans fil.",
            specsPorts: "Ports : USB-C, USB-A, HDMI, lecteur de carte SD.",
            specsBattery: "Autonomie : La batterie de 80 Wh offre jusqu’à 12 heures d’utilisation continue, idéale pour les longues journées de travail.",
            specsSecurity: "Sécurité : Le Laptop Tech Pro 2024 est équipé d’un capteur d’empreintes digitales intégré pour un déverrouillage sécurisé et rapide.",
            specsOs: "Système d’exploitation : Préinstallé avec Windows 11 Pro pour une expérience logicielle optimale.",
            priceTitle: "Prix",
            productPrice: "1,299€",
            orderButton: "Commander",
            footerText: "&copy; 2024 TechCompany. Tous droits réservés.",
            button: "🇬🇧"
        },
        en: {
            title: "TechCompany - Laptop",
            headerTitle: "TechCompany",
            navHome: "Home",
            navHardware: "Our Hardware Products",
            navContact: "Contact Us",
            navAccount: "Account",
            productTitle: "Laptop Tech Pro 2024",
            specsTitle: "Specifications",
            specsCpu: "Processor: 11th Gen Intel Core i9, up to 5.0 GHz in Turbo mode.",
            specsRam: "RAM: 32 GB DDR4",
            specsStorage: "Storage: 1 TB NVMe SSD",
            specsGpu: "Graphics Card: NVIDIA GeForce RTX 3080 with 8 GB VRAM",
            specsWifi: "Wi-Fi 6 for ultra-fast connection speeds.",
            specsBluetooth: "Bluetooth 5.2 to connect your wireless peripherals.",
            specsPorts: "Ports: USB-C, USB-A, HDMI, SD card reader.",
            specsBattery: "Battery Life: The 80 Wh battery offers up to 12 hours of continuous use, ideal for long workdays.",
            specsSecurity: "Security: The Laptop Tech Pro 2024 is equipped with an integrated fingerprint sensor for secure and quick unlocking.",
            specsOs: "Operating System: Pre-installed with Windows 11 Pro for an optimal software experience.",
            priceTitle: "Price",
            productPrice: "€1,299",
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
        document.getElementById('specs-title').textContent = translations[lang].specsTitle;
        document.getElementById('specs-cpu').textContent = translations[lang].specsCpu;
        document.getElementById('specs-ram').textContent = translations[lang].specsRam;
        document.getElementById('specs-storage').textContent = translations[lang].specsStorage;
        document.getElementById('specs-gpu').textContent = translations[lang].specsGpu;
        document.getElementById('specs-wifi').textContent = translations[lang].specsWifi;
        document.getElementById('specs-bluetooth').textContent = translations[lang].specsBluetooth;
        document.getElementById('specs-ports').textContent = translations[lang].specsPorts;
        document.getElementById('specs-battery').textContent = translations[lang].specsBattery;
        document.getElementById('specs-security').textContent = translations[lang].specsSecurity;
        document.getElementById('specs-os').textContent = translations[lang].specsOs;
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