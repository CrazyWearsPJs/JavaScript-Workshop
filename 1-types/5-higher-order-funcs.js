// Array of objects
var attacks = [{
        type: 'Grass',
        name: 'Razor Leaf'
    }, {
        type: 'Water',
        name: 'Water Gun'
    }, {
        type: 'Fire',
        name: 'Flamethrower'
    }, {
        type: 'Grass',
        name: 'Vine Whip'
    }, {
        type: 'Water',
        name: 'Hydro Pump'
    }, {
        type: 'Fire',
        name: 'Fire Punch'
    }
];

/*
 * Given an array of attacks, make a function that returns
 * an array of attack names whose type is Water.
 */

/*
 * Hint: you can get the length of the array attackArr
 * with attackAtr.length
 */
function getWaterAttackNames(attackArr) {
    /* TODO: implement me! */
}

/*
 * Another Solution:
 *
 * Functions in JavaScript are actually Objects, 
 * which means that functions can be used as arguments
 * for other functions and returned by other function.
 *
 * JavaScript has high-order functions. Functions that
 * can take in a function as any of its arguments or return
 * a function, or both.
 */

/*
 * A higher-order function that's built into the language
 * is filter, filter is a method for Array that takes in special
 * type of function, a predicate function - which returns true or false
 * given an element.
 * 
 * If the predicate returns false for a certain element, that
 * element is omitted in the new array.
 *
 * If the predicate returns true, then that element appears in the new array.
 */

function isWaterType(attack) {
    return attack.type === 'Water';
}

var waterTypeAttacks = attacks.filter(isWaterType);
console.log(waterTypeAttacks);
/* 
 * > [{type: 'Water', name: 'Water Gun'}, 
 * {type: 'Water', name: 'Hydro Pump'}] 
*/

/* 
 * Another built-in high-order function is map. Map a method of Array
 * takes in a function f as an argument and returns a new array that 
 * is the result of applying the function f across all of its elements.
*/

function getAttackName(attack) {
    return attack.name;
}

// get the namesfrom each attack
var attackNames = attacks.map(getAttackName); 
console.log(attackNames);
//> ['Razor Leaf', 'Water Gun', 'Flamethrower', 'Vine Whip', 'Hydro Pump', 'Fire Punch']

//let's put it together
var waterTypeAttackNames = attacks.filter(isWaterType).map(getAttackName);
console.log(waterTypeAttackNames);
//> ['Water Gun', 'Hydro Pump']


/*
 * Functions within other functions still have access to the variables
 * that belong to their parent functions
 *
 * They "remember those values"
 */

function makeCounter() {
    // you can think of this variable as private
    var count = 0;
    return function() {
        count += 1;
        return count;
    };
}

var count = makeCounter();
console.log(count());
// > 1
console.log(count());
// > 2
console.log(count());
//> 3
