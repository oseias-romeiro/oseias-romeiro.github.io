const lightSymbol = '<img src="img/icons/sun.svg" alt="light" class="w-7 h-7">';

const darkSymbol = '<img src="img/icons/half-moon.svg" alt="light" class="w-7 h-7">';

const themeToggle = document.querySelector('#themeToggle');
var currentTheme = themeToggle.attributes['data-theme'].value;

const changeLight = () => {
    themeToggle.innerHTML = darkSymbol;
    themeToggle.attributes['data-theme'].value = 'light';
    currentTheme = 'light';
    
    document.getElementsByTagName('body')[0].className = 'flex flex-col h-screen justify-between bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-800';
    
    setCookie('theme', 'light', 24*30);
}

const changeDark = () => {
    themeToggle.innerHTML = lightSymbol;
    themeToggle.attributes['data-theme'].value = 'dark';
    currentTheme = 'dark';
    
    document.getElementsByTagName('body')[0].className = 'flex flex-col h-screen justify-between bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-200';
    
    setCookie('theme', 'dark', 24*30);
}

const themeHandler = () => currentTheme === 'dark' ? changeLight() : changeDark();

var theme = getCookie('theme');
if (theme === -1) {
    setCookie('theme', 'dark', 24*30);
    currentTheme = 'dark';
} else {
    currentTheme = theme;
}

themeToggle.attributes['data-theme'].value = currentTheme;
currentTheme === 'dark' ? changeDark() : changeLight();
themeToggle.addEventListener('click', () => themeHandler());
