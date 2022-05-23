const container = document.querySelector('#container');

function squareCreator(size = 16) {
    container.style.gridArea= `1 / span ${size}`;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.classList.add('box');
            square.style.gridColumn = `${1 + j}`;
            square.style.gridRow = `${1 + i}`;
            container.appendChild(square);
        }
    }
};

squareCreator();


const colorChange = window.addEventListener('mouseover', function(e){
    if (e.target.className == 'box') {
        const box = e.target
        box.style.backgroundColor = 'black';
    }
});

const sizeButton = document.querySelector('#size');
sizeButton.addEventListener('click', function(e) {
    let sizePrompt = prompt('Enter grid size(must be smaller than 100): ')
    if (sizePrompt > 100 || sizePrompt < 0) {
        sizePrompt = prompt('Please try again: ');
    } else {
        let size = sizePrompt;
        console.log(size);
        let squares = document.querySelectorAll('#box');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        squareCreator(size);
    }
});