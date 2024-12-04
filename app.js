//Assignment Pt. 1 Thinking Functionally

/** While there is rarely a “correct” answer in programming, it is important to keep your audience (other programmers) in mind. Write functions with descriptive names, and clear inputs and outputs.
With that in mind, write functions that accomplish the following: */

//Take an Array of numbers and return the sum

const numArray = [1, 2, 2, 5, 6, 7]

// "for" loop

let sum = 0;
for (let i = 0; i < numArray.length; i++){
    sum += numArray [i]
}
//console.log(sum);

//Take the Array of numbers and return the average

const average = sum / numArray.length;

console.log(Math.ceil(average)) // Math.ceil rounds number up to the nearest whole number

//Take an Array of strings and return the longest string

const nameStr = ["Athene", "Shila", "Shobana", "Jordan"];

//Step 1:  Intailize a variable to store the longest string found so far. 
// Start with an empty string since no strings have been compared yet

let longest = "";

// Step 2: Loop through each string in the array.
for (let i = 0; i < nameStr.length; i++) {
    // Step 3: Compare the length of the current string (nameStr[i])
    // with the length of the current longest string (longest).
    if (nameStr[i].length > longest.length) {
        //Step 4: If the current string is longer, update 'longest' to the current string.
        longest = nameStr[i];
    }
}

// Step 5: After the loop finishes, 'longest' will contain the longest string.
console.log(longest); // Output: Shobana


// Take an array of strings, and a number and return an array of the strings that are longer than the given number.

stringsLongerThan(['Good', 'Morning', 'Evening', 'a', 'to','Afternoon'], 2)

// Function to return strings longer than a given number

function stringsLongerThan(stringsArray, minLength) {

    // Step 1: Intialize a new array to hold the strings that meet the condition.

    const result = [];

    // Step 2: Loop through each string in the input array.

    for (let i = 0; i < stringsArray.length; i++) {

    // Step 3: Check if the current string's length is greater than the given number (minLength).

    if (stringsArray[i].length > minLength){

    // Step 4: If true, add the string to the result array.

        result.push(stringsArray[i]);
    }
    }
    // Step 5: Return array containing the strings that meet the condition.
    return result;
}    

// Example usage to demonstrate how to use the function
const strings = ['Good', 'Morning', 'Evening', 'Afternoon', 'a', 'to'];
const result = stringsLongerThan(strings, 2);
console.log(result); //Output : ["Good", "Morning", "Evening", "Afternoon"]

// Take a number n, and print every number between 1 and n without using loops.  Use recursion.

function printNumbers(n, current = 1) {
    // Step 1: Base Case - If Current exceeds n, stop the recursion.
    // This prevents infinite recursion and stops when we have printed all numbersup to n.
    if (current > n) {
        return;  // End the recursion when current is greater than n.
    }

    // Step 2: Print the current number.
    //The function prints the current number on the console.

    console.log(current);

    //Step 3: Recursive Case - Call the function again with the next number.
    //The function calls itself with the currentnumber incremented by 1, printing the next number.
    printNumbers(n, current + 1);
}

// Example Usage , also necessary to provide the value for n
    printNumbers(7);

// Pt. 2 Thinking Methodically

/** When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.
For the tasks below, use the following data to test your work: */

const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]; 

// Sort the Array by Age _ We want to sort the array by the age property (ascending order).  Since age is a string, we will need to convert it to a number for accurate sorting. 

// Step 1: Sort the array by age

const sortedByAge = people.slice().sort((a, b) => Number(a.age) - Number(b.age));

/** Explanation :
 *   - 'slice()' creates a shallow copy of the array soo we don't modify the original.
 *   - 'sort' takes a callback function with two elements 'a' and 'b'.
 *   - We compare their 'age' values as numbers (using Number() to convert from a string to a number) and sort them in ascending order.
 */

console.log(sortedByAge)

// Filter the Array to remove entries greater than 50 (age > 50)

