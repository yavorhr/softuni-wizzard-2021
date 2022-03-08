function gameFactory() {
    let factory = [];

    let startScreen = document.querySelector('.start-screen');
    let playScreen = document.querySelector('.play-screen');
    let wizzardElement = createWizzard(100, 200);

    playScreen.appendChild(wizzardElement);

    Object.defineProperties(factory, {
        startScreen: {
            get: () => startScreen
        }, playScreen: {
            get: () => playScreen
        }, wizzardElement

    });

    return factory;
}

function createWizzard(posX, posY) {
    let wizzardElement = document.createElement('div');
    wizzardElement.classList.add('wizzard');
    wizzardElement.style.top = posX + 'px';
    wizzardElement.style.left = posY + 'px';

    return wizzardElement;
}