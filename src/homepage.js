const createNav = () => {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const menu = document.createElement('a');
    menu.innerText = 'Menu';
    menu.href = '#';

    const giftCards = document.createElement('a');
    giftCards.innerText = 'Gift Cards';
    giftCards.href = '#'

    const findUs = document.createElement('a');
    findUs.innerText = 'Find Us';
    findUs.href = '#';

    nav.appendChild(menu);
    nav.appendChild(giftCards);
    nav.appendChild(findUs);

    return nav;
}

const createJumbotron = () => {
    const jumbotron = document.createElement('div');
    jumbotron.classList.add('jumbotron');

    const header = document.createElement('h1');
    header.innerText = 'Morning Coffee'

    const subHeader = document.createElement('h3');
    subHeader.innerText = 'Start your day right';

    const menuButton = document.createElement('button');
    menuButton.innerText = 'View Our Menu';

    jumbotron.appendChild(header);
    jumbotron.appendChild(subHeader);
    jumbotron.appendChild(menuButton);

    return jumbotron;
}

const renderContent = () => {
    const content = document.querySelector('.content');

    content.appendChild(createNav());
    content.appendChild(createJumbotron());
}

export {
    renderContent
}