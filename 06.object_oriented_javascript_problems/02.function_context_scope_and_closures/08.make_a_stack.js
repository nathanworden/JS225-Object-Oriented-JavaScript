function newStack() {
  let stack = [];

  return {
    push: function(value) {
      stack.push(value);
    },
    pop: function() {
      return stack.pop()
    },
    printStack: function() {
      stack.forEach(funcion(value) {
        console.log(value);
      });
    }
  };
}


let stark = newStack();

// console.log(stark);
stark.push(5);
console.log(stark);
