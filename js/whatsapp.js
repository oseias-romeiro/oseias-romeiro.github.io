const whatsappLink = document.querySelector('#whatsapp-link');
const code = 'KzU1NjE5OTUzNzczMDU=';

whatsappLink.addEventListener('click', () => {
    const text = whatsappLink.getAttribute('data-text');
    window.open(`https://wa.me/${atob(code)}?text=${text}`, '_blank');
});
