document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translate-button');
    let isEnglish = localStorage.getItem('isEnglish') === 'true';

    const translations = {
        fr: {
            title: "TechCompany - Créer ou se connecter à un compte",
            headerTitle: "TechCompany",
            navHome: "Accueil",
            navHardware: "Nos produits Hardware",
            navContact: "Nous contacter",
            navAccount: "Compte",
            sectionTitle: "Créer ou se connecter à un compte",
            createAccountTitle: "Créer un compte",
            labelNomInscription: "Nom :",
            labelEmailInscription: "Email :",
            labelMotdepasseInscription: "Mot de passe :",
            submitCreateAccount: "Créer un compte",
            loginTitle: "Se connecter",
            labelEmailConnexion: "Email :",
            labelMotdepasseConnexion: "Mot de passe :",
            submitLogin: "Se connecter",
            footerText: "&copy; 2024 TechCompany. Tous droits réservés.",
            button: "🇬🇧"
        },
        en: {
            title: "TechCompany - Create or Log in to an Account",
            headerTitle: "TechCompany",
            navHome: "Home",
            navHardware: "Our Hardware Products",
            navContact: "Contact Us",
            navAccount: "Account",
            sectionTitle: "Create or Log in to an Account",
            createAccountTitle: "Create an Account",
            labelNomInscription: "Name:",
            labelEmailInscription: "Email:",
            labelMotdepasseInscription: "Password:",
            submitCreateAccount: "Create Account",
            loginTitle: "Log In",
            labelEmailConnexion: "Email:",
            labelMotdepasseConnexion: "Password:",
            submitLogin: "Log In",
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
        document.getElementById('section-title').textContent = translations[lang].sectionTitle;
        document.getElementById('create-account-title').textContent = translations[lang].createAccountTitle;
        document.getElementById('label-nom-inscription').textContent = translations[lang].labelNomInscription;
        document.getElementById('label-email-inscription').textContent = translations[lang].labelEmailInscription;
        document.getElementById('label-motdepasse-inscription').textContent = translations[lang].labelMotdepasseInscription;
        document.getElementById('submit-create-account').textContent = translations[lang].submitCreateAccount;
        document.getElementById('login-title').textContent = translations[lang].loginTitle;
        document.getElementById('label-email-connexion').textContent = translations[lang].labelEmailConnexion;
        document.getElementById('label-motdepasse-connexion').textContent = translations[lang].labelMotdepasseConnexion;
        document.getElementById('submit-login').textContent = translations[lang].submitLogin;
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