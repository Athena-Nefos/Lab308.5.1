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

//Take an array of strings, and a number and return an array of the strings that are longer than the given number.

const stringsLongerThan(['Good', 'Morning', 'Evening', 'a', 'to','Afternoon'], 2)

// Function to return strings longer than a given number

function stringsLongerThan(stringsArray, minLength) {

    // Step 1: Intialize a new array to hold the strings that meet the condition.

    const result = [];

    // Step 2: Loop through each string in the input array.

    for (let i = 0; i < stringsArray.length; i++) {

    // Step 3: check if the current string's length is greater than the given number (minLength).

    if (stringAray[i].length > minLength){

    // Step 4: If true, add the string to the result array.

        result.push(stringArray[i]);
    }
    }
    // Step 5: Return array containing the strings that meet the condition.
    return result;
}    

// Example usage to demonstrate how to use the function
const strings = ['Good', 'Morning', 'Evening', 'Afternoon', 'a', 'to'];
const result = stringsLongerThan(strings, 2);
console.log(result); //Output : ["Good", "Morning", "Evening", "Afternoon"]