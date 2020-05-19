
    let allVar = {
        loc1 : [01, 02, 03], 
        loc2 : [04, 05, 06], 
        loc3 : [07, 08, 09], 
        loc4 : [01, 05, 09], 
        loc5 : [03, 05, 07], 
        loc6 : [01, 04, 07], 
        loc7 : [02, 05, 08], 
        loc8 : [03, 06, 09], 
        win1 : [0, 1 ,0],
        win2 : [1,1,1],
        win3 : [],
        win4 : [],
        win5 : [],
        win6 : [],
        win7 : [],
        win8 : []
    };

 
    //console.log(allVar.win1.reduce((a, b) => a + b));

    let winCheck = function winCheck() {
        let keys = Object.keys(allVar);
        let len = keys.length;
    for(let i=0; i <= len; i++){
        let match = allVar.i.reduce((a, b) => a + b);
        if (match == 0) {
        return "The O's Have It!";
        } else (match == 3)
        return "The X's Have It!";
        }
    };

    console.log(winCheck());
