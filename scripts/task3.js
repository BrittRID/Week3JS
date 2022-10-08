/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2)
{

return number1 + number2;


// Step 2: In the function, return the sum of the parameters number1 and number2
};
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

    function addNumbers()
    {
      let number1 = document.querySelector('#addend1').value;
      let number2 = document.querySelector('#addend2').value;
      let num = add(Number(number1), Number(number2));
// Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector('#sum').value = num;
    //Figure out how to add the numbers
    //does not work    return num + addNumbers; 
    //console.log(num); does not work
    //does not work return add;
    return num; 
     
  }; 
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
  
    document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function sub(number1, number2)
{

return number1 - number2;

};

function subtractNumbers()
    {
      let number1 = document.querySelector('#minuend').value;
      let number2 = document.querySelector('#subtrahend').value;
      let nums = sub(Number(number1), Number(number2));

      document.querySelector('#difference').value = nums;

      return nums; 
     
    }; 

    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

function multiply(number1, number2)
 {

    return number1 * number2;

};

function mulitplyNumbers()
 {
    let number1 = parseInt(document.querySelector('#factor1').value);
    
    let number2 = parseInt(document.querySelector('#factor2').value);
    
    let nu = multiply(Number(number1), Number(number2));

      document.querySelector('#product').value = nu;

    return nu;
}; 


window.onload = function() {
  document.querySelector('#multiplyNumbers')
.addEventListener('click', mulitplyNumbers);}


// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2)
{

return number1 / number2;

};

function divideNumbers()
    {
      let number1 = document.querySelector('#dividend').value;
      let number2 = document.querySelector('#divisor').value;
      let nums = divide(Number(number1), Number(number2));

      document.querySelector('#quotient').value = nums;

      return nums; 
     
    }; 

    document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

    
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new Date("2023");
// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
let year = date.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
//window.onload = function() {document.getElementById("year").innerHTML = year;}
document.getElementById('year').innerHTML = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const array  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = array;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

        var result = array.filter((n) => n % 2 == 1)
        document.getElementById('odds').innerHTML = result;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
var resul = array.filter((n) => n % 2 == 0)
        document.getElementById('evens').innerHTML = resul;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

//var salaries = [10000, 20000, 30000, 40000] // sums to 100000
var totalSalary = 0;
for (var i = 0; i < array.length; i++) {
totalSalary += array[i] }
document.getElementById("sumOfArray").innerHTML = totalSalary;


// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

//let arr = [3, 4, 5, 6];

let modifiedArr = array.map(function(element)
{
    return element * 2;
});
document.getElementById("multiplied").innerHTML = modifiedArr;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

//var arr1 = array.map(a => a * 2); // double the element in the array


let variable = array.map(number => number * 2)
let sumOfVariable = variable.reduce((a, b) => a + b)

document.getElementById("sumOfMultiplied").innerHTML =  sumOfVariable;