import '../src/style.css';

function titleComponent() { 
    const divTitle = document.createElement('div');
    divTitle.classList.add(`title`);
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to "Sabor do Vale"!';
    divTitle.appendChild(h1);

     return divTitle;
}

export default titleComponent;