import './styles.css';
import { Sudoku } from './sudoku.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $("#Sudoku").submit(function(event){
      event.preventDefault();
      var newArray = [];
      for(let i=1; i < 82; i++){
      newArray.push($(`#${i}`));
      var sudoku = new Sudoku();
      console.log(sudoku);
      if(sudoku.checkHorizontals(newArray) == true && sudoku.checkVerticals(newArray) == true && sudoku.checkBlocks(newArray) == true){
        alert("You Won!");
      } else{
        alert("You Lose!");
      }
    }
  })
});
