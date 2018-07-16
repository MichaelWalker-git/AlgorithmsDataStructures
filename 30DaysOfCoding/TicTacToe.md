A Tic-Tac-Toe board is given as a string array board. Return True if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.

The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  The " " character represents an empty square.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player always places "X" characters, while the second player always places "O" characters.
"X" and "O" characters are always placed into empty squares, never filled ones.
The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Example 1:
Input: board = ["O  ", "   ", "   "]
Output: false
Explanation: The first player always plays "X".

Example 2:
Input: board = ["XOX", " X ", "   "]
Output: false
Explanation: Players take turns making moves.

Example 3:
Input: board = ["XXX", "   ", "OOO"]
Output: false

Example 4:
Input: board = ["XOX", "O O", "XOX"]
Output: true


```
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

```

O(n) Time Solution

