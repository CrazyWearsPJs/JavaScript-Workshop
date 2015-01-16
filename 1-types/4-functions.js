/*
 * Functions are used somewhat differently than in languages
 * like C++ or Java, although they look similar.
 */

/*
 * A function can take in a value of any type - Objects, Numbers, etc
 * as an argument and can also return a value of any type.
 */

// function declaration
function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(42));
//> true

console.log(isEven(13));
//> false

/*
 * In addition to the declarating syntax, 
 * we can use the expression syntax, which we can use
 * to assign to a variable or object property
 */

var getHello = function() {
    return "Hello";
};

console.log(getHello());
// > Hello

var MathFunctions = {};
MathFunctions.pow = function(base, exp) {
    // assume exp is >= 0
    var ret = 1;

    for(var i = 0; i < exp; i += 1) {
        ret *= base;
    }
    
    return ret;
};

MathFunctions.factorial = function(x) {
    var ret = 1;

    for(var i = 2; i <= x; i += 1) {
        ret *= i;
    }

    return ret;
};

console.log(MathFunctions.pow(2, 4));
//> 16

/*
 * Functions in JS can take in any number of arguments, 
 * and you can choose to omit some arguments.
 */
function join(arr, delimiter) {
    if (delimiter === undefined) {
        delimiter = ' ';
    }

    var ret = '';
    for(var i = 0; i < arr.length; i += 1) {
        ret += arr[i];
        if(i !== arr.length - 1) {
            ret += delimiter;
        }
    }
    return ret;
}

var quote1 = ["Reach", "for", "the", "Sky!"];
console.log(join(quote1, '-'));
//> Reach-for-the-Sky!

//omit the first argument
var quote2 = ["No", "Skyler", "I", "AM", "THE", "DANGER", "!"];
console.log(join(quote2));
//> No Skyler I AM THE DANGER !
