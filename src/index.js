import './css/index.css';
import './css/menu.css';
import './css/gift-cards.css';
import './css/credits.css'
import { renderHomepageContent } from './js/homepage';
import { renderMenuContent } from './js/menu';
import { renderGiftCardContent } from './js/gift-cards';
import { renderLogo } from './js/logo'
import { createCredits } from './js/credits'

renderHomepageContent();

renderLogo();

const styleActiveLink = (newLink) => {
    const current = document.querySelector('.nav-active');
    if (current) {
        current.classList.remove('nav-active');
    }
    if (newLink) {
        newLink.classList.add('nav-active');
    }
}

const menuNav = document.getElementById('menu-nav');
const giftCardNav = document.getElementById('gift-card-nav');
const menuButton = document.querySelector('.menu-button');
const logoNav = document.getElementById('logo');

logoNav.onclick = () => {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    styleActiveLink();
    renderHomepageContent();
}

menuButton.onclick = () => {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    styleActiveLink(menuNav);
    renderMenuContent();
}

menuNav.onclick = (event) => {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    styleActiveLink(event.target);
    renderMenuContent();
}

giftCardNav.onclick = (event) => {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    styleActiveLink(event.target);
    renderGiftCardContent();
}


const viewCredits = document.getElementById('view-credits');

viewCredits.onclick = () => {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    styleActiveLink();
    createCredits();
}