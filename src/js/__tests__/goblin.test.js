import GameBoard from '../gameBoard';


test('создание игрового поля', () => {
  const gameBoard = new GameBoard();
  const boards = gameBoard.gameBoard(4);
  const received = boards.querySelectorAll('.cell');
  expect(received.length).toBe(4 ** 2);
});
