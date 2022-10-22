import logoSrc from '../img/coffeecup.png';

const renderLogo = () => {
    const nav = document.getElementById('logo');
    const navLogo = new Image();
    navLogo.src = logoSrc;
    nav.appendChild(navLogo);
}

export {
    renderLogo
}