//Step 2: Filter out people with age greater than 50

const filteredByAge = people.filter(person => Number(person.age) <= 50);

/** Explanation :
 *   - 'filter()' takes a callback function that checks a condition.
 *   - we include only the object where 'age' (as a Number) is less than or equal to 50.
 */

console.log(filteredByAge)

// Map the Array :  Change the occupation key to job. Increment the age value by 1.

// Step 3: Map method to change keys and increment age.

const mappedArray = people.map(person => {
    return {
        id: person.id,
        name: person.name,
        job: person.occupation, //Rename 'occupation' to 'job'
        age: (Number(person.age) + 1).toString()  // Increment age by 1 and convert back to string.
    };
});

/** Explanation:
 *   - 'map()' creates a new array by transforming each element based on the callback function.
 *   - We renamed 'occupation' to 'job' and added 1 to the 'age'.
 */

console.log(mappedArray);

//Calculate the sum of the Ages using .reduce - We'll calculate the sum of all the age values (converted to numbers)

// Step 4: Calculate the sum of ages

const totalAge = people.reduce((sum, person) => sum + Number(person.age), 0);

/** Explanation :
 *   - 'reduce()' takes callback and a initial value (here, 0).
 *   - The callback adds the current person's age (as a number) to the running total.
 */

console.log(totalAge)

// Calculate the Average Age - Using the total from Step 4, calculate the avergage age

// Step 5: Calculate the average age

const averageAge = totalAge / people.length;

/** Explanation :
 *   - Divide the total age by the number of peoplein the array
 */

console.log(averageAge);

// Pt. 3 Thinking Critically

/** Step 1 Understand the Passing By Value vs. Reference :
 * In JavaScript:
 * Primitive values (like numbers, strings, booleans) are passed by value: a copy of the value is passed into functions.
 * 
 * Objects (including arrays and Date objects) are passed by reference: functions can directly modify the original object unless explicitly copied.
 * 
 * This distinction impacts how we work with objects in functions, especially whenwe want to modify an object or make a copoy of it.
 */

// Step 2: Write a function to Increment age in the Original Object
// Objective: Modify the age property of the input object and add an updated_at timestamp.

function incrementAge(obj) {
    // step 1: Check if the object has an 'age' property.
    if (!obj.hasOwnProperty('age')) {
        // If no 'age' property, initialize it to 0.
        obj.age = 0;
    }

// step 2: Increment the 'age' property.
    obj.age++;

// step 3: Add or update the 'updated_at' property with the current date.
    obj.updated_at = new Date();
    
// step 4: Return the modified object.
    return obj;    
}

let person = {name: 'Alice'};
console.log(incrementAge(person));

// Step 3: Write a function to copy the object, increment age in the copy, and add/update feilds

/** Objective: Make a copy of the object, increment the age in the copy, and modify updated_at. */

function incrementAgeCopy(obj) {
    //step 1: Create a shallow copy of the object using the spread operator.
    const copy = {...obj };

    //step 2: Check if the copy has an 'age' property.
    if (!copy.hasOwnProperty('age')) {
       //if no 'age' property, initialize it to 0.
       copy.age = 0;  
    }

    // step 3: Increment the 'age' property in the copy.
    copy.age++;

    // step 4: Add or update the 'updated_at' property with the current date.
    copy.updated_at = new Date();

    // step 5: Return the modified copy.
    return copy;
}

// Example usage:
let originalPerson = { name: "Bob", age: 30 };
let modifiedCopy = incrementAgeCopy(originalPerson);

console.log(originalPerson);

console.log(modifiedCopy);


// Thought Experiment: Modifying the Date Object in the Copy

/** Since the date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavoir? */

/** Since the Date object is Passed By Reference, modifiying it in the copoied object will also modify it in the original object.  This can lead to undesired behavior. */

// Example:

//  let person2 = {name: "Charlie", updated_at: new Date() };
//  let copy = {...person2 };

