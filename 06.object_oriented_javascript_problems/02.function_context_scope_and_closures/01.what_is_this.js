var person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// possibilities:
// 'Rick Sanchez'
// undefined because the global object doesn't have firstName or lastName attributes
// 'Rick ' because the + doesn't work for some reason.

// final answer: undefined (wrong)


// Actual Answer:  
// "If you said it logs `NaN` , you're correct. It is tempting to say that the code will log "Rick Sanchez" to the console but that's not correct.
// Anywhere outside a funciton, the keyword `this` is bound to the global object. If the keyword is used inside a function, then its value deponds on how the function was invoked. 
// Since `window.firstName` and `window.lastName` (if you're using a browser) are not defined, the operation being perfomred here is `undefined + undefined` which results in fullName having the value `NaN`