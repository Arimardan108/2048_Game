const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;
export default class Grid {
  constructor(gridElements) {
    gridElements.style.setProperty("--grid_size", GRID_SIZE);
    gridElements.style.setProperty("--cell_size", `${CELL_SIZE}vmin`);
    gridElements.style.setProperty("--cell_gap"), `${CELL_SIZE}vmin`;
  }
}
function createCellElement(gridElements) {
  const cells = [];
}
