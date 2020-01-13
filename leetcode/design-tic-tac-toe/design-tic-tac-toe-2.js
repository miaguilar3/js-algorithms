/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
  this.n = n;
  this.players = {};
  var _this = this;
  [1,2].forEach(function(p){
    _this.players[p] = {
      rows: Array.from(new Array(n)).map(()=>(0)),
      cols: Array.from(new Array(n)).map(()=>(0)),
      diagnol1: 0,
      diagnol2: 0
    }
  });
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
  if(++this.players[player]['rows'][row] === this.n){
    return player;
  }
  if(++this.players[player]['cols'][col] === this.n){
    return player;
  }
  if( row === col && ++this.players[player]['diagnol1'] === this.n){
    return player;
  }
  if( row === this.n - col - 1 && ++this.players[player]['diagnol2'] === this.n){
    return player;
  }
  
  return 0;
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */