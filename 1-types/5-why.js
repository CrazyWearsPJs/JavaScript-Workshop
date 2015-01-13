/*
 * Why are functions that can take in functions useful?
 */

var arr = [1, 2, 3, 4, 5];

var filteredArr = arr.filter(function(num) {
    return num % 2 === 0;
});

console.log(filteredArr);
// > [2, 4]

/*
 * What's happening here?
 *
 * Try implementing your own version of the filter function.
 *
 * It should take in an array and a 'predicate' function, 
 * which can take in an element of the array and returns true or false
 */

function myFilter(arr, pred) {
 /* implement me! */
}

function isOdd(num) {
    return num % 2 === 1;
}

console.log(myFilter(arr, isOdd));
// > should return [1, 3, 5]

