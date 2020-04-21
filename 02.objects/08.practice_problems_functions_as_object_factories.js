// var chile = {
//   name: 'The Republic of Chile',
//   continent: 'South America',
//   getDescription: function() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// var canada = {
//   name: 'Canada',
//   continent: 'North America',
//   getDescription: function() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// var southAfrica = {
//   name: 'The Republic of South Africa',
//   continent: 'Africa',
//   getDescription: function() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// Duplication: 
// getDescription



// 2)

function makeCountry(name, continent, visited = false) {
  return {
    name: name,
    continent: continent,
    visited: visited,
    visitCountry: function() {
      this.visited = true;
    },
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '. I ' + (this.visited ? 'have' : "haven't") + ' visited ' + this.name +'.';
      
    },
  };
};

var chile = makeCountry('The Republic of Chile', 'South America');
var canada = makeCountry('Canada', 'North America');
var southAfrica = makeCountry('The Republic of South Africa', 'Africa');

// console.log(chile.getDescription());       // "The Republic of Chile is located in South America."
console.log(canada.getDescription());      // "Canada is located in North America."
// console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."


canada.visitCountry();

console.log(canada.getDescription());  


















