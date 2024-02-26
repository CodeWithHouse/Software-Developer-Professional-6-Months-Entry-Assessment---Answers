//Answer for Q1 starts here//
function swap(x, y) {
    // Check if x and y are not numeric
    if (typeof x !== 'number' || typeof y !== 'number') {
        // Return -1 if either x or y is not numeric
        return -1;
    } else {
        // Declare a temporary variable to hold the value of x
        let temp = x;
        // Swap the values of x and y
        x = y;
        y = temp;
        // Print the swapped values of x and y
        console.log("Swapped values: x =", x, ", y =", y);
    }
}
// Task 2: Add code here
// Scenario 1: "Apple", 10
// Invoke swap function with non-numeric values
let result1 = swap("Apple", 10);
// Check if the result is -1, indicating an error
if (result1 === -1) {
    // Print an error message if the result is -1
    console.log("Error: Both values must be numeric.");
}

// Scenario 2: 9, 17
// Invoke swap function with numeric values
let result2 = swap(9, 17);
// Check if the result is -1, indicating an error
if (result2 === -1) {
    // Print an error message if the result is -1
    console.log("Error: Both values must be numeric.");
}