import chef from '../src/img/chef.png';
import family from '../src/img/family.png';
import cardapio from '../src/img/cardapio.png';
import '../src/style.css';

function cardComponent() {
    const container = document.createElement('div');
    container.classList.add('content-container');

    const card1 = document.createElement('div');
    card1.classList.add('card');
    const figure1 = document.createElement('figure');
    const image1 = document.createElement('img');
    image1.src = chef;
    figure1.appendChild(image1);
    card1.appendChild(figure1)

    const div = document.createElement('div');
    const title1 = document.createElement('h3');
    title1.textContent='Exquisite Flavors';
    div.appendChild(title1);
    card1.appendChild(div)
    container.appendChild(card1);

    const p1 = document.createElement('p');
    p1.textContent=` Our chefs craft each dish with care, using the finest ingredients to 
    bring you a symphony of flavors.`;
    div.appendChild(p1);

    const card2 = document.createElement('div');
    card2.classList.add('card');
    const figure2 = document.createElement('figure');
    const image2 = document.createElement('img');
    image2.src = family;
    figure2.appendChild(image2);
    card2.appendChild(figure2)

    const div2 = document.createElement('div');
    const title2 = document.createElement('h3');
    title2.textContent='Warm Atmosphere'
    div2.appendChild(title2);
    card2.appendChild(div2)
    container.appendChild(card2);

    const p2 = document.createElement('p');
    p2.textContent=`Feel at home in our cozy and inviting space, 
    perfect for family dinners, date nights, or casual gatherings with friends.`;
    div2.appendChild(p2);

    const card3 = document.createElement('div');
    card3.classList.add('card');
    const figure3 = document.createElement('figure');
    const image3 = document.createElement('img');
    image3.src = cardapio;
    figure3.appendChild(image3);
    card3.appendChild(figure3)

    const div3 = document.createElement('div');
    const title3 = document.createElement('h3');
    title3.textContent='Diverse Menu';
    div3.appendChild(title3);
    card3.appendChild(div3)
    container.appendChild(card3);

    const p3 = document.createElement('p');
    p3.textContent=`From savory appetizers to delectable desserts, 
    our menu is a culinary adventure that caters to all tastes and preferences.`;
    div3.appendChild(p3);

    return container;
}

export default cardComponent;