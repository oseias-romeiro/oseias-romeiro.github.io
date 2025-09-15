const lightSymbol = '<img src="img/icons/sun.svg" alt="light" class="w-7 h-7">';

const darkSymbol = '<img src="img/icons/half-moon.svg" alt="light" class="w-7 h-7">';

const themeToggle = document.querySelector('#themeToggle');
var currentTheme = themeToggle.attributes['data-theme'].value;

const changeLight = () => {
    themeToggle.innerHTML = darkSymbol;
    themeToggle.attributes['data-theme'].value = 'light';
    currentTheme = 'light';
    document.getElementsByTagName('body')[0].className = 'flex flex-col h-screen justify-between bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-800';
    document.cookie = 'theme=light; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Strict; path=/';
}
const changeDark = () => {
    themeToggle.innerHTML = lightSymbol;
    themeToggle.attributes['data-theme'].value = 'dark';
    currentTheme = 'dark';
    document.getElementsByTagName('body')[0].className = 'flex flex-col h-screen justify-between bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-200';
    document.cookie = 'theme=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Strict; path=/';
}
const themeHandler = ()=>{
    if (currentTheme === 'dark') {
        changeLight();
    } else {
        changeDark();
    }
}

var theme = document.cookie.search('theme=');
if (theme === -1) {
    document.cookie = 'theme=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Strict; path=/';
    currentTheme = 'dark';
}
else {
    currentTheme = document.cookie.match(/theme=(.*?)(;|$)/)[1];
}
themeToggle.attributes['data-theme'].value = currentTheme;
if (currentTheme === 'dark') {
    changeDark();
} else {
    changeLight();
}

themeToggle.addEventListener('click', ()=> themeHandler());
