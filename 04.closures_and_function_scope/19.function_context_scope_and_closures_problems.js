var person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: function() {
    return this.firstName + this.lastName;
  }
};

console.log(person.fullName());

// funciton: [fullName]

// The function isn't invoked, so it just logs the function