import cover from '../src/img/restaurant.png'
import '../src/style.css';

function coverComponent() {
    const divCont = document.createElement('div');
    divCont.id = 'content';
    divCont.style.backgroundImage = `url(${cover})`;

    return divCont;
}

export default coverComponent;