import grid from "./grid";
import tile from "./tile";
const BordGame = document.getElementsByClassName("bord-game");
const grid = new grid(BordGame);
grid.randommptyCell().tile = new tile(BordGame);
grid.randommptyCell().tile = new tile(BordGame);
