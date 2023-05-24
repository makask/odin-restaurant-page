function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.classList.add('main-item');

  menu.appendChild(
    addMenuItem(
      'Pulled pork',
      'Low and slow pulled pork, smoked with local apple wood',
      'images/pulledpork.png'
    )
  );

  menu.appendChild(
    addMenuItem(
      'Brisket',
      'Tender brisket, low and slow smoked with local hickory wood',
      'images/brisket.png'
    )
  );

  menu.appendChild(
    addMenuItem(
      'BBQ Smoked Kielbasa',
      'Low & Slow, glazed with American Sweet BBQ',
      'images/kielbasa.png'
    )
  );

  menu.appendChild(
    addMenuItem(
      'St. Louis Style Ribs, Full Rack',
      'Low and slow smoked with local cherry wood',
      'images/stlouisribs.png'
    )
  );

  menu.appendChild(
    addMenuItem(
      'BBQ Bacon Cheddar Burger',
      'Smoked bacon, BBQ sauce, & cheddar cheese',
      'images/cheddar.png'
    )
  );

  menu.appendChild(
    addMenuItem(
      'Texas Burger',
      'Texas chili, yellow onions, & yellow mustard',
      'images/texas.png'
    )
  );

  const main = document.querySelector('.main');
  main.appendChild(menu);
}

function addMenuItem(name, description, imageSource) {
  const item = document.createElement('div');
  item.classList.add('menu-item');
  item.appendChild(addMenuItemImage(imageSource));
  const itemName = document.createElement('p');
  itemName.classList.add('menu-item-name');
  itemName.textContent = name;
  const itemDescription = document.createElement('p');
  itemDescription.classList.add('menu-item-description');
  itemDescription.textContent = description;
  item.appendChild(itemName);
  item.appendChild(itemDescription);
  return item;
}

function addMenuItemImage(imageSrc) {
  const itemImage = document.createElement('img');
  itemImage.classList.add('menu-item-img');
  itemImage.src = imageSrc;
  return itemImage;
}

export default createMenu;
