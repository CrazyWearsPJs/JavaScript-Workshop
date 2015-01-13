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

console.log(getAttack(goku) + "!!");
//> "Kamehameha!!"

/*
 * Functions in JavaScript are actually Objects, 
 * which means that they can be used as arguments
 * for other functions and returned by other function.
 */

function upgradeGetAttack(upgrade, attackGetter) {
    /*
     * A function can also have no name and be used
     * in an expression. This is known as an "anonymous function".
    */
    return function(fighter) {
        return upgrade + ' '  + attackGetter(fighter);
    };
}

//Functions can also be stored in variables
var getSuperAttack = upgradeGetAttack("Super", getAttack);

console.log(getSuperAttack(goku) + "!!");
// > Super Kamehameha!!





