export default class Board {
  constructor(size=4){
      this.size = size;
  }
  
  gameBoard() {
      const container = document.createElement('div');
      container.classList.add('container');
      container.innerHTML = '<h1 class=\'title\'>The Goblin Attack</h1>';
      
      const body = document.querySelector('body');
      body.insertBefore(container, body.firstChild);
      
      const board = document.createElement('div');
      container.appendChild(board);
      board.classList.add('board');

      for (let i = 0; i < Math.floor(this.size) ** 2; i++){
          const cell = document.createElement('div');
          cell.classList.add('cell');         
          board.appendChild(cell);
      }
      return board;
  }
}
