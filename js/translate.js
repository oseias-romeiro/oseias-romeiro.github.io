
const setContent = (content) => {
    document.getElementById("navbar-item1").innerText = content["navbar-item1"];
    document.getElementById("navbar-item2").innerText = content["navbar-item2"];
    document.getElementById("short-description").innerText = content["short-description"];
    document.getElementById("whatsapp-link").setAttribute('data-text', content["whatsapp-link"]);
    document.getElementById("about").innerText = content["about"];
    document.getElementById("about-description").innerHTML = content["about-description"];
    document.getElementById("xp").innerText = content["xp"];
    document.getElementById("xp-description").innerHTML = content["xp-description"];
}

const changeLanguage = (lang) => {
    const loadingElement = document.getElementById("loading");
    loadingElement.classList.remove("hidden"); 
    
    const cached = sessionStorage.getItem(`lang-${lang}`);
    if (cached) {
        const content = JSON.parse(cached);
        setContent(content);
        loadingElement.classList.add("hidden"); 
        return;
    }

    fetch(`lang/${lang}.json`)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
        })
        .then(content => {
            sessionStorage.setItem(`lang-${lang}`, JSON.stringify(content));
            setContent(content);
        })
        .catch(err => {
            console.error(err);
            alert(`Failed to load content for language "${lang}"\n${err}`);
        })
        .finally(() => loadingElement.classList.add("hidden"))
    ;
}
