export default class GameBoard {
  constructor(size=4){
      this.size = size;
  }
  
  gameBoard() {
      const container = document.createElement('div');
      container.classList.add('container');
      container.innerHTML = '<h1 class=\'title\'>The Goblin Attack</h1>';
      
      const body = document.querySelector('body');
      body.insertBefore(container, body.firstChild);
      
      const gameBoard = document.createElement('div');
      container.appendChild(gameBoard);
      gameBoard.classList.add('gameBoard');

      for (let i = 0; i < Math.floor(this.size) ** 2; i++){
          const cell = document.createElement('div');
          cell.classList.add('cell');         
          gameBoard.appendChild(cell);
      }
      return gameBoard;
  }
}
