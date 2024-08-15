import Grid from "./Grid.js ";
import Tile from "./tile.js";
const Boardgame = document.querySelector(".board-game");
const grid = new Grid(Boardgame);
grid.randomEmptyCell().tile = new Tile(Boardgame);
grid.randomEmptyCell().tile = new Tile(Boardgame);

setupInput();
function setupInput() {
  window.addEventListener("keydown", handleInput, { once: true });
}
function handleInput(e) {
  switch (e.key) {
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    default:
      break;
  }
}
