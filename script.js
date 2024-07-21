let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // ถ้า scroll down
        header.classList.remove('show');
    } else {
        // ถ้า scroll up
        header.classList.add('show');
    }
    lastScrollTop = scrollTop;
});
