// Declare variables with var.
var x = 2;

/*
 * Notice you don't specify the type of a variables
 *
 * The only type of Number in JavaScript are 
 * floating point numbers!
 */
var y = 3.2;

/*
 * JavaScript also has strings! 
 */
var s = "Hello World!";

/*
 * The way we "cout" or print to the screen in 
 * JavaScript is using console.
 */

console.log(s);
//> Hello World!

console.log(x, y);
//> 2 3.2


/*
 * Variables aren't tied to any particular type, 
 * they can be reassigned to reference data of any type;
 */

var z = 3;

//Note that strings can also be single-quoted
z = 'Believe it!';

console.log(z);
// > Believe it!

/*
 * Using variables that aren't given a value won't 
 * give you an error.
 * 
 * Instead, uninitalized variables are given a special value,
 * the undefined global property.
 */

var alexIsCool;

console.log(alexIsCool);
//> undefined
