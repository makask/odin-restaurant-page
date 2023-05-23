function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');
  home.classList.add('main-item');
  home.appendChild(createWelcomeSection());
  const main = document.querySelector('.main');
  main.appendChild(home);
}

function createWelcomeSection() {
  const welcomeText = document.createElement('div');
  welcomeText.classList.add('welcome');
  welcomeText.appendChild(createText('Welcome to Dad Bod Grill!!!'));
  welcomeText.appendChild(createText('Best grill in town!'));
  welcomeText.appendChild(createPicture());
  welcomeText.appendChild(
    createText(
      'Everyone is welcome here, especially men who want to get pregnant!'
    )
  );
  return welcomeText;
}

function createPicture() {
  const welcomePicture = document.createElement('img');
  welcomePicture.classList.add('welcomePic');
  welcomePicture.src = 'images/dad-bod-couple.jpg';
  return welcomePicture;
}

function createText(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

export default createHome;
