let person = {
    firstName : "Jane",
    lastName :  "Smith",
    hobby : "swimming"
}

// Task 1: Modify this function to use object destructuring for the inputs to display only the first name and hobby properties of the object to the console:
// */
const introduce = ({ firstName, hobby}) => {
  console.log(`Hello, my name is ${firstName} and I love ${hobby}!`);
}

greet(person);
//The output should be "Hello, my name is Jane and I love swimming!"
