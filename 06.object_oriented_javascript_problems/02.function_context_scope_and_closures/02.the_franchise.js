let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function () {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};


console.log(franchise.allMovies());

// Because this is referring to the unnamed function instead of a method. So this refers to the global object