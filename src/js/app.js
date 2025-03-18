import GameBoard from "./gameBoard";
import Game from "./Game";

const boards = new GameBoard();
const game = new Game(boards);
game.init();
