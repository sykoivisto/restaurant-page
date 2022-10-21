import './css/index.css';
import './css/menu.css';
import './css/gift-cards.css';
import { renderHomepageContent } from './js/homepage';
import { renderMenuContent } from './js/menu';
import { renderGiftCardContent } from './js/gift-cards';

renderHomepageContent();

const styleActiveLink = (newLink) => {
    const current = document.querySelector('.nav-active');
    if (current) {
        current.classList.remove('nav-active');
    }
    newLink.classList.add('nav-active');
}

const menuNav = document.getElementById('menu-nav');
const giftCardNav = document.getElementById('gift-card-nav');
const menuButton = document.querySelector('.menu-button');

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