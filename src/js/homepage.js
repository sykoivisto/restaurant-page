import logoSrc from '../img/coffeecup.png';

const createJumbotron = () => {
    const jumbotron = document.createElement('div');
    jumbotron.classList.add('jumbotron');

    const logo = new Image();
    logo.src = logoSrc;
    jumbotron.appendChild(logo);
    
    const header = document.createElement('h1');
    header.innerText = 'Morning Coffee'

    const subHeader = document.createElement('h3');
    subHeader.innerText = 'Start your day right';

    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button')
    menuButton.innerText = 'View Our Menu';

    jumbotron.appendChild(header);
    jumbotron.appendChild(subHeader);
    jumbotron.appendChild(menuButton);

    return jumbotron;
}

const renderHomepageContent = () => {
    const content = document.querySelector('.content');

    content.appendChild(createJumbotron());
}

export {
    renderHomepageContent
}