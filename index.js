
// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

const totalMoney = 1000;
const applePrice = 350;
const orangePrice = 300;
const totalCost= applePrice + orangePrice;
const returnMoney = totalMoney - totalCost;
// console.log(returnMoney);

// verification
const verifyTotal = returnMoney + totalCost;
// console.log(verifyTotal);




// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

const mathematicsMarks = 98;
const biologyMarks = 90;
const chemistryMarks = 89.46;
const physicsMarks = 90;
// const banglaMarks = 90.88;

const totalMarks = mathematicsMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
// console.log(totalMarks);

const numberOfSubjects = 5;
const averageMarks = totalMarks/numberOfSubjects;
// console.log("Average Marks :", averageMarks.toFixed(2));




// Task-3
// You task is to divide the given number by 5 and show the remainder as the output.

// Input:
// The first line of the input contains the number.

// Output:
// Print the remainder.

const inputNumber = 432;

const remainder = inputNumber % 5;
// console.log("remainder :", remainder);




// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.

var a = isNaN('11');
console.log(a);
// output ti false hobe cz '11' string ta songkhay convert hote pare.

var b =isNaN(2-10);
console.log(b);
// output ti false hobe cz '2-10' string tar fol ekta valid songkha.