console.log(hello());

function hello() {
    return "Hello there!";
}

//console.log(hola());
//> not defined!

var hola = function() {
    return "Hola";
};

(function () {
    var i = 0;
    var total = 0;i
    while(i < 10) {
        var j = i;
        total += i;
        i += 1;
    }
    //console.log(j);
    //> 9
})();

