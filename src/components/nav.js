const nav = () => {
    const header = document.querySelector(".js-header");
    const btnOpen = document.querySelector(".js-btn-open");
    const btnClose = document.querySelector(".js-btn-close");

    btnOpen.addEventListener('click', () => {
        header.classList.add('active');
    });

    btnClose.addEventListener('click', () => {
        header.classList.remove('active');
    });
}

export default nav;