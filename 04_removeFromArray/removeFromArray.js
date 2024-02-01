const removeFromArray = function() {

    let args = Array.from(arguments);
    console.log(`Original array: ${args}`); // correct
    
    let testedArray = args[0];
    let arrayLength = testedArray.length;
    let indexContainer = [];

    // let containerArray = [...testedArray]; //creates real copy of an array not a reference to the old array
    console.log(`tested array: ${testedArray}`); //correct

    args.shift();
    console.log(`beingRemoved: ${args}`); //correct

    testedArray.forEach(item => {
        console.log(`item being checked: ${item}`);
        for (let i = 0; i < arrayLength; i++){
            if (item === args[i]) {
                indexContainer.push(testedArray.indexOf(item));
            }
        }
    });

    indexContainer.sort((a, b) => b - a);

    for (let i = 0; i < indexContainer.length; i++) {
        testedArray.splice(indexContainer[i],1);
    } 
    
    return testedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
