const createCredits = () => {

    const container = document.createElement('div');
    container.classList.add('credits');

    const background = document.createElement('a');
    background.href = 'http://www.freepik.com';
    background.innerText = 'Background image designed by macrovector / Freepik'

    const logo = document.createElement('a');
    logo.href = 'https://www.vecteezy.com/members/andriandesain';
    logo.innerText = 'Logo by Andrian Kusumawardana / Vecteezy';

    const content = document.querySelector('.content');

    container.appendChild(background);
    container.appendChild(logo);

    content.appendChild(container);
}


export {
    createCredits
}





/* <a href="http://www.freepik.com"></a>
<a href="https://www.vecteezy.com/members/andriandesain">L/a> */