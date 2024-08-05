import Grid from "./Grid ";
import Tile from "./tile";
const Boardgame = document.querySelector(".board-game");
const grid = new Grid(Boardgame);
grid.randomEmptyCell().tile = new Tile(Boardgame);
grid.randomEmptyCell().tile = new Tile(Boardgame);
