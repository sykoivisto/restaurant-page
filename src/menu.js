const menu = [
    {
        item: 'Cappuccino',
        desc: 'One part espresso, one part milk, and one part foam',
        price: '3.50'
    }
]
const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const title = document.createElement('h1');
    title.innerText = 'Our Menu';
    
    const ul = document.createElement('ul');

    for (let item of menu) {
        const listItem = document.createElement('li');

        const nameAndDesc = document.createElement('div');
        nameAndDesc.classList.add('item');

        const itemName = document.createElement('p');
        itemName.innerText = item.item;

        const itemDesc = document.createElement('p');
        itemDesc.innerText = item.desc;

        nameAndDesc.appendChild(itemName);
        nameAndDesc.appendChild(itemDesc);

        const price = document.createElement('p');
        price.classList.add('price');
        price.innerText = item.price;

        listItem.appendChild(nameAndDesc);
        listItem.appendChild(price);

        ul.appendChild(listItem);
    }

    menu.appendChild(title);
    menu.appendChild(ul);

    return menu;
}

const renderContent = () => {
    const content = document.querySelector('.content');

    content.appendChild(createMenu());
}