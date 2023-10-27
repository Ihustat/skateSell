export class Slider {

    counter = 0;
    constructor(container, slides) {
         this.container = document.querySelector(container);
         this.slides = document.querySelectorAll(slides);
    }

    checkCounter(n) {
        this.counter += n;

        if (this.counter > this.slides.length - 1) this.counter = 0;
        if (this.counter < 0) this.counter = this.slides.length - 1;

        console.log(this.counter);
    }
}
