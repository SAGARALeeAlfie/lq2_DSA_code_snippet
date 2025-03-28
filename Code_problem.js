// Prompt user for input
let name = prompt("Enter your Name:");
let address = prompt("Enter your Address:");
let age = parseInt(prompt("Enter your Age:"));
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):");
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");

// Ensure valid age input
if (isNaN(age) || age <= 0) {
    alert("Invalid age input. Please refresh and enter a valid age.");
} else {
    let iterations = Math.floor(age / 4); // Determine loop iterations

    // Course segregation
    switch (course.toUpperCase()) {
        case "BSCS":
        case "BSM":
        case "BAEL":
            // Role segregation
            switch (classRole.toUpperCase()) {
                case "OFFICER":
                case "STUDENT":
                case "TEACHER":
                    alert(`Welcome ${name}, you are a ${classRole} in ${course}`);
                    console.log(`User: ${name} - Role: ${classRole} - Course: ${course}`);
                    for (let i = 1; i <= iterations; i++) {
                        console.log(`${i}: ${name}`);
                    }
                    break;
                default:
                    alert("Invalid role. Defaulting to Student.");
                    console.log(`User: ${name} - Role: Student - Course: ${course}`);
                    for (let i = 1; i <= iterations; i++) {
                        console.log(`${i}: ${name}`);
                    }
                    break;
            }
            break;
        default:
            alert("Invalid course. Please refresh and enter a valid course.");
            break;
    }
}
