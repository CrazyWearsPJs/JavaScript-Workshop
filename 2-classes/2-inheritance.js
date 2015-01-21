/*
 * Now you maybe asking... What about inheritance? In javascript,
 * this is done by assigning an instance of a 'base class' to 
 * a 'derived class'-es prototype.
 *
 * This is known as prototypical inheritance
 */

// Our 'Animal' class again
function Animal(sound) {
    this.sound = sound;
}

Animal.prototype.makeNoise = function() {
    console.log(this.sound);
};

var dog = new Animal('bark!');
dog.makeNoise();
//> bark!


/*
 * Say I want a 'Dog' class which has the same methods/members
 * as the 'Animal' class EXCEPT its sets the 'sound' property 
 * for you. Can you implement it?
 */

function Dog () {
    // Fill me in!
}

Dog.prototype.makeNoise = function () {
    // Fill me in!  
};

// Lets test your dog class! Uncomment the
// following lines

// var sparky = new Dog ('bark!');
// sparky.makeNoise();


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

// You can create even more 'derived' classes
function Dalmation () {
    this.owner = 'Cruella DeVille';
}
Dalmation.prototype = new Dog ();
Dalmation.prototype.ownerName = function () {
    console.log(this.owner);
};

var pongo = new Dalmation ();
// Method inherited from 'Animal'
pongo.makeNoise();
//> bark!
// Method defined in 'Dalmation'
pongo.ownerName();
//> Cruella DeVille

