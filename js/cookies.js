
const setCookie = (name, value, hours) => {
    let expires = "";
    if (hours) {
        const date = new Date();
        date.setTime(date.getTime() + (hours*60*60*1000));
        expires = `${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ""}; expires=${expires};  SameSite=Strict; path=/;`;
};

const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let c of ca) {
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};
