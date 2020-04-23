// Javascript for Etch-A-Sketch project in linked html index.html
const container = document.querySelector('#container');
const contWidth = container.Width;
const contHeight = container.Height;

function makeGrid() {
    size = prompt("Grid size?", "64");
    clearGrid();
    const divWidthHeight = contWidth / size + "px";

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (i = 0; i < (size * size); i++) {
        let gridDiv = document.createElement('div');
        gridDiv.addEventListener('mouseover', mouseEnter);
        gridDiv.style.width = divWidthHeight;
        gridDiv.style.height = divWidthHeight;
        container.appendChild(gridDiv).className = 'grid-item';
    };
};

function clearGrid() {
    let allDivs = document.querySelectorAll('.grid-item');
    allDivs.forEach(div => container.removeChild(div));
}

function mouseEnter() {
    this.classList.add("grid-item-hover")
}

const clear = document.querySelector("button")
button.addEventListener('click', makeGrid);