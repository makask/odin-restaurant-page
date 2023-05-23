function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');
  contact.classList.add('main-item');

  contact.appendChild(
    createContactInfo(
      '123 323 345',
      'Suur-Karja 8, Tallinn',
      'images/address.png'
    )
  );

  const main = document.querySelector('.main');
  main.appendChild(contact);
}

function createContactInfo(phoneNumber, address, imageSrc) {
  const contact = document.createElement('div');
  contact.classList.add('contact-wrapper');

  const phoneInfo = document.createElement('div');
  phoneInfo.classList.add('phone-info');

  const phoneIcon = document.createElement('img');
  phoneIcon.classList.add('icon');
  phoneIcon.src = 'images/phone.svg';

  const telephone = document.createElement('p');
  telephone.classList.add('phone');
  telephone.textContent = phoneNumber;

  phoneInfo.appendChild(phoneIcon);
  phoneInfo.appendChild(telephone);

  const addressInfo = document.createElement('div');
  addressInfo.classList.add('address-info');

  const homeIcon = document.createElement('img');
  homeIcon.classList.add('icon');
  homeIcon.src = 'images/home.svg';

  const contactAddress = document.createElement('p');
  contactAddress.classList.add('address');
  contactAddress.textContent = address;

  addressInfo.appendChild(homeIcon);
  addressInfo.appendChild(contactAddress);

  contact.appendChild(phoneInfo);
  contact.appendChild(addressInfo);
  contact.appendChild(addContactPicture(imageSrc));

  return contact;
}

function addContactPicture(imageSrc) {
  const contactImage = document.createElement('img');
  contactImage.classList.add('contact-img');
  contactImage.src = imageSrc;
  return contactImage;
}

export default createContact;
