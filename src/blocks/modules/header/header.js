document.addEventListener('DOMContentLoaded', () => {
    const fixedHeader = document.querySelector('.header-fixed-bar');
    const body = document.body;
    if (fixedHeader) {
        window.addEventListener('scroll', () => {
            if (body.getBoundingClientRect().top < 0) {
                fixedHeader.classList.add('is-modified');
            } else {
                fixedHeader.classList.remove('is-modified');
            }
        });
    }
    const mobileMenuTriggers = document.querySelectorAll('.mobile-menu-trigger');
    if (mobileMenuTriggers.length > 0) {
        const wrapper = document.querySelector('.mobile-menu-wrapper');
        mobileMenuTriggers.forEach(each => {
            each.addEventListener('click', () => {
                wrapper.classList.toggle('is-opened');
            });
        });
        document.body.addEventListener('click', (e) => {
            if (e.target === wrapper) {
                wrapper.classList.remove('is-opened');
            }
        });
    }
});