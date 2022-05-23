function squareCreator() {
    const container = document.querySelector('#container');
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
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
    console.log(e.target);
    const box = e.target
    box.style.backgroundColor = 'black';
})