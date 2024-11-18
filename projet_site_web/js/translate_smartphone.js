document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translate-button');
    let isEnglish = localStorage.getItem('isEnglish') === 'true';

    const translations = {
        fr: {
            title: "TechCompany - Smartphone",
            headerTitle: "TechCompany",
            navHome: "Accueil",
            navHardware: "Nos produits Hardware",
            navContact: "Nous contacter",
            navAccount: "Compte",
            productTitle: "TechPhone Pro 2024",
            descriptionTitle: "Description",
            productDescription1: "Le TechPhone Pro 2024 est le dernier cri en matière de technologie mobile, conçu pour les utilisateurs exigeants qui ne veulent pas faire de compromis sur la performance et le style. Avec son design épuré en verre et métal, il offre une prise en main confortable et une esthétique moderne. Le TechPhone Pro 2024 intègre le dernier système d’exploitation Android, offrant une expérience utilisateur fluide et intuitive, enrichie par un écosystème d’applications diversifié.",
            productDescription2: "Le TechPhone Pro 2024 est le compagnon idéal pour ceux qui cherchent à maximiser leur productivité et à profiter de leurs loisirs avec style et puissance.",
            specsTitle: "Fiche Technique",
            specsScreen: "Écran : 6.7 pouces, AMOLED, 1440 x 3200 pixels, 120 Hz",
            specsCpu: "Processeur : Octa-core 3.2 GHz, chipset Snapdragon 898",
            specsRam: "RAM : 12 Go LPDDR5",
            specsStorage: "Stockage : 256 Go / 512 Go UFS 3.1, extensible via microSD",
            specsCameraMain: "Appareil Photo Principal : Triple capteur - 108 MP (large) + 16 MP (ultra-large) + 12 MP (téléobjectif), zoom optique 5x",
            specsCameraFront: "Appareil Photo Frontal : 32 MP, HDR, vidéo 4K",
            specsBattery: "Batterie : 5000 mAh, charge rapide 65W, charge sans fil 30W",
            specsSecurity: "Sécurité : Capteur d’empreintes digitales sous l’écran, reconnaissance faciale",
            specsConnectivity: "Connectivité : 5G, Wi-Fi 6E, Bluetooth 5.2, NFC, USB Type-C",
            specsOs: "Système d’exploitation : Android 13",
            specsOther: "Autres : Résistance à l’eau IP68, haut-parleurs stéréo, prise en charge du stylet",
            priceTitle: "Prix",
            productPrice: "959€",
            orderButton: "Commander",
            footerText: "&copy; 2024 TechCompany. Tous droits réservés.",
            button: "🇬🇧"
        },
        en: {
            title: "TechCompany - Smartphone",
            headerTitle: "TechCompany",
            navHome: "Home",
            navHardware: "Our Hardware Products",
            navContact: "Contact Us",
            navAccount: "Account",
            productTitle: "TechPhone Pro 2024",
            descriptionTitle: "Description",
            productDescription1: "The TechPhone Pro 2024 is the latest in mobile technology, designed for demanding users who do not want to compromise on performance and style. With its sleek glass and metal design, it offers a comfortable grip and a modern aesthetic. The TechPhone Pro 2024 integrates the latest Android operating system, providing a smooth and intuitive user experience, enriched by a diverse ecosystem of applications.",
            productDescription2: "The TechPhone Pro 2024 is the ideal companion for those looking to maximize their productivity and enjoy their leisure time with style and power.",
            specsTitle: "Specifications",
            specsScreen: "Screen: 6.7 inches, AMOLED, 1440 x 3200 pixels, 120 Hz",
            specsCpu: "Processor: Octa-core 3.2 GHz, Snapdragon 898 chipset",
            specsRam: "RAM: 12 GB LPDDR5",
            specsStorage: "Storage: 256 GB / 512 GB UFS 3.1, expandable via microSD",
            specsCameraMain: "Main Camera: Triple sensor - 108 MP (wide) + 16 MP (ultra-wide) + 12 MP (telephoto), 5x optical zoom",
            specsCameraFront: "Front Camera: 32 MP, HDR, 4K video",
            specsBattery: "Battery: 5000 mAh, 65W fast charging, 30W wireless charging",
            specsSecurity: "Security: Under-display fingerprint sensor, facial recognition",
            specsConnectivity: "Connectivity: 5G, Wi-Fi 6E, Bluetooth 5.2, NFC, USB Type-C",
            specsOs: "Operating System: Android 13",
            specsOther: "Other: IP68 water resistance, stereo speakers, stylus support",
            priceTitle: "Price",
            productPrice: "€959",
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
        document.getElementById('product-description1').textContent = translations[lang].productDescription1;
        document.getElementById('product-description2').textContent = translations[lang].productDescription2;
        document.getElementById('specs-title').textContent = translations[lang].specsTitle;
        document.getElementById('specs-screen').textContent = translations[lang].specsScreen;
        document.getElementById('specs-cpu').textContent = translations[lang].specsCpu;
        document.getElementById('specs-ram').textContent = translations[lang].specsRam;
        document.getElementById('specs-storage').textContent = translations[lang].specsStorage;
        document.getElementById('specs-camera-main').textContent = translations[lang].specsCameraMain;
        document.getElementById('specs-camera-front').textContent = translations[lang].specsCameraFront;
        document.getElementById('specs-battery').textContent = translations[lang].specsBattery;
        document.getElementById('specs-security').textContent = translations[lang].specsSecurity;
        document.getElementById('specs-connectivity').textContent = translations[lang].specsConnectivity;
        document.getElementById('specs-os').textContent = translations[lang].specsOs;
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