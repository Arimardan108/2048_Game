const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;
export default class Grid {
  constructor(gridElements) {
    gridElements.style.setProperty("--grid_size", GRID_SIZE);
    gridElements.style.setProperty("--cell_size", `${CELL_SIZE}vmin`);
    gridElements.style.setProperty("--cell_gap"), `${CELL_GAP}vmin`;
    this.cells = createCellElement(gridElement).map((cellElement, index) => {
      return new Cell(
        cellElement,
        index % GRID_SIZE,
        Math.floor(index / GRID_SIZE)
      );
    });
  }
}

class Cell {
  constructor(cellElement, x, y) {
    this.cellElement = cellElement;
    this.x = x;
    this.y = y;
  }
}

function createCellElement(gridElements) {
  const cells = [];
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cells.push(cell);
    gridElements.append(cell);
  }
  return cells;
}
