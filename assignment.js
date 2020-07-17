// assignment Number 01 Feet to Mile Converter;
    function feetToMile(feet){
        let mile = feet / 5280; // 1 mile = 5280;
        mile = console.log('Yout Feet is: '+ feet+' feet ' +' And '+'Your Mile is: ' + mile.toFixed(6)+' mile');

        return mile;
    }
        //get output;
            let resultFeetToMile = feetToMile(752562);
            console.log(resultFeetToMile);



// assignment Number 02 woodCalculator
    function woodCalculator(chair, table, bed){
        //just warning fot Type The valu in right way;
        console.log('#Make Sure, write the number in this serial: chair, table, bed.');
        let total = chair * 1 + table * 3 + bed * 5;
        total = console.log('It will take Total: '+total +' cuft wood for your chair, table and bed');
        return total;
    }
    //get output
    let resultWoodCalculator = woodCalculator(14,5,12);
    console.log(resultWoodCalculator);



// assignment Number 03 Brick Calculator;
    let fixedFeet10Floor = 10 * 15;//1 floor = 15 feet;
    let fixedFeet20Floor = 10 * 12;//1 floor = 12 feet;
    function brickCalculator(floor){
        if(floor <= 10){
            let feet =floor * 15;//1 floor = 15 feet;
            let brick = feet * 1000;
                brick = console.log('Nedd for '+ floor+' floor: ' +brick+' brick.');
            return brick;
        }else if(floor <= 20){
            let feet = (floor-10) * 12;//1 floor = 12 feet;
            let brick = (feet+fixedFeet10Floor) * 1000;
                brick = console.log('Nedd for '+ floor+' floor: ' +brick+' brick.');
            return brick;
        }else{
            let feet = (floor-20) * 10;//1 floor = 10 feet
            let brick = (feet+fixedFeet10Floor+fixedFeet20Floor) * 1000;
                brick = console.log('Nedd for '+ floor+' floor: ' +brick+' brick.');
            return brick;
        }     
    }
    //get output;
    let resultBrickCal = brickCalculator(11);
    console.log(resultBrickCal);



 // assignment Number  04 find the smallest name an array;
    function tinyFriend(friendName) {
        let smallName = '';
            if(friendName.length > 0){
                for(let i = 0; i < friendName.length; i++){
                    if(typeof friendName[i] === 'string'){//only for String Will take;
                       if(smallName.length == 0){
                        smallName = friendName[i]; continue;
                       } 
                       if(friendName[i].length < smallName.length){
                        smallName = friendName[i]; 
                       }
                    }
                  }
                 }
                  return smallName;
               }
            //get output
            var resultTinyFrien = tinyFriend(['tpasd','tasdffdo', 'twawodfg', 'thad wer','ff',2]);
            console.log(resultTinyFrien);