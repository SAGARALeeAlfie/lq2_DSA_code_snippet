let registeredUsername = prompt("Register your Username"); // Declare a variable to hold the username
let registeredPassword = prompt("Register your passcode"); // Declare a variable to hold the password
let reEnteredPassword = prompt("Re-enter your passcode"); // Declare a variable to hold the re-entered password

if (registeredPassword === reEnteredPassword) { // Compare the registered password and re-entered password
    alert("Congratulations! You have successfully registered."); // Window pop-up to congratulate the user for registering

    let enteredUsername = prompt("Username: "); // Declare a variable to hold the username on login

    if (enteredUsername === registeredUsername) { // Compare the registered username and entered username on login
        let enteredPassword = prompt("Password: "); // Declare a variable to hold the encoded password on login

        (enteredPassword === registeredPassword) // Compare the registered password and entered password on login
            ? alert("Welcome to DSA, " + registeredUsername) // Window pop-up to congratulate the user for successful login
            : alert("Incorrect Password, Re-run the code!"); // Window pop-up to inform the user of incorrect password
    } else { 
        alert("Incorrect Username, Re-run the code!"); // Window pop-up to inform the user of incorrect username
    }
} else { 
    alert("Password does not match, Re-run the code!"); // Window pop-up to inform the user that passwords do not match
}
