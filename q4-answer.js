//Answer for Q4 starts here//

// Define the Parent class
class Parent {
    constructor() {
        this.abilities = ["Parenting", "Role modeling"];
    }

    // Method to display abilities
    showAbilities() {
        console.log("These are the abilities:");
        // Loop through the abilities array and print each ability
        for (const ability of this.abilities) {
            console.log(ability);
        }
    }
}

// Define the Child class that extends Parent
class Child extends Parent {
    // Constructor for Child class
    constructor() {
        // Call the constructor of the Parent class
        super();
    }

    // Method to add a new ability to the abilities array
    addNewAbility(newAbility) {
        // Add the new ability to the abilities array
        this.abilities.push(newAbility);
    }
}

// Create an instance of the Parent class
const parent = new Parent();
// Display the abilities of the parent
parent.showAbilities(); // Prints "Parenting" and "Role modeling"

// Create the instance of the Child class
const child = new Child();
// Add a new ability to the child
child.addNewAbility("Dancing");
// Display the abilities of the child
child.showAbilities(); // Prints "Parenting", "Role modeling", and "Dancing"
