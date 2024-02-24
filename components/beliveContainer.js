import '../src/style.css';

function beliveContainer() {
    const div = document.createElement('div');
    div.classList.add(`finaly`);

    const h3 = document.createElement('h3');
    h3.textContent='Join Us for a Memorable Dining Experience';
    div.appendChild(h3)

    const p = document.createElement('p');
    p.textContent=`At "Sabor do Vale", we believe in creating moments that linger on your taste buds and memories that last a lifetime. 
    Come, be a part of our culinary journey, where every meal is a celebration of good food, good company, and the joy of savoring the moment.`
    div.appendChild(p);

    return div;

}

export default beliveContainer;