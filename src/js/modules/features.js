export class Features {
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