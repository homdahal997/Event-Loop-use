//Part 1: Stack Overflow
let counter = 0;

function recursiveFunction() {
    counter++;
    recursiveFunction();
}

try {
    recursiveFunction();
} catch (error) {
    console.error('Error:', error);
    console.log('Max stack size:', counter);
}