
let inputString = "Hello wold";

let modifiedString = inputString.toLowerCase(); // avoiding case-sentivity

let frequencyOfChars = {}; // crating an object to store the occurrence of characters in the given string

for (let char of modifiedString){ // iterating though the string

    // checking whether char present in the object
    if(frequencyOfChars[char]){
        // if char present we will increment the count

        frequencyOfChars[char]++;
    }else{
        frequencyOfChars[char] = 1; // just adding the count as 1 for not available char in object
    }
}

let result = "" // an empty string or char

// iterating through object

for(let char in frequencyOfChars){
    // checking the frequency of the char, if it is occuring once then assigning it to the result

    if(frequencyOfChars[char] === 1){
        result = char;
        break;
    }
}

// printing output to the console

console.log(result);