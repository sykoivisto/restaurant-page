const menuArr = [
    {
        item: 'Cappuccino',
        desc: 'One part espresso, one part milk, and one part foam',
        price: '3.50'
    },
    {
        item: 'Latte',
        desc: 'Espresso and steamed milk with a touch of foam',
        price: '4.25'
    },
    {
        item: 'Mocha',
        desc: 'Espresso, steamed milk, and chocolate',
        price: '4.50'
    },
    {
        item: 'Americano',
        desc: 'With hot water',
        price: '2.50'
    },
    {
        item: 'Flat White',
        desc: 'With steamed milk',
        price: '2.50'
    },
    {
        item: 'Cafe Breve',
        desc: 'With half & half',
        price: '2.50'
    },
    {
        item: 'Con Panna',
        desc: 'With whipped cream',
        price: '3.25'
    },
    {
        item: 'Macchiato',
        desc: 'Espresso with a dollop of foam',
        price: '1.50'
    }
]
const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const title = document.createElement('h1');
    title.innerText = 'Our Menu';
    
    const ul = document.createElement('ul');

    for (let item of menuArr) {
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

const renderMenuContent = () => {
    const content = document.querySelector('.content');

    content.appendChild(createMenu());
}

export {
    renderMenuContent
}