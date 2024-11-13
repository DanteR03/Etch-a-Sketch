const cellContainer = document.querySelector("#divs-container");
const button1 = document.querySelector("#button-one");
const button2 = document.querySelector("#button-two");
button1.addEventListener("click", clearBoard);
button2.addEventListener("click", () => {
    let gridSize = prompt("Enter grid size(16 for 16x16, max 100)");
    createGrid(gridSize);
})

function colorCell(cellEvent) {
    cellEvent.target.classList.add("colored-cell");
}

function clearBoard() {
    cellContainer.innerHTML = "";
}

function createGrid(size) {
    clearBoard();
    // Container is square //
    let cellContainerWidth = 600;
    if (size <= 100) {
        for (i = 0; i < size * size; i++) {
            const cellWidth = cellContainerWidth / size;
            const cellHeight = cellWidth;
            const cell = document.createElement("div");
            cell.style.width = `${cellWidth}px`;
            cell.style.height = `${cellHeight}px`;
            cell.addEventListener("mouseenter", colorCell);
            cellContainer.appendChild(cell);
        }
    }
}

createGrid(16);

