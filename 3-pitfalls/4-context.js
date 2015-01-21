/*
 * The 'this' object is the source of many gotchas in JavaScript.
 *
 * The value of 'this' depends on how a function is being called.
 *
 */

var friend = 'Dan';

function getFriend() {
    return this.friend;
}

var someObject = {
    friend: 'Jon', 

    getFriend: function() {
        return this.friend;
    }
};

console.log(getFriend());
//> 'Dan'

console.log(someObject.getFriend());
//> 'Jon'

getFriend.bind(someObject);

console.log(getFriend());
//> 'Dan'

var herosObj = {
  avengers: ['Captain America', 'Hulk', 'Wolverine'],
  xmen: ['Wolverine', 'Jean Grey', 'Professor X'],
  addAvenger: function(newAvenger) {
    this.avengers.push(newAvenger);
  }, 
  addXmen: function(newXmen) {
    this.xmen.push(newXmen);
  },
  getAvengersAndXmen: function() {
    /* // wrong!
        return this.avengers.filter(function(hero) {
            return this.xmen.indexOf(hero) !== -1; 
        });
    */

    //correct!
    var self = this;
    return this.avengers.filter(function(hero) {
        return self.xmen.indexOf(hero) !== -1;
    });
  }
};

console.log(herosObj.getAvengersAndXmen());
