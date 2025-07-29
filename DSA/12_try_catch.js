// What Is Error Handling?
// Error handling means catching and fixing unexpected problems in your code — without stopping the entire program.



// 1. try...catch – Catch and Handle Errors
// Example 1: Using an undefined variable

// try {
//   let total = price * 5;  // price is not declared
//   console.log("Total:", total);
// } catch (error) {
//   console.log("Something went wrong!");
//   console.log("Error message:", error.message);
// }




// 2. finally – Code That Always Runs
// Example 2: Cleaning up after an error

// try {
//   let marks = [90, 85, 100];
//   console.log(marks[5].toString());  // undefined.toString() = error
// } catch (error) {
//   console.log("Caught error:", error.message);
// } finally {
//   console.log("This line runs no matter what.");
// }




// 3. throw – Create Your Own Errors
// Sometimes you want to raise an error on purpose.
// Example 3: Custom error for invalid age

// function checkAge(age) {
//   if (age < 0) {
//     throw new Error("Age cannot be negative");
//   }
//   console.log("Valid age:", age);
// }
// try {
//   checkAge(-5);
// } catch (error) {
//   console.log("Caught:", error.message);
// }








// What is `reduce()`?
// The `reduce()` method is used to reduce an array to a single value — like a sum, product, max value, or even a new object or array.
// It works by applying a function to each element and carrying forward an accumulator.

let array = [10000,1, 2, 3, 99999999,4, 45, 6]
// console.log(array.reduce((acc, ele) => { return acc * ele }, 1))
console.log(array.reduce((acc, ele) => {
    console.log("Acc : "+acc)
    return Math.max(acc,ele)
}))