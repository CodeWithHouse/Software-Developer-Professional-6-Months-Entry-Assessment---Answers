//Answer for Q3 starts here//
const dog = {
    breed: "dog"
}

// Cloning the dog object using the spread operator
const cat = { ...dog };

cat.breed = "cat";

console.log("dog", dog); // Prints "dog { breed: 'dog' }"
