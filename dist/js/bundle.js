/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/designSlider.js":
/*!****************************************!*\
  !*** ./src/js/modules/designSlider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesignSLider: () => (/* binding */ DesignSLider)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider.js");


class DesignSLider extends _slider__WEBPACK_IMPORTED_MODULE_0__.Slider {
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

/***/ }),

/***/ "./src/js/modules/features.js":
/*!************************************!*\
  !*** ./src/js/modules/features.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Features: () => (/* binding */ Features)
/* harmony export */ });
class Features {
    constructor(dots, lines, text) {
        this.dots = document.querySelectorAll(dots);
        this.lines = document.querySelectorAll(lines);
        this.text = document.querySelectorAll(text);
    }

    showContent(i) {
        this.lines[i].classList.toggle('active');
        this.text[i].classList.toggle('active');
    }

    initHandler() {
        this.dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                this.showContent(i);
            });
        });
    }
}

/***/ }),

/***/ "./src/js/modules/hoverSkate.js":
/*!**************************************!*\
  !*** ./src/js/modules/hoverSkate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hover: () => (/* binding */ Hover)
/* harmony export */ });
class Hover {
    constructor(object, src1, src2) {
        this.object = document.querySelector(object);
        this.src1 = src1;
        this.src2 = src2;
    }

    rotate() {
        this.object.classList.toggle('hover');

        // if (this.object.classList.contais('hover')) {
        //     this.object.src = this.src2;
        // } else {
        //     this.object.src = this.src1;
        // };

        setTimeout(() => {
            this.object.classList.contains('hover') ? this.object.src = this.src2 : this.object.src = this.src1;
        }, 500)
    }

    initHandler() {
        this.object.addEventListener('mouseover', this.rotate.bind(this));
        this.object.addEventListener('mouseout', this.rotate.bind(this));
    }
}

/***/ }),

/***/ "./src/js/modules/mainSlider.js":
/*!**************************************!*\
  !*** ./src/js/modules/mainSlider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainSLider: () => (/* binding */ MainSLider)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider.js");


class MainSLider extends _slider__WEBPACK_IMPORTED_MODULE_0__.Slider {
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
        if (e.deltaY === 100) {
            this.changeSlide(1, this.slideHeight, 'Y');
          };
        
          if (e.deltaY === -100) {
            this.changeSlide(-1, this.slideHeight, 'Y');
        };

        this.setActiveNav(this.counter);

        setTimeout(() => {
            this.initHandler();
        }, 300);
     }

     initHandler() {
        document.addEventListener('wheel', this.scrollHandler.bind(this),  {once: true });

        this.navItems.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                this.counter = 0;

                this.changeSlide(i, this.slideHeight, 'Y');
                this.setActiveNav(i);
            });
        });
     }

}

/***/ }),

/***/ "./src/js/modules/reviewsSlider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/reviewsSlider.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewsSlider: () => (/* binding */ ReviewsSlider)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider.js");


class ReviewsSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__.Slider {
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

    dotsHandler(target) {
        this.dots.forEach((dot, i) => {
            dot.classList.remove('active'); 
            if (dot === target.closest('.reviews__dots-slide')) {
                dot.classList.add('active');
                this.changeSlide(i);
                this.moveLine(i);
            };
        });
    }

    moveLine(n) {
        const gap = parseInt(window.getComputedStyle(this.dotsContainer).rowGap);
        const width = parseInt(window.getComputedStyle(this.dots[0]).width);
        this.line.style.left = `${(gap + width) * n}px`;
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

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slider: () => (/* binding */ Slider)
/* harmony export */ });
class Slider {

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
    }

    countDimensions() {
        this.slideHeight = parseInt(window.getComputedStyle(this.slides[0]).height);
        this.slideWidth = parseInt(window.getComputedStyle(this.slides[0]).width);

    }

    changeSlide(num, dimension, dir) {
        this.checkCounter(num);

        this.container.style.transform = `translate${dir}(-${dimension * this.counter}px)`;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_mainSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mainSlider */ "./src/js/modules/mainSlider.js");
/* harmony import */ var _modules_designSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/designSlider */ "./src/js/modules/designSlider.js");
/* harmony import */ var _modules_reviewsSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reviewsSlider */ "./src/js/modules/reviewsSlider.js");
/* harmony import */ var _modules_hoverSkate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/hoverSkate */ "./src/js/modules/hoverSkate.js");
/* harmony import */ var _modules_features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/features */ "./src/js/modules/features.js");







'use strict'


document.addEventListener('DOMContentLoaded', () => {

new _modules_mainSlider__WEBPACK_IMPORTED_MODULE_1__.MainSLider('.wrapper', '.section', '.nav', '.nav__item').initHandler();
new _modules_designSlider__WEBPACK_IMPORTED_MODULE_2__.DesignSLider('.designs__slider-box', '.designs__slide', '.designs__slider-arrows').initHandlers();
new _modules_reviewsSlider__WEBPACK_IMPORTED_MODULE_3__.ReviewsSlider('.reviews__slider-main', '.reviews__main-slide', '.reviews__slider-dots', '.reviews__dots-slide','.slider-line').initHandler();
new _modules_hoverSkate__WEBPACK_IMPORTED_MODULE_4__.Hover('.main__img', 'images/main-photo.png', 'images/griptape.png').initHandler();
new _modules_features__WEBPACK_IMPORTED_MODULE_5__.Features('.line-dot', '.line-skew', '.features__item-descr').initHandler();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map