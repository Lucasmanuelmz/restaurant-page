import './style.css';

function divContent() {
    let div = document.createElement('div');
    div.classList.add('content')
    let h2 = document.createElement('h2');
    h2.textContent = "Discover a Culinary Wonderland";
    div.appendChild(h2);

    let p = document.createElement('p');
    p.id ='para';
    p.textContent= `Indulge your senses at "Sabor do Vale", where every dish is a journey and every meal is a celebration. 
    We invite you to experience the magic of our kitchen, where passion meets flavor, and every bite tells a story.`;
    div.appendChild(p)

    return div;
}

export default divContent;