import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

function createHeader() {
  const header = document.createElement('div');
  header.classList.add('header');
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Dad bod grill';
  header.appendChild(restaurantName);
  header.appendChild(createNavBar());
  return header;
}

function createNavBar() {
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');
  //Home
  const homeButton = document.createElement('button');
  homeButton.setAttribute('id', 'homeButton');
  homeButton.classList.add('navButton');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', () => {
    removeFirstChild();
    createHome();
  });
  //Menu
  const menuButton = document.createElement('button');
  menuButton.setAttribute('id', 'menuButton');
  menuButton.classList.add('navButton');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', () => {
    removeFirstChild();
    createMenu();
  });
  //Contact
  const contactButton = document.createElement('button');
  contactButton.setAttribute('id', 'contactButton');
  contactButton.classList.add('navButton');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', () => {
    removeFirstChild();
    createContact();
  });

  navbar.appendChild(homeButton);
  navbar.appendChild(menuButton);
  navbar.appendChild(contactButton);

  return navbar;
}

function removeFirstChild() {
  const main = document.querySelector('.main');
  const firstChild = document.querySelector('.main-item');
  main.removeChild(firstChild);
}

function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  return main;
}

function createWebsite() {
  const content = document.querySelector('#content');
  content.appendChild(createHeader());
  content.appendChild(createMain());
  createHome();
}

export default createWebsite;
