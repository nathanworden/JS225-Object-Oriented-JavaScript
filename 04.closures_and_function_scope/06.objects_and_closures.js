function makeList() {
  let items = [];
  return {
    add: function(item) {
      items.push(item);
      console.log(item + ' added!');
    },
    clear: function() {
      items = [];
      console.log('all items deleted');
    },
    remove: function(item) {
      if (items.includes(item)) {
        let idx = items.indexOf(item);
        items.splice(idx, 1);
        console.log(item + ' removed!');
      } else {
        console.log(item + " aren't on the list silly!");
      }
    },
    list: function() {
      if (items.length === 0) {
        console.log('This list is empty.');
      } else {
        items.forEach(item => {
          console.log(item);
        });
      }
    }
  }
}

var list = makeList();
list.add('peas');

list.list();

list.add('corn');

list.list();

list.remove('peas');

list.remove('bananas');

list.list();