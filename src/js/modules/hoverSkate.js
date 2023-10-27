export class Hover {
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