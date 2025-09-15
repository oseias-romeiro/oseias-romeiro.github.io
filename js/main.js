hidePopUp();

let lang = getCookie("lang");
if (!lang) {
    lang = navigator.language.split('-')[0] === "pt" ? "pt" : "en";
    setCookie("lang", lang, 30);
}

const langToggle = document.querySelector('#langToggle');
langToggle.attributes['lang-theme'].value = lang;

changeLanguage(lang);

langToggle.addEventListener('click', () => {
    lang = langToggle.attributes['lang-theme'].value === 'pt' ? 'en' : 'pt';
    langToggle.attributes['lang-theme'].value = lang;
    setCookie("lang", lang, 30);
    changeLanguage(lang);
});
