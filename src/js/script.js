import { MainSLider } from "./modules/mainSlider";
import { DesignSLider } from "./modules/designSlider";
import { ReviewsSlider } from "./modules/reviewsSlider";
import { Hover } from "./modules/hoverSkate";
import { Features } from "./modules/features";
import { Map } from "./modules/map";
import { Burger } from "./modules/burger";

'use strict'
document.addEventListener('DOMContentLoaded', () => {


new MainSLider('.wrapper', '.section', '.nav', '.nav__item').initHandler();
new DesignSLider('.designs__slider-box', '.designs__slide', '.designs__slider-arrows').initHandlers();
new ReviewsSlider('.reviews__slider-main', '.reviews__main-slide', '.reviews__slider-dots', '.reviews__dots-slide','.slider-line').initHandler();
new Hover('.main__img', 'images/main-photo.png', 'images/griptape.png').initHandler();
new Features('.line-dot', '.line-skew', '.features__item-descr').initHandler();
new Map('.map', '.place').initMap();
new Burger('.burger', '.nav').initHandler();
});