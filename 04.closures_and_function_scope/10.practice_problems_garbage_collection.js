// 1)
// Yes it is. Garbage collection means that JavaScript automatically frees up space in memory when a stored value no longer needs to be stored.

// 2)
var myNum = 1;

function foo() {
  var myStr = 'A string';
  // what is eligible for GC here?

  // ?? I don't know... 1 ?
}

foo();

// what is eligible for GC here?
// 'A string'


// 3) 

