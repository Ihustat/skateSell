import { Slider } from "./modules/slider";
import { MainSLider } from "./modules/mainSlider";
'use strict'


document.addEventListener('DOMContentLoaded', () => {

const mainSLider = new MainSLider('.wrapper', '.section');
mainSLider.initHandler();
});