const popUp = document.querySelector('#popup');

const showPopUp = (title, message) => {
    popUp.classList.remove('hidden');
    document.querySelector('#popup-title').innerHTML = title;
    document.querySelector('#popup-message').innerHTML = message;
}

const hidePopUp = () => {
    popUp.classList.add('hidden');
}

document.querySelector('#popup-closeBtn').addEventListener('click', () => {
    hidePopUp();
});
