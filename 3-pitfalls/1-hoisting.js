console.log(hello());

function hello() {
    return "Hello there!";
}

/*
 * There is variable hoisting for the function declaration style
 * Not the function expression style.
 */

//console.log(hola());
//> not defined!

var hola = function() {
    return "Hola";
};

(function () {
    var i = 0;
    var total = 0;
    /*
     * There is no block scoping in JavaScript,
     * all variable declarations are hoisted to the top
     * of the function, but not their assignment
     */
    //console.log(j);
    //> undefined
    while(i < 10) {
        var j = i;
        total += i;
        i += 1;
    }

    /*
     * In languages such as C++, j would be out of scope.
     */

    //console.log(j);
    //> 9
})();

