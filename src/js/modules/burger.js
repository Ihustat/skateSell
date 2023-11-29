export class Burger {
  constructor(burger, menu) {
    this.burger = document.querySelector(burger);
    this.menu = document.querySelector(menu);
  }

  clickHandler() {
    this.menu.classList.toggle('active');

    const img = this.burger.querySelector('img');

    this.menu.classList.contains('active')
      ? (img.src = 'images/icons/break-burger-logo.png')
      : (img.src = 'images/icons/burger-logo.png');
  }

  menuHandler(e) {
    const target = e.target;

    if (
      target &&
      (target.classList.contains('.nav__item') || target.closest('.nav__item'))
    ) {
      this.clickHandler();
    }
  }

  initHandler() {
    this.burger.addEventListener('click', this.clickHandler.bind(this));

    this.menu.addEventListener('click', (e) => {
      this.menuHandler(e);
    });
  }
}
