function squareCreator() {
    const container = document.querySelector('#container');
    console.log(container);
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