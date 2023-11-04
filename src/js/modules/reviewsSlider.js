import { Slider } from "./slider";

export class ReviewsSlider extends Slider {
    constructor(container, slides, dotsContainer, dots, line) {
        super(container, slides);
        this.dotsContainer = document.querySelector(dotsContainer);
        this.dots = document.querySelectorAll(dots);
        this.line = document.querySelector(line);
    }

    changeSlide(num) {
        this.slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (num === i) slide.classList.add('active');
        });

    }

    moveDots(i) {
        this.counter = i;
        const width = parseInt(window.getComputedStyle(this.dots[0]).width);

        this.dotsContainer.style.transform = `translateX(-${width * this.counter}px)`
    }

    dotsHandler(target) {
        this.dots.forEach((dot, i) => {
            dot.classList.remove('active'); 
            if (dot === target.closest('.reviews__dots-slide')) {
                dot.classList.add('active');
                this.changeSlide(i);
                this.moveLine(i);
                
                if (document.documentElement.offsetWidth < 769) {
                    this.moveDots(i);
                };
            };
        });
    }

    moveLine(n) {
        const gap = parseInt(window.getComputedStyle(this.dotsContainer).rowGap);
        const width = parseInt(window.getComputedStyle(this.dots[0]).width);
        this.line.style.left = `${(gap + width * 1.1) * n}px`;
    }

    initHandler() {
        this.dotsContainer.addEventListener('click', (e) => {
            const target = e.target;

            if (target && target.closest('.reviews__dots-slide')) {
                this.dotsHandler(target);
            };
        });
    }
}