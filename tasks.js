// Github link for Typescript of same Tasks is: https://github.com/BahadurKhan10/Typescript-Tasks.git
// handled null, invalid input and undefined input in prompts etc
// and made it more user friendly in typescript




// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

const num1 = parseInt(prompt("Enter number 1"));
const num2 = parseInt(prompt("Enter Number 2"));
if(num1 && num2){
if (num1 > num2) {
  console.log(`${num1} is Greater than ${num2}`);
} else if (num2 > num1) {
  console.log(`${num2} is Greater than ${num1}`);
} else {
  console.log(`${num1} is Equal than ${num2}`);
}
}else{
  console.log("Invalid Input!")
}

// Making Function for above

function largerNum(){
    const num1=parseInt(prompt("Enter number 1"))
    const num2=parseInt(prompt("Enter Number 2"))
    if(num1 && num2){
      if (num1 > num2) {
        return `${num1} is Greater than ${num2}`;
      } else if (num2 > num1) {
        return `${num2} is Greater than ${num1}`;
      } else {
        return `${num1} is Equal than ${num2}`;
      }
      }else{
        return "Invalid Input!"
      }
}

const number1 = largerNum()
console.log(number1)

// -----------------------------------------------------------------------------------------------------------------

// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -


const num = -5;

if (num < 0) {
  alert(`${num} is negative`);
} else {
  alert(`${num} is positive`);
}



// Making Function for above

function checkSign(num){
  if (num < 0) {
    alert(`${num} is negative`);
  } else {
    alert(`${num} is positive`);
  }
}
console.log(checkSign(5))
console.log(checkSign(-5))
console.log(checkSign(3))
console.log(checkSign(-3))


// -----------------------------------------------------------------------------------------------------------------

// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console

function checkLargeNum(){
  const nums = []
  for(let i = 1; i <= 5; i++){
    const num = parseInt(prompt(`Enter number ${i}`))
    nums.push(num)
  }
  const max = Math.max.apply(null, nums)
  return `The larger number is ${max}`
}

const x = checkLargeNum()
console.log(x)

// -----------------------------------------------------------------------------------------------------------------

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (i = 0; i <= 15; i = i + 1) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// -----------------------------------------------------------------------------------------------------------------

// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.

// Range Grade
// <60     F
// <70     D
// <80     C
// <90     B
// <100    A


function calculateAverageGrade() {
    let grades = [];
  
    let chemistryGrade = parseInt(prompt("Enter your Chemistry grade:"));
    grades.push(chemistryGrade);
  
    let englishGrade = parseInt(prompt("Enter your English grade:"));
    grades.push(englishGrade);
  
    let mathsGrade = parseInt(prompt("Enter your Maths grade:"));
    grades.push(mathsGrade);
  
    let physicsGrade = parseInt(prompt("Enter your Physics grade:"));
    grades.push(physicsGrade);
  
    let urduGrade = parseInt(prompt("Enter your Urdu grade:"));
    grades.push(urduGrade);
  
    const sum = grades.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / grades.length;
  
    if (avg < 60) {
        return "Grade is F";
      } else if (avg < 70 && avg >= 60) {
        return "Grade is D";
      } else if (avg < 80 && avg >= 70) {
        return "Grade is C";
      } else if (avg < 90 && avg >= 80) {
        return "Grade is B";
      } else if (avg <= 100 && avg >= 90) {
        return "Grade is A";
      }
  }
  
  console.log(calculateAverageGrade());
  
// -----------------------------------------------------------------------------------------------------------------

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

for(let i=1; i<=100; i++){
  if(i%3===0 && i%5===0){
    console.log("FizzBuzz")
  }else if(i%3===0){
    console.log("Fizz")
  }else if(i%5===0){
    console.log("Buzz")
  }else{
    console.log(i)
  }
}



// -----------------------------------------------------------------------------------------------------------------

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

for(let i=1; i<=5; i++){
  let line = '';
  for(let j=1; j<=i; j++){
    line += '* ';
  }
  console.log(line);
}


// -----------------------------------------------------------------------------------------------------------------

