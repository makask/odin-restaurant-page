function createHeader() {
  const content = document.querySelector('#content');
  const header = document.createElement('div');
  // Create restaurant name
  header.classList.add('header');
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Dad bod grill';
  header.appendChild(restaurantName);
  // Create navigation bar
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');
  //Create nav buttons
  //Home
  const homeButton = document.createElement('button');
  homeButton.setAttribute('id', 'homeButton');
  homeButton.classList.add('navButton');
  homeButton.textContent = 'Home';
  //Menu
  const menuButton = document.createElement('button');
  menuButton.setAttribute('id', 'menuButton');
  menuButton.classList.add('navButton');
  menuButton.textContent = 'Menu';
  //Contact
  const contactButton = document.createElement('button');
  contactButton.setAttribute('id', 'contactButton');
  contactButton.classList.add('navButton');
  contactButton.textContent = 'Contact';

  navbar.appendChild(homeButton);
  navbar.appendChild(menuButton);
  navbar.appendChild(contactButton);

  header.appendChild(navbar);

  content.appendChild(header);
}

function createWebsite() {
  createHeader();
}

export default createWebsite;
