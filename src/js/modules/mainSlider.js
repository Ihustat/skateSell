import { Slider } from "./slider";

export class MainSLider extends Slider {
    constructor(container, slides) {
        super(container, slides);
    }

    checkCounter(n) {
        this.counter += n;
        if (this.counter > this.slides.length - 1 || this.counter < 0) this.counter -= n;
    }

    scrollHandler(e) {
        if (e.deltaY === 100) {
            this.changeSlide(1, this.slideHeight, 'Y');
          };
        
          if (e.deltaY === -100) {
            this.changeSlide(-1, this.slideHeight, 'Y');
        };


        setTimeout(() => {
            this.initHandler();
        }, 300);
     }

     initHandler() {
        document.addEventListener('wheel', this.scrollHandler.bind(this),  {once: true });
     }

}