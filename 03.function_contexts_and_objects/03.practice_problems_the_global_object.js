// 1) window

// 2) true

// 3) error, b is not defined. b is in the func() context, not the global context.

// 4) 1, because b isn't declared, so it is assinged to the global scope

// 5) Only b can be successfully delted
// Undeclared global variables can be deleted, but not declared global variables.

// 6) No. Because it is declared.
// A function declaration effectively declares a new variable and assigns a function to it. Since this process involves declaration, the resultant variabe cannot be deleted.

// 7) no, yes, no
  // yes, no, no