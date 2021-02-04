// Jamie Ellis
/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

const positiveNumbers = [1, 2, 3, 4, 5]


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const user1 = {
    name: "Jamie",
    surname: "Ellis",
    email: "jamiekyaellis@gmail.com",
    age: 19,
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

user1.drivinglicense = true;

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete user1.age

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

const user2 = {
    name: "John",
    surname: "Wick",
    email: "JohnWick@gmail.com",
}

user1.email === user2.email ? console.log("The email from user1 and user2 are the same.") : console.log("The emails from user1 and user2 are different.")

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/

let totalShoppingCart = 23
let shippingCost = 0
let totalCost = totalShoppingCart
shippingCost = totalCost > 50 ? "The total cost of your basket is: " + (totalCost + 0) + ". You qualify for free shipping!" : "The total cost of your basket is: " + (totalCost + 10) + ". Shipping costs are 10."
console.log(shippingCost)

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

totalShoppingCart = 23/1.20
totalCost = totalShoppingCart
shippingCost = totalCost > 50 ? "It's Black Friday and you have saved 20% off your order! The total cost of your basket is: " + (totalCost + 0) + ". You qualify for free shipping!" : "It's Black Friday and you have saved 20% off your order! The total cost of your basket is: " + (totalCost + 10) + ". Shipping costs are 10."
console.log(shippingCost)

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

const car1 = {
    brand: "Ford",
    model: "Fiesta",
    licensePlate: "MA 6318 BH",
}

let car2 = {}
let car3 = {}
let car4 = {}
let car5 = {}
let car6 = {}

Object.assign(car2, car1)
Object.assign(car3, car1)
Object.assign(car4, car1)
Object.assign(car5, car1)
Object.assign(car6, car1)
car1.licensePlate = "MA 6318 BH"
car2.licensePlate = "RE 5623 BH"
car3.licensePlate = "TY 5673 BH"
car4.licensePlate = "AW 4569 BH"
car5.licensePlate = "RO 5023 BH";
car6.licensePlate = "HE 5687 BH";

console.log(car1, car2, car3, car4, car5, car6);
/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [car1, car2, car3, car4, car5, car6];

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
// console.log(carsForRent);
carsForRent.shift();
// console.log(carsForRent);

/* EXERCISE 11
Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
*/

console.log(typeof(car1.licensePlate), typeof(car1.brand));

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

const carsForSale = ["Ferrari", "Lambo", "Datsun"];
const totalCars = carsForSale.length + carsForRent.length;
console.log(totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

for(let i=0; i < carsForSale.length; i++) {
    console.log(carsForSale[i]);
}
/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/