/*
 * Functions are used somewhat differently than in languages
 * like C++ or Java, although they look similar.
 */

function getAttack(fighter) {
    return fighter.attack;
}

var goku = {
    race: 'Saiyan',
    attack: 'Kamehameha'
};

/*
 * A function can take in a value of any type - Objects, Numbers, etc
 * as an argument and can also return a value of any type.
 */

console.log(getAttack(goku) + '!!');
//> "Kamehameha!!"

/*
 * Functions in JavaScript are actually Objects, 
 * which means that they can be used as arguments
 * for other functions and returned by other function.
 */

function repeatAttack(attackGetter, times, delimiter) {
    /*
     * A function can also have no name and be used
     * in an expression. This is known as an "anonymous function".
    */
    return function(fighter) {
        var ret = '';
        for(var i = 0; i < times; ++i) {
            ret += attackGetter(fighter) + delimiter;
        }
        return ret;
    };
}

//Functions can also be stored in variables
var attack3Times = repeatAttack(getAttack, 3, '!! ');

console.log(attack3Times(goku));
//> Kamehameha!! Kamehameha!! Kamehameha!!

var naruto = {
    race: 'Human', 
    attack: 'Rasengan'
};

console.log(attack3Times(naruto));
//> Rasengan!! Rasengan!! Rasengan!! 


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
