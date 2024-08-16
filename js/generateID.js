function generateUniqueId() {

    // user data
    const uidComponents = [
        navigator.userAgent,
        navigator.language,
        navigator.width,
        navigator.height,
        navigator.colorDepth,
        new Date().getTime()
    ];

    // combine all and add random string
    const uidString = uidComponents.join('') + Math.random().toString(36).substring(2);
    
    // hash
    let hash = 0, i, chr;
    for (i = 0; i < uidString.length; i++) {
        chr   = uidString.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    
    return hash.toString();
}
