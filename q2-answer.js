//Answer for Q2 starts here//

// Task 1: Add code here
let patients = [];

function addPatient(patientName){
    patients.push(patientName)
}

// Task 3: Add code here
function listPatient() {
    let formattedList = '[';
    patients.forEach(function(patient, index) {
        // Add patient name to the formatted list
        formattedList += `"${patient}"`;
        // Add comma if not the last patient
        if (index !== patients.length - 1) {
            formattedList += ', ';
        }
    });
    formattedList += ']';
    console.log(formattedList); // Print the formatted list
}

addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]