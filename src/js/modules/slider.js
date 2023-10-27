export class Slider {

    counter = 0;
    constructor(container, slides) {
         this.container = document.querySelector(container);
         this.slides = document.querySelectorAll(slides);
         this.countDimensions();
    }

    checkCounter(n) {
        this.counter += n;

        if (this.counter > this.slides.length - 1) this.counter = 0;
        if (this.counter < 0) this.counter = this.slides.length - 1;

        console.log(this.counter);
    }

    countDimensions() {
        this.slideHeight = parseInt(window.getComputedStyle(this.slides[0]).height);
        this.slideWidth = parseInt(window.getComputedStyle(this.slides[1]).width);

    }

    changeSlide(num, dimension, dir) {
        this.checkCounter(num);

        this.container.style.transform = `translate${dir}(-${dimension * this.counter}px)`;
    }
}
