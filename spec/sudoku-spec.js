import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', function() {

  it('should return false', function() {
    var arr = ['1', '2', '3'];
    var sudoku = new Sudoku();
    expect(sudoku.checkNumbers(arr)).toEqual(false);
  });

    it('should return true', function() {
      var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      var sudoku = new Sudoku();
      expect(sudoku.checkHorizontals(arr)).toEqual(true);
    });

    it('should return true', function() {
      var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9','1', '2', '3', '4', '5', '6', '7', '8', '9' ,'1', '2', '3', '4', '5', '6', '7', '8', '9' ,'1', '2', '3', '4', '5', '6', '7', '8', '9'];
      var sudoku = new Sudoku();
      expect(sudoku.checkVerticals(arr)).toEqual(false);
    });

    it('should return true', function() {
      var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9','1', '2', '3', '4', '5', '6', '7', '8', '9' ,'1', '2', '3', '4', '5', '6', '7', '8', '9' ,'1', '2', '3', '4', '5', '6', '7', '8', '9'];
      var sudoku = new Sudoku();
      expect(sudoku.checkBlocks(arr)).toEqual(false);
    });

});
