import { Slider } from "./slider";

export class MainSLider extends Slider {
    constructor(container, slides) {
        super(container, slides);
        this.countSlideHeight();
        this.countContainerHeight();
    }

    countSlideHeight() {
        this.slideHeight = parseInt(window.getComputedStyle(this.slides[0]).height);
    }

    countContainerHeight() {
        this.container.style.hight = `${this.slideHeight * this.slides.length}px`;
    }

    checkCounter(n) {
        this.counter += n;
        if (this.counter > this.slides.length - 1 || this.counter < 0) this.counter -= n;

        console.log(this.counter)
    }

    changeSlide(num) {
        this.checkCounter(num);

        this.container.style.transform = `translateY(-${this.slideHeight * this.counter}px)`;
    }

    scrollHandler(e) {
        if (e.deltaY === 100) {
            this.changeSlide(1);
          };
        
          if (e.deltaY === -100) {
            this.changeSlide(-1);
        };


        setTimeout(() => {
            this.initHandler();
        }, 300);
     }

     initHandler() {
        document.addEventListener('wheel', this.scrollHandler.bind(this),  {once: true });
     }

}