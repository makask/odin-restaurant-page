function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');
  contact.classList.add('main-item');
  const text = document.createElement('h1');
  text.textContent = 'Contact';
  contact.appendChild(text);
  const main = document.querySelector('.main');
  main.appendChild(contact);
}

export default createContact;
