
// 1)
// var messagae = 'Hello from the global scope!';

// function func(message) {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func(message);          // 'Hello from the function scope!'
// console.log(message);   // 'Hello from the global scope!'



// 2) 
// What will the code below log to the console? What does this output demonstrate in relation to the output of problem one?

// var myObj = { messgae: 'Greetings from the global scope!'};

// function func(obj) {
//   obj.message = 'Greetings from the function scope!';
//   console.log(obj.message);
// }

// func(myObj);                  // 'Greetings from the function scope!'

// console.log(myObj.message);   // 'Greetings from the function scope!'




// 3) 
// What will the code below log to the console?

// var message = 'Hello from the global scope!';

// function func() {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func();                 //  'Hello from the function scope!'
// console.log(message);   //  'Hello from the function scope!'






// 4) 
// What will the code below log to the console?
// var a = 10;
// var obj = {
//   a: a,
// }

// var newObj = obj;
// newObj.a += 10;

// console.log(obj.a === a);        // false  
// console.log(newObj === obj);     // true  


// console.log(obj);
// console.log(newObj);




// 5) Consider the code below:
var animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

var menagerie = {
  warthog: animal,
};

console.log(menagerie);

animal = {
  name: 'Timom',
  species: 'Suricata suricatta',
};

console.log(menagerie);

menagerie.meerkat = animal;

console.log(menagerie);

console.log(menagerie.warthog === animal); // false
console.log(menagerie.meerkat === animal); // true

console.log(Object.entries(menagerie));

//

// When animal is reassigned to 'Timom', that doesn't change the fact that menagerie.warthog is still pointing to 'Pumbaa'.

// Then when menagerie.meerkat is added to menagerie, animal is the 'Timom'.
// That means that menagerie now has warthog which is 'Pumbaa' and meerkat which is 'Timom'













































