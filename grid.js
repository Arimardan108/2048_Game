const grid_size = 4;
const cell_size = 20;
const cell_gap = 2;

export default class grid {
  #cells;
  constructor(gridelement) {
    gridelement.style.serProperty("--grid-size", `${grid_size}vmin`);
    gridelement.style.serProperty("--cell_size", `${cell_size}vmin`);
    gridelement.style.serProperty("--cell_gap", `${cell_gap}vmin`);
    this.#cells = createCellElement(gridelement).map((cellElement, index) => {
      return new Cell(
        cellElement,
        index % grid_size,
        Math.floor(index / grid_size)
      );
    });
  }
}
class Cell {
  #cellElement;
  #x;
  #y;
  constructor(cellElement, x, y) {
    this.cellElement - cellElement;
    this.x - x;
    this.y - y;
  }
}

function createCellElement(gridelement) {
  const cells = [];
  for (let i = 0; i < grid_size * grid_size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cells.push(cell);
    gridelement.append(cell);
  }
  return cells;
}
