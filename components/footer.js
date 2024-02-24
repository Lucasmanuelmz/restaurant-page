import '../src/style.css';

function footer() {
    const footer = document.createElement('footer');
    const div = document.createElement('div');
    div.classList.add('footer-div');
    const span = document.createElement('span');
    span.innerHTML='&copy;Lucas Manuel';
    div.appendChild(span);
    footer.appendChild(div);

    return footer;
}

export default footer;