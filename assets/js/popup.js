function ShowPopup(message) {

    const popup = document.getElementById('popupBanner');

    popup.classList.add('show');
    popup.innerHTML = message;

    setTimeout(() => {
        popup.classList.remove('show');
    },2000);

};
