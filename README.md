# Stack Overflow Demonstration

This is a simple JavaScript program that demonstrates a stack overflow error through recursion.

## Code Explanation

The program consists of a single recursive function `recursiveFunction()`, which increments a global `counter` variable each time it is called. The function calls itself indefinitely, leading to a stack overflow error when the maximum stack size is reached.

The recursive function call is wrapped in a try-catch block to handle the resulting RangeError when the maximum call stack size is exceeded. When this error occurs, the program logs the error message and the maximum stack size (represented by the `counter` variable) to the console.


## Caution

This program is intended for demonstration purposes only. It intentionally causes a stack overflow, which is generally considered a programming error.