// convert feet to mile
function feetToMile(feet){
    if (feet<0){
        console.log("Feet can not be negative");
    }
    else{
        var mile = feet/5280;
        return mile;
    }
  
}

// woodCalculator
function woodCalculator(chair,table,bed){
    if ( chair < 0 || table < 0 || bed <0){
        console.log("items can't be negative");
    }
    else if ( chair == null || table == null || bed == null){
        console.log("add all three items");
    }
    else{
        totalChairWood = chair*1;
        totalTableWood = table*3;
        totalBedWood = bed*5;
        totalWood = totalChairWood + totalTableWood + totalBedWood;
        return totalWood;
    }
  
}

// brickCalculator 

function brickCalculator(floor){
    if(floor>=0 && floor<=10){
        var bricksPerFeet = 15*1000;
        var totalBricks = floor * bricksPerFeet;
        return totalBricks;
    }
    else if(floor>10 && floor <=20){
        var firstTenFloor = 15*1000*10;
        var bricksPerFeet = 12*1000;
        var floorNumOfSecondTenFloor = floor-10;
        var totalBricks = (floorNumOfSecondTenFloor*bricksPerFeet)+firstTenFloor;
        return totalBricks;
    }
    else if(floor>20){
        var firstTwintyFloor = 15*1000*10+12*1000*10;
        var bricksPerFeet = 10*1000;
        var floorNumOfRestFloors = floor-20;
        var totalBricks = (floorNumOfRestFloors*bricksPerFeet)+firstTwintyFloor;
        return totalBricks;
    }
    else{
        console.log("Floor number can not be zero or negative");
    }
}



// tinyFriends(friends)

function tinyFriends(friends){
    var tiny = friends[0];
    for(var i=0;i<friends.length;i++){
        if(tiny.length>friends[i].length){
            tiny = friends[i];
        }
    }
    return tiny;
}


