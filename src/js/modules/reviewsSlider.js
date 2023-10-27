import { Slider } from "./slider";

export class ReviewsSlider extends Slider {
    constructor(container, slides, dotsContainer, dots) {
        super(container, slides);
        this.dotsContainer = document.querySelector(dotsContainer);
        this.dots = document.querySelectorAll(dots);
    }

    changeSlide(num) {
        this.slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (num === i) slide.classList.add('active');
        });

    }

    initHandler() {
        this.dotsContainer.addEventListener('click', (e) => {
            const target = e.target;

            if (target && target.closest('.reviews__dots-slide')) {
                this.dots.forEach((dot, i) => {
                    dot.classList.remove('active'); 
                    if (dot === target.closest('.reviews__dots-slide')) {
                        dot.classList.add('active');
                        this.changeSlide(i);
                    };
                });
            }
        });
    }
}