import { Slider } from "./modules/slider";
import { MainSLider } from "./modules/mainSlider";
import { DesignSLider } from "./modules/designSlider";
'use strict'


document.addEventListener('DOMContentLoaded', () => {

new MainSLider('.wrapper', '.section').initHandler();
new DesignSLider('.designs__slider-box', '.designs__slide', '.designs__slider-arrows').initHandlers();

});