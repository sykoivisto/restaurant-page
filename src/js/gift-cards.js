const createGiftCard = () => {
    const giftCards = document.createElement('div');
    giftCards.classList.add('gift-cards');

    const h1 = document.createElement('h1');
    h1.innerText = 'Got a gift card?';
    giftCards.appendChild(h1);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const purchase = document.createElement('button');
    purchase.innerText = 'Purchase or Reload';
    buttons.appendChild(purchase);

    const checkBalance = document.createElement('button');
    checkBalance.innerText = 'Check Balance';
    buttons.appendChild(checkBalance);

    giftCards.appendChild(buttons);

    return giftCards
}

const renderGiftCardContent = () => {
    const content = document.querySelector('.content');

    content.appendChild(createGiftCard());
}

export {
    renderGiftCardContent
}