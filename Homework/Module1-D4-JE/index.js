/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = (l1, l2) => {
    const result = l1 * l2
    console.log(result)
}

area(2, 4)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = (int1, int2) => {
    return (int1 === int2 ? (int1 + int2) * 3 : int1 + int2);
}

console.log(crazySum(2, 3))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = (intGiven) => {
    return (intGiven > 19 ? (intGiven - 19) * 3 : intGiven - 19)
}

console.log(crazyDiff(26))
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = (n) => {
    return ((n > 20 && n < 100 || n === 400)  ? true : false) 

}
console.log(boundary(500))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = (stringGiven) => {
    return (stringGiven.startsWith("Strive", 0) ? stringGiven : `Strive ${stringGiven}`)
}

console.log(strivify("hey My name is Jamie")) // without Strive in string 
console.log(strivify("Strive is cool")) // With Strive at beginning of string

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = (positiveInteger) => {
    return (positiveInteger % 3 == 0 || positiveInteger % 7 == 0 ? true : false)
}

console.log(check3and7(21))
/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = (stringGiven2) => {
    return (stringGiven2.split("").reverse().join(""));
}

console.log(reverseString("Hey my name is Jamie"))
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(stringGiven3) {
        
    return stringGiven3.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    
    }

    console.log(upperFirst("hey my name is jamie"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = (stringGiven4) => {
    return stringGiven4.substring(1, stringGiven4.length-1);
}

console.log(cutString("Hey my name is Jamie"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = (n1) => {
    for (let i = 0; i < n1; i++) {
        let listOfNumbers = [Math.random() * 11]
        return listOfNumbers
    }
}

console.log(giveMeRandom(4))
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/