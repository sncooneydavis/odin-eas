makeGrid();

function makeGrid() {
    let dimension = 0;
    do {
        dimension = Number(prompt("How many boxes per side (1-100)?"));
    } while (dimension > 100 || dimension <= 0);
    const grid = document.getElementById("main-container");
    grid.style.setProperty('--grid-size', dimension);
    createGrid(dimension, grid);
}

function createGrid(dimension, grid) {
    let x = dimension*dimension;
    while (x > 0) {
        const newBox = document.createElement("div");
        newBox.classList.add('grid-box');
        newBox.style.backgroundColor = "black";
        newBox.style.opacity = "0";
        newBox.style.aspectRatio = "1 / 1";
        grid.appendChild(newBox);  
        x--;  
    }
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
        const toDelete = document.querySelectorAll(".grid-box");
        toDelete.forEach((box) => box.remove());
        makeGrid();
    });
        
}


