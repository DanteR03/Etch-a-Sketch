const cellContainer = document.querySelector("#divs-container");

function colorCell(cellEvent) {
    cellEvent.target.classList.add("colored-cell");
}

function createGrid(size) {
    cellContainer.innerHTML = "";
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

