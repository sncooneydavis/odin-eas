makeGrid();

function makeGrid() {
    let dimension = 0;
    do {
        dimension = Number(prompt("How many boxes per side (1-100)?"));
    } while (dimension > 100 || dimension <= 0);
    const grid = document.createElement("div");
    grid.setAttribute("id", "inner-container");
    grid.style.setProperty('--grid-size', dimension);
    createGrid(dimension, grid);
}

function createGrid(dimension, grid) {
    let numberOfBoxes = dimension*dimension;
    while (numberOfBoxes > 0) {
        const newBox = document.createElement("div");
        newBox.classList.add('grid-box');
        newBox.style.backgroundColor = "black";
        newBox.style.opacity = "0";
        newBox.style.aspectRatio = "1 / 1";
        grid.appendChild(newBox);  
        numberOfBoxes--;  
    }
    const container = document.querySelector("#main-container");
    container.appendChild(grid);
    grid.addEventListener("mouseover", (event) => {
        let target = event.target;
        let currentOpacity = Number(target.style.opacity);
        if (currentOpacity<1) {
            let newOpacity = currentOpacity + 0.25; 
            target.style.opacity = newOpacity.toString();
        }
        else {
            let newOpacity = 0;
            target.style.opacity = newOpacity.toString();
        }
    });   
    const resetButton = document.querySelector("button");
    resetButton.addEventListener("click", () => {
        grid.remove();
        setTimeout(makeGrid, 1000);
    });
        
}


