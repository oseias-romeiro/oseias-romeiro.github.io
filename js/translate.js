
const setContents = (content) => {
    document.getElementById("navbar-item1").innerText = content["navbar-item1"];
    const item2 = document.getElementById("navbar-item2");
    item2.innerText = content["navbar-item2"]["text"];
    item2.addEventListener('click', () => showPopUp(content["navbar-item2"]["popup-title"], content["navbar-item2"]["popup-message"]));

    document.querySelector('#tooltip-translate').textContent = content['tooltips']['translate'];
    document.querySelector('#tooltip-theme').textContent = content['tooltips']['theme'];
    
    document.getElementById("whatsapp-link").setAttribute('data-text', content["whatsapp-link"]);

    if (document.location.pathname === '/') {
        document.getElementById("short-description").innerText = content["short-description"];
        document.getElementById("about").innerText = content["about"];
        document.getElementById("about-description").innerHTML = content["about-description"];
        document.getElementById("xp").innerText = content["xp"];
        document.getElementById("xp-description").innerHTML = content["xp-description"];
    }
    if (document.location.pathname === '/thanks.html') {
        document.querySelector('#thanking').innerText = content['thanking'];
    }
}

const changeLanguage = (lang) => {
    const loadingElement = document.getElementById("loading");
    loadingElement.classList.remove("hidden"); 
    
    const cached = sessionStorage.getItem(`lang-${lang}`);
    if (cached) {
        const content = JSON.parse(cached);
        
        try { setContents(content) }
        catch (err) { console.error(err) }
        finally { loadingElement.classList.add("hidden") }
        
        return;
    }

    fetch(`lang/${lang}.json`)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
        })
        .then(content => {
            sessionStorage.setItem(`lang-${lang}`, JSON.stringify(content));
            try { setContents(content) }
            catch (err) { console.error(err) }
        })
        .catch(err => {
            console.error(err);
            showPopUp("Error", `Failed to load content for language "${lang}"!<br>Falha ao carregar o conteúdo para a língua "${lang}"!<br>${err}`);
        })
        .finally(() => loadingElement.classList.add("hidden"))
    ;
}
