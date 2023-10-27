import { Slider } from "./modules/slider";
import { MainSLider } from "./modules/mainSlider";
import { DesignSLider } from "./modules/designSlider";
import { ReviewsSlider } from "./modules/reviewsSlider";

'use strict'


document.addEventListener('DOMContentLoaded', () => {

new MainSLider('.wrapper', '.section').initHandler();
new DesignSLider('.designs__slider-box', '.designs__slide', '.designs__slider-arrows').initHandlers();
new ReviewsSlider('.reviews__slider-main', '.reviews__main-slide', '.reviews__slider-dots', '.reviews__dots-slide').initHandler();

});