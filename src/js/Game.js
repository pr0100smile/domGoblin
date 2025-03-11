export default class Game {
  constructor(boards) {
    this.boards = boards;
    this.size = 4;
    this.board = null;
    this.position = 0;
  }

  init() {
    this.board = this.boards.gameBoard()
    this.start();
  }

  setPosition () {
    const position = Math.floor(Math.random() * this.size ** 2);
    this.delPosition(this.position);
    if (position === this.position) {
      this.setPosition();
      return;
    }
    else {
      this.board.children[position].classList.add('goblin');
      this.position = position;      
    }
  }

  delPosition (position) {
    this.board.children[position].classList.remove('goblin');
  }

  start() {
    setInterval(() => {
      this.setPosition();
    }, 1000);
  }
}
