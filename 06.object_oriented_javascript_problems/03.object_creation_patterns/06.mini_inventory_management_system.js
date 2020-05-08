// item creator - all necessary information is present and valid
// items manager - creates items, updates information about items, deletes items, and querying info about items
// reports manager - generates reports for a specific item or all items.

function ItemManager() {
  create: function dumbname(itemName, category, quantity) {
    if (quantity === undefined || quantity <= 0) {return false}

  }
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

