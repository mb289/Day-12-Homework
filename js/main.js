//Part 1



//Sum


function sumForLoop(){  
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    for(var i = 0; i < args.length; i++){ //basic syntax for loops
        sum += args[i];
    }
    return sum;
}

function sumForEach(){
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    args.forEach(function(num){ sum += num; });
    return sum;
}

// having issues with custom
function sumForEachCustom(){
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    forEach(args, function(){ sum += arguments[0]; });
    return sum;
}


//Average

var avgForLoop = function() {
    var sum = 0;
    var leng = arguments.length;
    for (var i = 0; i < leng; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}


function avgForEach(){
    "use strict";
    var leng = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    leng.forEach(function(num){ sum += num; });
    return sum / arguments.length;
}

// having issues with custom
function avgForEachCustom(){
    "use strict";
    var leng = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    forEach(leng, function(){ sum += arguments[0]; });
    return sum/ arguments.length;
}


// return the largest number













// Part 2


var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];

console.log(customers);
// YOUR CODE WILL GO IN THIS NEXT SECTION
// find all customers whose firstname starts with 'J',
// map() those people into an array of objects like: { name : "firstname c.lastname" }
// then sort alphabetically

var projections = customers
    projections.filter(function(projections){ /* ... */ })
    .map(function(c){  /* ... */ })
    .sort(sortByName);

function sortByName(c1, c2) {
    "use strict";
    //...
}

console.log(projections);





fruits = fruits.filter(function(fruit){
    return fruit.color === "red";
}).map(function(fruit){
    return fruit.name;
})

console.log(fruits.join(", "));
