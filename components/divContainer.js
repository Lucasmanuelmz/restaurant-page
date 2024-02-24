import divContent from "./divContent.js";
import '../src/style.css';
import cardComponent from "./cardComponent.js";
import beliveContainer from "./beliveContainer.js";

function divContainer() {
    let div = document.createElement('div');
    div.classList.add('container');
    div.appendChild(divContent());

    const h3 = document.createElement('h3');
    h3.textContent = `Why Choose Us?`;
    div.appendChild(h3);

    div.appendChild(cardComponent());
    div.appendChild(beliveContainer());

    return div;
}

export default divContainer;