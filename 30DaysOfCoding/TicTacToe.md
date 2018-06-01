
//XOX
//OOO
//XXX
const diagonalCheck = (arrayOfArrays) => {
  const leftToRightDiagonally = arrayOfArrays[0][0] === arrayOfArrays[1][1] === arrayOfArrays[2][2];
  const rightToLeftDiagonally = arrayOfArrays[0][2] === arrayOfArrays[1][1] === arrayOfArrays[2][0];
  
  if(leftToRightDiagonally || rightToLeftDiagonally){
    return true;
  } else {
    return false;
  }
}

const verticalCheck = (arrayOfArrays, index) => {
  const firstSet = arrayOfArrays[0][index] === arrayOfArrays[1][index];
  const secondSet = arrayOfArrays[1][index] === arrayOfArrays[2][index];
  if(firstSet || secondSet){
    return true;
  } else {
    return false;
  }
}

const drawChecker = (arrayOfArrays) => {
      for(let i = 0; i<arrayOfArrays.length; i++) {
          for(let j= 0; j<arrayOfArrays.length; j++){
            if(arrayOfArrays[i][j] === null){
              return false;
          }
       }
    }  
  return true;
}

/**
* @param {!Array<string>}
* @return {boolean}
*/
const horizontalCheck = (instanceOfRow) => {
  const first = instanceOfRow[0];
  return instanceOfRow.every((row) => row === first);
}

const checkToWin = (arrayOfArrays) => {
  // horizontal checks
  for(let i = 0; i < arrayOfArrays.length; i++){
    if(horizontalCheck(arrayOfArrays[i]) || verticalCheck(arrayOfArrays, i) || diagonalCheck(arrayOfArrays)){
      return true;
    } else {
      return false;
    }
  }
}

/**
*
* @param {string} board
* @return {string}
*/
const ticTacToe = (arrayOfArrays) => {
  if(checkToWin(arrayOfArrays)){
    console.log("Player 1 has won");
    return;
  }
  if(drawChecker(arrayOfArrays)){
    console.log('DRAW');
  }
  const findEmptySpot = (arrayOfArrays) => {
    for(let i = 0; i<arrayOfArrays.length; i++){
          for(let j= 0; j<arrayOfArrays.length; j++){
            if(arrayOfArrays[i][j] === null){
              arrayOfArrays[i][j] = 'X';
              break;
          }
       }
    }
  }
  
  findEmptySpot(arrayOfArrays);
  
  if(checkToWin(arrayOfArrays)){
    console.log("Computer has won");
    return;
  }
  console.log(arrayOfArrays);
  return arrayOfArrays;
}

const input = [['X', null, null], ['O', 'O', null], ['X', null, 'O']];
ticTacToe(input);

