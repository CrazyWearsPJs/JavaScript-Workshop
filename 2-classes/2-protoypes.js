/*
 * There are no classes in Javascript (yet ...).
 * Instead, we make create methods and inherit values through
 * the prototype object and the "new" keyword!
 * 
 * You can think of a prototype as a "skeleton" of the object
 * you want to make. Usually you attach methods and static values
 * to the prototype object.
 */

/*
 * We can refer to values that are exclusive to an instance 
 * through the this object.
 */

// this function acts as a constructor
function Animal(sound) {
    this.sound = sound;
}

Animal.prototype.makeNoise = function() {
    console.log(this.sound);
};

var cat = new Animal('meow!');
cat.makeNoise();
//> meow!

var cow = new Animal('moo!');
cow.makeNoise();
//> moo!


function Person(name, age, greeting) {
    this.name = name;

    this.age = age;

    //optional
    if(greeting !== undefined) {
        this.greeting = greeting;
    }
}

Person.prototype.greeting = 'Hello';
Person.prototype.greet = function(otherPerson) {
    var speaker = this.name + ':\t';
    var dialogue = this.greeting + ' ' + otherPerson.name + '!';

    console.log(speaker + dialogue);
};


var john = new Person('John', 34);
var aaron = new Person('Aaron', 23, 'Howdy');

john.greet(aaron);
//> John:   Hello Aaron!

aaron.greet(john);
//> Aaron:  Howdy John!

