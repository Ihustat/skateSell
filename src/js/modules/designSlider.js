import { Slider } from "./slider";

export class DesignSLider extends Slider {
    constructor(container, slides, btnContainers) {
        super(container, slides);

        this.btnContainers = document.querySelector(btnContainers);
        this.container.style.width = `${this.slideWidth * slides.length}px`;
        this.slideWidth = 300
    }

    initHandlers() {
        this.btnContainers.addEventListener('click', (e) => {
            const target = e.target;

            if (target && target.closest('.designs__slider-prev')) {
                this.changeSlide(-1, this.slideWidth, 'X');
            };

            if (target && target.closest('.design__slider-nxt')) {
                this.changeSlide(1, this.slideWidth, 'X');
            };
        });
    }


}