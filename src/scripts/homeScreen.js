const logoPath = './src/assets/logo.svg';
const titlePath = './src/assets/title.svg';
const leftGiftPath = './src/assets/left-gift.svg';
const rightGiftPath = './src/assets/right-gift.svg';

export function showHomeScreen() {
    const rootDiv = document.createElement('div');
    rootDiv.classList.add('home-screen');

    const logoImg = document.createElement('img');
    logoImg.classList.add('home-logo');
    logoImg.src = logoPath;

    const titleImg = document.createElement('img');
    titleImg.classList.add('home-title');
    titleImg.src = titlePath;

    const leftGiftImg = document.createElement('img');
    leftGiftImg.classList.add('home-left-gift');
    leftGiftImg.src = leftGiftPath;

    const rightGiftImg = document.createElement('img');
    rightGiftImg.classList.add('home-right-gift');
    rightGiftImg.src = rightGiftPath;

    const continueParagraph = document.createElement('p');
    continueParagraph.classList.add('home-continue-paragraph');
    continueParagraph.textContent = 'Press ANY key to continue';

    rootDiv.appendChild(logoImg);
    rootDiv.appendChild(titleImg);
    rootDiv.appendChild(continueParagraph);
    rootDiv.appendChild(leftGiftImg);
    rootDiv.appendChild(rightGiftImg);
    
    return document.body.replaceChildren(rootDiv);
}