// Modify the Date object in the copy.
//  copy.updated_at.setTime(0);

//  console.log(person2.updated_at); //This will also show time as 0!

//there are several ways to make copy safe solutions where the copy and original do not share the same date/time data

//for example : A Deep Copy vs a Shallow copy.  When you create a copy of person2 using {...person2}, it creates a shallow copy of person2.  This means that the primitive values (like name) are copied over, but objects (like updated_at, which is a Date object) are still shared between the original person2 and the copy.

// Deep Copy Example:

let person2 = {name: "Charlie", updated_at: new Date() };
let copy = {...person2, updated_at: new Date(person2.updated_at) } //Create a new Date object

copy.updated_at.setTime(0); //Modify the copy's Date object

console.log(person2.updated_at);  //will retain the original time
console.log(copy.updated_at);  // will show time as 0

/** Pt 5. Reflections:
 * Thinking Back
 * Once you have completed the tasks outlined above, take any extra time you may have to revisit your previous JavaScript assignments. 
How many of the scripts could be turned into functions?
What would the parameters look like? What kind of returns should they have?
Could you package your code into even smaller blocks, creating helper functions?
What else could be changed to optimize the code, knowing what you now know?


Reflecting on the JavaScript assignments we’ve worked on recently, these are some great questions to deepen your understanding and refine your coding skills. Here's how you can think through these points with examples based on our recent discussions:

1. Turning Scripts into Functions
Many of the scripts we’ve worked on can be modularized into functions. Functions make your code reusable and easier to read.
Example: The "Charlie" Example
We created a function incrementAgeCopySafe that works on an object and returns a modified copy.

Before Function: Hardcoding changes directly into the object or copy each time.
With Function: The task becomes reusable with different objects.
2. Defining Parameters
Think of parameters as placeholders for the data your function will work on.
Parameters should represent the inputs needed to solve the problem.
Example: The Recursion Function
javascript
Copy code
function printNumbers(n, current = 1) { ... }
Parameters:
n: The number to count up to.
current: Keeps track of the current count (defaulting to 1).
Why These Parameters?: They allow flexibility, letting us call printNumbers(10) or start from a different current value.
3. Defining Returns
The return value should represent the function's result. A well-designed function:
Returns what it promises in its name/purpose.
Doesn't have side effects unless needed (e.g., logging to console).
Example: stringsLongerThan
Returns an array of strings longer than the specified length.
Ensures the output matches expectations without modifying the original array.
javascript
Copy code
function stringsLongerThan(stringsArray, minLength) {
    return stringsArray.filter(string => string.length > minLength);
}
4. Breaking Code into Helper Functions
When a function becomes too large or does multiple things, it can be broken into smaller helper functions.
Helper functions make debugging and reuse easier.
Example: In incrementAgeCopySafe:
javascript
Copy code
function safeUpdateDate(obj) {
    return { ...obj, updated_at: new Date() };
}
This helper function isolates the logic for updating the date, improving readability.

5. Optimizing Code
Refactor repetitive or verbose code.
Use built-in methods like .filter, .map, and .reduce where applicable.
Ensure immutability for cleaner and safer code.
Example: Using reduce for Total Age Calculation
Original verbose logic:

javascript
Copy code
let total = 0;
for (let person of people) {
    total += Number(person.age);
}
Refactored with .reduce:

javascript
Copy code
const totalAge = people.reduce((sum, person) => sum + Number(person.age), 0);
Reflecting on Lessons Learned
Use functions to encapsulate tasks.
Prioritize parameters that make the function adaptable.
Return meaningful results and avoid unnecessary side effects.
Break down large functions into smaller, manageable parts.
Leverage JavaScript’s powerful methods for concise and efficient solutions.
Next Steps
Go back to older assignments and look for patterns:
Could you replace loops with .map, .filter, or .reduce?
Can repetitive logic be turned into a reusable function?
Test your refactored code with various inputs to ensure it's robust.

 * 
 */