import divContent from "./divContent.js";
import './style.css';

function divContainer() {
    let div = document.createElement('div');
    div.classList.add('container');
    div.appendChild(divContent());

    return div;
}

export default divContainer;