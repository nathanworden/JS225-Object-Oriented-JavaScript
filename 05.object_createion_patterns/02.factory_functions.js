// So far we have been using object literals to create objecsts. In this and succeding assingments, we'll cover different patterns for creating objects. Earlier, we had a taste of this when we covered functions as Object Factories. We'll review that concept in this lesson before we move forward and discuss the other object creation patterns.

// Factory Functions

// Using functions as object factories or, more succinctly, using factory functions (also called the "Factory Object Creation Pattern") provides us a way to create objects based on a pre-defined template:

function createPerson(firstName, lastName) {
  var person = {};
  person.firstName = firstName;
  person.lastName = lastName || '';
  person.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };

  return person;
}

var john = createPerson('John', 'Doe');
var jane = createPerson('Jane');

console.log(john.fullName()); // "John Doe"
console.log(jane.fullName()); // "Jane"

// We could also just return an object literal to write the function as:

function createPerson(firstName, lastName) {
  return {
    furstName: firstName,
    lastName: lastName || '',
    fullName: function() {
      return (this.firstName + ' ' + this.lastName).trim();
    },
  };
}


