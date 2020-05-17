// X =  1
// O = 0

// Need a 3 x 3 grid. This is equivelent to cells in a spreadsheet:
//      A1, A2, A3, B1, B2, B3, C1, C2, C3
// When a player has created a horizontal, vertical, or diagonal line, they win and the game is over. 

// Thoughts and Requirements::
// Need to track where a player's choices are located.
// Create an array of all possible locations (see above)
// Create an empty array for each player. 
// When a player selects a location, remove location as an available cell from the original array
//      and place it in the player's array.
// The winning locations are::
//      [A1, A2, A3], [B1, B2, B3], [C1, C2, C3], [A1, B2, C3],  
//      [A3, B2, C1], [A1, B1, C1], [A2, B2, C2], [A3, B3, C3]
// Should each of these arrays be a variable or one variable called 'winners' that contains all arrays? 
//      To check would I loop through a list of variables, to see if there are matches?
//      Need to know how to compare results from one array with another and even if they are not a perfect match
//      (i.e. one array contains extraneous elements), a match equals a win. 

// Need to draw/display board. Preferrably with ability to click in a spot to enter a play.
// IF multiple rounds need to track number of wins to loses.

// 1. Create array of all possible locations. - DONE
// 2. Create empty array for P1 and P2 (Player 1 and Player 2). These should be assigned as X's and O's. - DONE
// 3. Function to pull array item from 'board' and place in player's array.
// 4. Once player's array length >= 3, compare player's array with winning arrays. 

let board = [A1, A2, A3, B1, B2, B3, C1, C2, C3];
let p1 = [];
let p2 = [];