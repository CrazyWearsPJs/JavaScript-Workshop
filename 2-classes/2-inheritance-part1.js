/*
 * Now you maybe asking... What about inheritance? In javascript,
 * this is done by assigning an instance of a 'base class' to 
 * a 'derived class'-es prototype.
 *
 * This is known as prototypical inheritance
 */

/*
 * Lets begin with the non-inheritance approach
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

