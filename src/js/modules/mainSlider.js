import { Slider } from "./slider";

export class MainSLider extends Slider {
    constructor(container, slides, navMenu, navItems) {
        super(container, slides);
        this.navMenu = document.querySelector(navMenu);
        this.navItems = document.querySelectorAll(navItems);
        this.slideHeight = parseInt(window.getComputedStyle(this.slides[0]).height);
    }

    checkCounter(n) {
        this.counter += n;
        if (this.counter > this.slides.length - 1 || this.counter < 0) this.counter -= n;
    }

    setActiveNav(n) {
        this.navItems.forEach(item => {
            item.classList.remove('active');
        });

        this.navItems[n].classList.add('active');
    }

    scrollHandler(e) {
        if (e.target.tagName !== 'YMAPS') {
            if (e.deltaY === 100) {
                this.changeSlide(1, this.slideHeight, 'Y');
              };
            
              if (e.deltaY === -100) {
                this.changeSlide(-1, this.slideHeight, 'Y');
            };
    
            this.setActiveNav(this.counter);
        };
        setTimeout(() => {
            this.initHandler();
        }, 300);
     }

     clickHandler() {
        this.navItems.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                this.counter = 0;

                this.changeSlide(i, this.slideHeight, 'Y');
                this.setActiveNav(i);
            });
        });
     }

     initHandler() {
        document.addEventListener('wheel', this.scrollHandler.bind(this),  {once: true });

        this.clickHandler();
     }

}