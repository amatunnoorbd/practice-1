// Task- 1
// Free Drinks
//     - Burger more than 500tk: free Coke
//     - Else Coke: 30tk

const burgerPrice = 600;
let cokePrice;
if(burgerPrice > 500){
// cokePrice = 'Free';
// console.log(cokePrice = 'Free');
}else{
    // cokePrice = 30;
    // console.log(cokePrice = 30);
}


// Ternary Operator 
// burgerPrice > 500 ? console.log('burger khabona') : console.log('burger khabo');         



// Task -2

// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.


const weight = 100 ;
const height = 1.77;
const bmi = weight /( height ** 2);
if(bmi < 18.5){
// console.log(bmi.toFixed(2), "= You are underweight.");
}else{
    if(bmi >= 18.5 && bmi <=24.9){
        // console.log(bmi.toFixed(2), "= You are normal.");
    }else{
        if(bmi >= 25 && bmi <= 29.9){
// console.log(bmi.toFixed(2), "= You are overweight.");
        }else{
            if(bmi > 29.9){
// console.log(bmi.toFixed(2), "= You are obese.");
            }
        }
    }
}

// good practice
const weight2 = 96;
const height2 = 1.70;
let healthCategory;

// BMI calculate
const bmi2 = weight2 / (height2 ** 2);
if(bmi2 < 18.5){
    healthCategory = "You are underweight";
    }else{
        if(bmi2 >= 18.5 && bmi <=24.9){
            healthCategory = "You are underweight";
        }else{
            if(bmi2 >= 25 && bmi <= 29.9){
                healthCategory= "You are underweight";
            }else{
                if(bmi2 > 29.9){
                    healthCategory = "You are underweight";
                }
            }
        }
    }


console.log("Your BMI is:", `${bmi2.toFixed()}`)
console.log("Your health category:", `${healthCategory}`);



// Task - 3

// Grade Calculator
// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     F: 0-59

// const studentsScore = 69;
// let studentsGrade;
// if(studentsScore >= 90 && studentsScore <= 100){
//     studentsGrade = "A";
// }


// console.log(`student score is :`, `${studentsScore}`);
// console.log(`student grade is :`, `${studentsGrade}`);




const studentsScore = 9;
let studentsGrade;

if (studentsScore >= 90 && studentsScore <= 100) {
  studentsGrade = "A+"; 
} else if (studentsScore >= 80 && studentsScore < 90) {
  studentsGrade = "A"; 
} else if (studentsScore >= 70 && studentsScore < 80) {
  studentsGrade = "B";
} else if (studentsScore >= 60 && studentsScore < 70) {
  studentsGrade = "C";
} else if (studentsScore >= 50 && studentsScore < 60) {
  studentsGrade = "D";
} else {
  studentsGrade = "F";
} 


console.log(`student score is :`, `${studentsScore}`);
console.log(`student grade is :`, `${studentsGrade}`);



// Task - 4
/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const me = 82; 
const myFriend = 40; 
let celebrate;


if (me > 80) {
    if (myFriend > 80) {
        celebrate = "Let's go to the restaurant.";
    } else if (myFriend >= 60) {
        celebrate = "Good luck next time.";
    } else if (myFriend >= 40) {
        celebrate = "Keep your friend's message unseen.";
    } else {
        celebrate = "Blocked";
    }
} else {
    celebrate = "Go to home and sleep and act sad.";
}

console.log(celebrate);



// Task - 5
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
  
const num1 = 60;
const num2 = 25;
let result;
if(num1 > num2){
result = num1 *2;
}else{
    result = num1 + num2;
}
console.log(result);
// ternary operator
num1 > num2 ? result = num1 * 2 : result = num1 + num2;
console.log(result);  
 
// also
const num3 = 15;
const num4 = 10;
let result1;


if (num3 > num4) {
    result = num3 * 2;
} else {
    result = num3 + num4;
}

console.log("Result using if-else:", result);
//  ternary operator
result = (num3 > num4) ? (num3 * 2) : (num3 + num4);
console.log("Result using ternary operator:", result);

// Task - 6
/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// const childrenAge = 12;
// const isStudent = !true;
// const seniorCitizenAge = 63;
//  let ticket = 800;

//  if (childrenAge < 10) {
//     ticket = "Free"
//  }else if(isStudent){
// ticket = ticket / 100 * 50;
// // ticket = discount;
//  }else if(seniorCitizenAge >= 60){
// ticket = ticket / 100 * 15;
// // ticket = discountAmount;
//  }else{
//     ticket
//  }

//  console.log(ticket)


const age = 62; 
const isStudent = !false; 
let ticketFare;

if (age < 10) {
    ticketFare = "Free";
} else if (isStudent) {
    ticketFare = 800 * 0.5; 
} else if (age >= 60) {
    ticketFare = 800 * 0.85; 
} else {
    ticketFare = 800; // Regular fare
}

console.log("Ticket Fare:", ticketFare);