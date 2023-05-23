function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');
  home.classList.add('main-item');
  const text = document.createElement('h1');
  text.textContent = 'HOME';
  home.appendChild(text);
  const main = document.querySelector('.main');
  main.appendChild(home);
}

export default createHome;
