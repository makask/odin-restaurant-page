function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.classList.add('main-item');
  const text = document.createElement('h1');
  text.textContent = 'MENU';
  menu.appendChild(text);
  const main = document.querySelector('.main');
  main.appendChild(menu);
}

export default createMenu;
