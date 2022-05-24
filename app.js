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

let down = false;
document.addEventListener('mousedown', () => down = true); 
document.addEventListener('mouseup', () => down = false);

console.log(down)
const colorChange = window.addEventListener('mouseover', function(e){
    console.log(down);
    if (e.target.className == 'box' && down == true) {
        const box = e.target
        box.style.backgroundColor = 'black';
    } else {
        return
    }
});


const sizeButton = document.querySelector('#size');
sizeButton.addEventListener('click', function(e) {
    let sizePrompt = prompt('Enter grid size(must be smaller than 100): ')
    if (sizePrompt > 100 || sizePrompt < 0 || sizePrompt == null) {
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

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function(e) {
    const squares = document.querySelectorAll('.box');
    for (square of squares) {
        square.style.backgroundColor = 'white';
    }
})