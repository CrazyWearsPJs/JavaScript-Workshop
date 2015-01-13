/*
 * In addition to the primitive number, string and bool types, 
 * there is the Object type.
 */

// Declare an empty obj
var obj = {};

/*
 * Objects are basically maps that map strings (property names)
 * to values of any type. Objects can also contain other objects!
 */
obj.a = 'apple';
obj['b'] = 8;

var key = 'c';
obj[key] = 'cider';

console.log(obj.a + ' '  + obj.c);
// > apple cider

//Objects can also be initalized with values
var otherObj = {
    a : 'apple',
    b : 'juice',
    c: 'sauce'
};

console.log(obj.a + ' ' + obj.b);
// > apple juice

/*
 * A special type of object is an array, in which the keys are numbers
 * from 0 to the length of the array.
 */

var arr = [];
for(var i = 0; i < 5; i += 1) {
    arr.push(i);
}
console.log(arr);
// > [0, 1, 2, 3, 4]
