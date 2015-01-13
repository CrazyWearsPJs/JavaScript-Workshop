/*
 * JavaScript also has control flow
 * structures like if statements and for-loops.
 *
 * They both behave how'd you expect.
 *
 */

var x = 1;
var y = 2;
var z = 3;

if(x > y) {
    console.log('Pirates');
} else if (x < z) {
    console.log('Ninjas');
} else {
    console.log('Robots');
}
//> Ninjas

var s = '';
for(var i = 0; i < 8; i += 1) {
    s += 'buffalo';
}
console.log(s);
//> buffalo buffalo buffalo buffalo buffalo buffalo Buffalo buffalo


