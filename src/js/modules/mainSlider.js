import { Slider } from './slider';
import { Burger } from './burger';
export class MainSLider extends Slider {
  constructor(container, slides, navMenu, navItems) {
    super(container, slides);
    this.navMenu = document.querySelector(navMenu);
    this.navItems = document.querySelectorAll(navItems);
    this.slideHeight = parseInt(window.getComputedStyle(this.slides[0]).height);
    this.touchStart;
    this.touchEnd;
  }

  checkCounter(n) {
    this.counter += n;
    if (this.counter > this.slides.length - 1 || this.counter < 0)
      this.counter -= n;
  }

  setActiveNav(n) {
    this.navItems.forEach((item) => {
      item.classList.remove('active');
    });

    this.navItems[n].classList.add('active');
  }

  changeHandler(e) {
    if (!e.target.closest('nav') && e.target.tagName !== 'YMAPS') {
      if (e.deltaY === 100 || this.touchStart > this.touchEnd) {
        this.changeSlide(1, this.slideHeight, 'Y');
      }

      if (e.deltaY === -100 || this.touchEnd > this.touchStart) {
        this.changeSlide(-1, this.slideHeight, 'Y');
      }

      this.setActiveNav(this.counter);
    }
    setTimeout(() => {
      this.initHandler();
    }, 300);
  }

  touchStartHandler(e) {
    this.touchStart = e.touches[0].clientY;
  }

  touchEndHandler(e) {
    this.touchEnd = e.changedTouches[0].clientY;
    this.changeHandler(e);
  }

  clickHandler() {
    this.navItems.forEach((item, i) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();

        this.counter = 0;

        this.changeSlide(i, this.slideHeight, 'Y');
        this.setActiveNav(i);

        new Burger('.burger', '.nav').clickHandler();
      });
    });
  }

  initHandler() {
    document.addEventListener('wheel', this.changeHandler.bind(this), {
      once: true,
    });

    document.addEventListener('touchstart', this.touchStartHandler.bind(this), {
      once: true,
    });

    document.addEventListener('touchend', this.touchEndHandler.bind(this), {
      once: true,
    });

    this.clickHandler();
  }
}
