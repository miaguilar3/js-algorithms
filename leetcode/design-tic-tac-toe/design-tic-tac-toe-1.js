/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.n = n;
  this.board = new Array(n);
  for(var i = 0; i < n; i++){
    this.board[i] = new Array(n);
  }
  for(var r = 0; r < n; r++){
    for(var c = 0; c < n; c++){
      this.board[r][c] = null;
    }
  }
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  this.board[row][col] = player;
  return this.checkWinner(row, col, player);
};

TicTacToe.prototype.checkWinner = function(row, col, player){
  if(
    this.checkRow(row, player) || 
    this.checkCol(col, player) || 
    this.checkDiagnols(row, col, player)
    )
  {
    return player;
  }
  return 0;
}

TicTacToe.prototype.checkRow = function(row, player){
  for(let c = 0; c < this.n; c++){
    if(this.board[row][c] !== player){
      return false;
    }
  }

  return true;
}

TicTacToe.prototype.checkCol = function(col, player){
  for(let r = 0; r < this.n; r++){
    if(this.board[r][col] !== player){
      return false;
    }
  }
  return true;
}

TicTacToe.prototype.checkDiagnols = function(row, col, player){
  function checkDiagnol1(){
    for(let rc = 0; rc < this.n; rc++){
      if(this.board[rc][rc] !== player){
        return false;
      }
    }
    return true;
  }
  
  function checkDiagnol2(){
    for(let r=0, c=this.n-1; r < this.n; r++, c--){
      if(this.board[r][c] !== player){
        return false;
      }
    }
    return true;
  }
  
  return checkDiagnol1.call(this) || checkDiagnol2.call(this);
}
/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */