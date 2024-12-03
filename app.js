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
