var dice = [2,1,5,1,5,4]
var board = [0,0,3,0,0,0,0,-2,0,0,0,0,0,0,0,0,0,0,0,0]

let snakes = (board, dice) => {
    let pos = 0;
    for (let i = 0; i < dice.length && pos < board.length; i++){
        if (pos + dice[i] < board.length)
        {
          pos += dice[i];
          pos += board[pos];
        }
      }
    return pos;
}

console.log(snakes(board, dice))