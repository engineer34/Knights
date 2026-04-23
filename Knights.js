//start with constructor asusual
class Knight{
    constructor(position, path = [position]){
        this.position = position;
        // path = array of all squares visited to reach this position
        this.path = path;
    }
}
//our function that gets moves from x and y when we 
//add or minus
function getMoves([x,y]){
    //all possible 8 moves
    const moves = [[x+1, y+2],[x+2, y+1],[x+2, y-1],
[x+1, y-2],[x-1, y-2],[x-2, y-1],[x-2, y+1],[x-1, y+2],];
    //ilter out moves that go off the board
  // chess board is 8x8so coordinates stay between zero and seven
return moves.filter(([a,b]) => a >= 0 && a < 8 && 
b >= 0 && b < 8);
}
//function for our knight moves start and end position
function knightMoves(start, end) {
    const queue = [new Knight(start)];
    const visited = new Set();
    //continues search while queue is emepty
    while (queue.length > 0) {
        //remove first element in queue
    const current = queue.shift();
    const [x, y] = current.position;
// Check if we reached the target square
    if (x === end[0] && y === end[1]) {
      let output = `You made it in ${current.path.length - 1} moves!\nPath:\n`;
      current.path.forEach(p => output += `[${p}]\n`);
      return output;
    }

    visited.add(`${x},${y}`);

for (const move of getMoves(current.position)){
    // Only visit squares we haven't already explored
    if(!visited.has(`${move[0]}, ${move[1]}`)){
        //sets new queue
        queue.push(new Knight(move, [...current.path, move]));
    }
}
    }
}
//we test 
//knightMoves ([0,0], [7,7]);
