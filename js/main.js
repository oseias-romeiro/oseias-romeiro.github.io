
document.getElementById("jsneedMSG").style.display = "none";

const lang = navigator.language.split('-')[0] === "pt" ? "pt" : "en";
const langToggle = document.querySelector('#langToggle');
langToggle.attributes['lang-theme'].value = lang;

changeLanguage(lang);

langToggle.addEventListener('click', () => {
    const lang = langToggle.attributes['lang-theme'].value === 'pt' ? 'en' : 'pt';
    langToggle.attributes['lang-theme'].value = lang;
    changeLanguage(lang);
});
