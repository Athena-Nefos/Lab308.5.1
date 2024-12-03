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

console.log(Math.ceil(average))

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

