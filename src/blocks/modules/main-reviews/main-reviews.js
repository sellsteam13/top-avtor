import Swiper, { Navigation, EffectFade } from 'swiper';
Swiper.use([Navigation, EffectFade]);

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.main-reviews-aside') && window.innerWidth < 993 && !document.body.classList.contains('mobile-mode')) {
        sliderInit();
        document.body.classList.add('mobile-mode');
        console.log(1);
    } else {
        window.addEventListener('resize', () => {
            if (document.querySelector('.main-reviews-aside') && window.innerWidth < 993 && !document.body.classList.contains('mobile-mode')) {
                sliderInit();
                document.body.classList.add('mobile-mode');
            } else if (document.querySelector('.main-reviews-aside') && window.innerWidth > 992 && document.body.classList.contains('mobile-mode')) {
                sliderDestroy();
                document.body.classList.remove('mobile-mode');
            }
        })
    }
});

const sliderInit = () => {
    const wrapper = document.querySelector('.main-reviews-aside');
    const sliderInner = wrapper.querySelector('.main-reviews-aside-list');
    const counterInner = wrapper.querySelector('.main-reviews-aside-controls__curr');

    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = 'swiper-wrapper';

    const slides = sliderInner.querySelectorAll('.main-reviews-aside__company');

    slides.forEach(slide => {
        slide.classList.add('swiper-slide');
        sliderWrapper.appendChild(slide);
    });
    sliderInner.appendChild(sliderWrapper);

    const swiperSlider = new Swiper(sliderInner, {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            prevEl: '.main-reviews-aside__prev',
            nextEl: '.main-reviews-aside__next',
        },
        on: {
            slideChange: () => {
                counterInner.innerHTML = swiperSlider.activeIndex + 1;
            }
        }
    });
    window.swiperSlider = swiperSlider;
}

const sliderDestroy = () => {
    swiperSlider.destroy();
    const wrapper = document.querySelector('.main-reviews-aside');
    const sliderInner = wrapper.querySelector('.main-reviews-aside-list');
    const sliderWrapper = wrapper.querySelector('.swiper-wrapper');
    const slides = sliderInner.querySelectorAll('.main-reviews-aside__company');
    const counterInner = wrapper.querySelector('.main-reviews-aside-controls__curr');
    slides.forEach(each => {
        each.classList.remove('swiper-slide');
        sliderInner.appendChild(each);
    });
    sliderWrapper.parentElement.removeChild(sliderWrapper);
    counterInner.innerHTML = '1';
}