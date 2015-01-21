/*
 * Great Job! Now lets implement the 'Dog' class
 * using prototypical inheritance
 */

// Uncomment the following lines, and comment out the previous
// Dog section

function Dog () {};
Dog.prototype = new Animal ('bark!');

var sparky = new Dog ();
sparky.makeNoise();
//> bark!

/*
 * You can create even more 'derived' sub classes!
 * Note you can also add additional properties 
 * and methods!
 */

function Dalmation () {
    this.owner = 'Cruella DeVille';
}

Dalmation.prototype = new Dog ();
Dalmation.prototype.ownerName = function () {
    return this.owner;
};

var pongo = new Dalmation (); // Inherited from 'Animal'
pongo.makeNoise();
//> bark!
console.log(pongo.ownerName()); // Defined in 'Dalmation'
//> Cruella DeVille

