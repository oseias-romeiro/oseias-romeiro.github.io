
const changeLanguage = (lang) => {
    document.getElementById("short-description").innerText = contents[lang]["short-description"];
    document.getElementById("about").innerText = contents[lang]["about"];
    document.getElementById("about-description").innerHTML = contents[lang]["about-description"];
    document.getElementById("xp").innerText = contents[lang]["xp"];
    document.getElementById("xp-description").innerHTML = contents[lang]["xp-description"];
}
