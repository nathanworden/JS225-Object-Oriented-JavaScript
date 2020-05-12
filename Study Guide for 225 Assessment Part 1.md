# Study Guide for 225 Assessment Part 1

[toc]

## Objects

- Organizing code into appropriate objects

  - With objects we can organize data so the relationship between pieces of data is more clear.
  - The benefits of organizing code into objects becomes evident when an application uses more than one instance of a given Object type.
  - Object-Oriented programming is a pattern that uses objects as the basic building blocks of a program instead of local variables and functions.
  - The object-oriented approach to programming puts data and procedures that manipulate that data into containers, aka 'objects'.
  - We move complexity inside objects instead of exposing it globally.
  - When we must make changes, we can restrict those changes to particular objects; the changes don't ripple throughout the entire project.
  - Object:
    - Organize related data and code together.
    - Are useful when a program needs more than one instance of something. 
    - Become more useful as the code base size increases.
  - Object oriented programming is a pattern that uses objects to organize code instead of Functions. Objects can also contain data or state.
  - You can call the property of an object a `method` when the value you assign to it is a function.
  - When you invoke an object's methods, they can access the object to which they belong to by using `this`.

- Object factories

  - Object factories don't differ in a technical sense from functions in general, apart from the fact that they return new objects.

  - Example of an Object Factory:

  - ```javascript
    function makeRobot() {
      var robot = {};
      robot.speak = function() {
        console.log('Danger, Will Robinson!');
      };
    
      return robot;
    }
    ```

    - We cannot tell whether an object has been created by `makeRobot`.
    - Each object created by `makeRobot` has it's own copy of `speak`
    - Each object returned by `makeRobot` is a new object.
    - If we compare two objects created by `makeRobot` using the strict or non-strict equality operator, the comparison will return `false`.
    - https://launchschool.com/lessons/4671d66f/assignments/6463ca43

## Determining/setting function execution context (`this`)

- Implicit function execution context
- Explicit function execution context
- Dealing with context loss

## Scope and Closures

- Creating and using private data
- Garbage collection
- IIFEs
- Partial Function Application
  - Creating a closure around some of the data

## Object creation patterns

- Constructor functions
- Prototype objects
- Behavior delegation
- OLOO and Pseudo-Classical patterns