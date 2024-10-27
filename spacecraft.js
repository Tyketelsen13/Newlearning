/* Task 1: No Parameters: Activate Hyperdrive */
const activatedHyperdrive = () => console.log("Activated Hyperdrive");  
activatedHyperdrive();
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.

/* Task 2: Implicit Return: Scan for Lifeforms */
const ScanForLifeforms = () => "No life found";
console.log(ScanForLife());
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.

/* Task 3: Implicit Return with Objects: Log Coordinates */
const currentCoordinates = () => ({x= 34,y: 72, z: 92});
console.log(currentCoordinates());
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.

/* Task 4: Understanding `this`: Message from Home Base */
const spacecraft = {
    name: "T-Voyager",
    recieveMessage: (message) => {
        console.log(`Message received: ${message}`);
        console.log(`This space craft is: ${this.name}`);
    }
};
spacecraft.receiveMessage("Hello, Earth!");
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
/*
 * Observations: console.log is showing undefined because arrow function does not have "this" context so it does not refer to the space craft object.
 * TODO: Explain here.
 */
