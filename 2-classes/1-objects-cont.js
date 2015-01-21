/*
 * All Javascript Objects (objects, arrays, functions, etc)
 * are copied by reference. 
 */

var a = [1, 2];
var b = [1, 2];

if(a === b) {
    console.log(a, 'and', b, 'are equal');
} else {
    console.log(a, 'and', b, 'are not equal');
}
// > [1, 2] and [1, 2] are not equal

// assign c a reference to the array a
var c = a;
c.push(3);
console.log(a);
//> [1, 2, 3]

//same thing for objects
var x = {};
var y = x;
y.message = 'hello';
console.log(x.message);
//> 'hello'

function concatArr(dest, src) {
    var srcLen = src.length;
    for(var i = 0; i < srcLen; i += 1) {
        dest.push(src[i]);
    }
}

concatArr(a, b);
console.log(a);
// > [1, 2, 3, 1, 2]
