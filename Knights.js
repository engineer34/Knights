//start with constructor asusual
class Knight{
    constructor(position, path = [position]){
        this.position = position;
        this.path = path;
    }
}
//our function that gets moves from x and y when we 
//add or minus
function getMoves([x,y]){
    const moves = [[x+1, y+2],[x+2, y+1],[x+2, y-1],
[x+1, y-2],[x-1, y-2],[x-2, y-1],[x-2, y+1],[x-1, y+2],];
return moves.filter(([a,b]) => a >= 0 && a < 8 && 
b >= 0 && b < 8);
}
//function for our knight moves start and end position
function knightMoves(start, end) {
    const queue = [new Knight(start)];
    const visited = new Set();
    while (queue.length > 0) {
    const current = queue.shift();
    const [x, y] = current.position;

    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${current.path.length - 1} moves!`);
      console.log("Path:");
      current.path.forEach(p => console.log(p));
      return;
    }

    visited.add(`${x},${y}`);

for (const move of getMoves(current.position)){
    if(!visited.has(`${move[0]}, ${move[1]}`)){
        queue.push(new Knight(move, [...current.path, move]));
    }
}
    }
}
//we test 
knightMoves ([0,0], [7,7]);