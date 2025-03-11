import GameBoard from '../gameBoard';


test('формирование игрового поля', () => {
  const board = new Board();
  const boards = board.gameBoard(4);
  const received = boards.querySelectorAll('.cell');
  expect(received.length).toBe(4 ** 2);
});
