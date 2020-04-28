// 1) 
// var turk = { 
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription: function() {
//     return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   var returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription);

// undefined undefined is a undefined.
// When we extracted getDescription from turk and passed it into logReturnVal as an argument, we removed the method from its context. As a result, upon execution as func, this will point to the global object, rather than turk. Since Window doesn't have properties defined for firstName, lastName, or occupation, we get the output we do.





// 2) 
// Alter logReturnVal such that it takes an additional context argument, and use one of the methods we've learned in this lesson to invoke func inside of logReturnVal with context as its function execution context. Alter the invocation of logReturnVal and supply turk as the context argument.

// var turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription: function() {
//     return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) {
//   var returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);


// Using `call` to invoke `func` and passing in the argument `context`, we are able to supply the function with execution context. On the invocation on the last line of our code we do just this, supplying `turk` as the context and producing our desired output.

// Note that, in this case, the use of `apply` is equally suitable as a solution.





// 3 )
// Suppose that we want to extract getDescription from turk, but always have it execute with turk as context. Use one of the methods we've learned in the last lesson to assign such a permanently bound function to a new variable, getTurkDescription.

// var dogo = {
//   firstName: 'Buck',
//   lastName: 'Duck',
//   occupation: 'Dogo',
// }

// var getTurkDescription = turk.getDescription.bind(turk);
// logReturnVal(getTurkDescription, dogo);



// 4)
// Consider the code below, and our desired output:
// var TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls', 
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ' ' + title);
//     }, this);
//   }
// };

// TESgames.listGames();

// Desired output:
// The Elder Scrolls Arena
// The Elder Scrolls Daggerfall
// The Elder Scrolls Morrowind
// The Elder Scrolls Oblivion
// The Elder Scrolls Skyrim


// No because the context is not the TESgames but the anynomous function that is passed to the forEach function. The implicit context of all functions is the global object, so 'this' is refering to the global object. There is no serisTitle property on the global object, so teh output will be:
// undefined Arena
// undefined Daggerfall
// undefined Morrowind
// undefined Oblivion
// undefined Skyrim

// To fix it, we can pas in the context to the forEach function. We do this by adding `this` as an argument after the anynomous function.


// Book Answer:
// This code dones't log our deired output.
// This happens because functions as arguments lose the surrounding context. In this case, the function expression invoked on each iteration of `forEach` inside of `listGames` loses `TESgames` as context. As a result, `this` on line 6 references the global object, and resolves to `undefined` rather than "The Elder Scrolls"



// 5)

// var TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls', 
//   listGames: function() {
//     var self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ' ' + title);
//     });
//   }
// };

// TESgames.listGames();


// 6) 
// var TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls', 
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ' ' + title);
//     }, this);
//   }
// };

// TESgames.listGames();




// 7) 


// var foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }

//     increment.call(this);
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a);

// // foo.a will still be 0





// 9) 

var foo = {
  a: 0,
  incrementA: function() {
    var increment = function() {
      this.a += 1;
    }.bind(this);

    increment();
    increment();
    increment();
  }
};




foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);








































