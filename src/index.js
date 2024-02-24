
import coverComponent from '../components/coverContent';
import createInitSection from './intro';
import './style.css';

function App() {
    const container = document.createElement('div');
    container.id = 'container';
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    header.appendChild(nav);
    const btn = document.createElement('button');
    btn.textContent= 'Home';
    nav.appendChild(btn);
    const btnOne = document.createElement('button');
    btnOne.textContent='Contact';
    nav.appendChild(btnOne);
    const btnTwo = document.createElement('button');
    btnTwo.textContent='About';
    nav.appendChild(btnTwo);

    const main = document.createElement('main');
    main.appendChild = (coverComponent());
    main.appendChild(createInitSection())

    container.appendChild(header);
    container.appendChild(main);

    return container;
}
Document,addEventListener('DOMContentLoaded', () => {
  const appContainer = App()
  document.body.appendChild(appContainer);
})

