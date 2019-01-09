
export class Sudoku{


    checkNumbers(arr){
      if(arr.includes("1") && arr.includes("2") && arr.includes("3") && arr.includes("4") && arr.includes("5") && arr.includes("6") && arr.includes("7") && arr.includes("8") && arr.includes("9"))
      {
        return true;
      } else {
        return false;
      }
    }
    
    checkHorizontals(arr){
      let check;
      for(let i=0; i < 73 ; i+=9){
      var tempArray = [arr[i], arr[i+1], arr[i+2], arr[i+3], arr[i+4], arr[i+5], arr[i+6], arr[i+7], arr[i+8]];
      check = this.checkNumbers(tempArray);
      if (check == false){
        return false
      } else {
        return true;
      }
    }
  }

    checkVerticals(arr){
      let check;
      for(let i=0; i < 9; i++){
      var tempArray = [arr[i], arr[i+9], arr[i+18], arr[i+27], arr[i+36], arr[i+45], arr[i+54], arr[i+63], arr[i+72]];
      check = this.checkNumbers(tempArray);
      if (check == false){
        return false
      } else {
        return true;
      }
    }
  }

  checkBlocks(arr){
    let check;
    for(let i=0; i < 62; i+=3){
    var tempArray = [arr[i], arr[i+1], arr[i+2], arr[i+9], arr[i+10], arr[i+11], arr[i+18], arr[i+19], arr[i+20]];
    check = this.checkNumbers(tempArray);
    if (check == false){
      return false
    } else {
      return true;
    }
  }
}
}
