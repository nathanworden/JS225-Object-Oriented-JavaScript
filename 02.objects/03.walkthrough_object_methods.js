var me = {
  id: 1,
  firstName: 'Jane',
  lastName: 'Doe',
};



var me = {};
me.id = 1;
me.firstName = 'Jane';
me.lastName = 'Doe';

var dopleganger = {
  id: 5,
  firstName: 'Jane',
  lastName: 'Doe',
}



function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

// fullName(me);

var friend = {
  id: 2,
  firstName: 'John',
  lastName: 'Smith',
};

// fullName(friend);

var mother = {
  id: 3,
  firstName: 'Amber',
  lastName: 'Doe',
};

var father = {
  id: 4,
  firstName: 'Shane',
  lastName: 'Doe',
};

// fullName(mother);
// fullName(father);

var people = [];

people.push(me);
people.push(friend);
people.push(mother);
people.push(father);

function rollCall(collection) {
  var length;
  var i;
  for (i = 0, length = collection.length; i < length; i += 1) {
    fullName(collection[i]);
  }
}

// rollCall(people);

function rollCall(collection) {
  collection.forEach(function(item) {
    fullName(item);
  });
}

// rollCall(people);


function rollCall(collection) {
  collection.forEach(fullName);
}




people = {
  lastIdUsed: 0,

  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    this.collection.push(person);
    lastIndexUsed = person.index;
  },

  getIndex: function(person) {
    var index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName && comparator.lastName === person.lastName) {
        index = i;
      }
    });

    return index;
  },

  remove: function(person) {
    var index;
    if(this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);

    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' && typeof person.lastName !== 'string';
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  getPersonWithId: function(id) {
    if (this.isInvalidId(id)) {
      console.log('No one has that id!')
    }

    let found = this.collection.filter(function(person) {
      console.log(`person.id: ${person.id}, id: ${id}`);
      console.log(`${person.id === id}`)
      person.id === id;
    });

    return found;
  },

  isInvalidId: function(id) {
    !this.collection.some(function(person) {
      person.id === id;
    });
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    var existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[exisitingPersonId] = person;
    }
  }
};

// console.log(people.getIndex(friend));
// people.remove(friend);
// people.remove({firstName: 'John', lastName: 'Smith'});
// console.log(people.getIndex(friend));

console.log(people.collection);

people.add(dopleganger);
console.log();
console.log(people.collection);

console.log();
console.log(people.getPersonWithId(9));































