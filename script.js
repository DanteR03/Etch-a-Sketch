const cellContainer = document.querySelector("#divs-container");

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
            cellContainer.appendChild(cell);
        }
    }
}

