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
// Another option is to copy the selected location to the player's array. In order to avoid duplicate values in player's arrays,
// the two other player's array would need to be checked for the value. 
// 
// The winning locations are::
//      [A1, A2, A3], [B1, B2, B3], [C1, C2, C3], [A1, B2, C3],  
//      [A3, B2, C1], [A1, B1, C1], [A2, B2, C2], [A3, B3, C3]
//      NOTE - MAY need to convert these alphanumeric to numeric values. 

//  Logic may need to be something along these lines:
//      Compare length of loc1 && win1. IF ==, proceed.
//      Does the win1 contain all the same value (0's or 1's)?
//      If NOT, then move on to next item.
//      If YES, declare winner. 
//      Another possiblity is if the array value = 0 (win for 0) or value = 3 (win for 1)

//      1. Check length of win# array. If = 3, proceed. Else, return.
//      2. Check value of win# array. If = 0, player O wins. If = 3, player 1 wins. 



// Need to draw/display board. Preferrably with ability to click in a spot to enter a play.
// IF multiple rounds need to track number of wins to loses.


let board = [A1, A2, A3, B1, B2, B3, C1, C2, C3],
    winning = {
        loc1: [A1, A2, A3], win1: ["", "", ""],
        loc2: [B1, B2, B3], win2: ["", "", ""],
        loc3: [C1, C2, C3], win3: ["", "", ""],
        loc4: [A1, B2, C3], win4: ["", "", ""],
        loc5: [A3, B2, C1], win5: ["", "", ""],
        loc6: [A1, B1, C1], win6: ["", "", ""],
        loc7: [A2, B2, C2], win7: ["", "", ""],
        loc8: [A3, B3, C3], win8: ["", "", ""]
    }
    p1 = [],
    p2 = [],
    score = 0,
    rounds = 0,


    winningLocs = {
        loc1: [01, 02, 03], win1: ["", "", ""],
        loc2: [04, 05, 06], win2: ["", "", ""],
        loc3: [07, 08, 09], win3: ["", "", ""],
        loc4: [01, 05, 09], win4: ["", "", ""],
        loc5: [03, 05, 07], win5: ["", "", ""],
        loc6: [01, 04, 07], win6: ["", "", ""],
        loc7: [02, 05, 08], win7: ["", "", ""],
        loc8: [03, 06, 09], win8: ["", "", ""]
    }