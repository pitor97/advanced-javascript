/*

function sum(first, second){
let result = first + second
return result
}

const output =sum(3,7)

console.log(output); // we get the output 10 
*/

/*
function sum(first, second) {
  let result = first + second;
  return result;
}

const output = sum(3, 7);
console.log(result); // we have some error because we can access  the result only inside the function 
 
// his scope is only inside the function 
*/

/*
let bonus = 20;
function sum(first, second) {
  let result = first + second + bonus

  return result;
}

const output = sum(3, 7);
console.log(bonus);
console.log(output); // we have the result 20 and 30 we can cal the bonus because that is an global variable 
*/

/*
let bonus = 20;
function sum(first, second) {
  let result = first + second + bonus
  console.log(bonus); // we can call it from inside the function also
  return result;
}

const output = sum(3, 7);
console.log(bonus);
console.log(output);
*/

/*
let bonus = 20;
function sum(first, second) {
  let result = first + second + bonus;
  if (result > 9) {
    const mood = "happy";
    console.log(mood); //we can get the result from inside 
  }
  return result;
}

const output = sum(3, 7);
*/
// on the other hand if we call it from out side if then we get the error
/*
let bonus = 20;
function sum(first, second) {
  let result = first + second + bonus;
  if (result > 9) {
    const mood = "happy";
    
  }
  console.log(mood);
  return result;
}

const output = sum(3, 7);
*/

/*

let bonus = 20;
function sum(first, second) {
  let result = first + second + bonus;
  if (result > 9) {
    let mood = "happy";
    mood = "finshy"
    mood = "funky"
    mood = "cranky"
    
  }
  console.log(mood); // we can not access it even with let 
  return result;    //* let and const they are the block they can't go out side there area 
}

const output = sum(3, 7);
*/

// but if we use the var then we can get the result
/*
let bonus = 20;
function sum(first, second) {
  let result = first + second + bonus;
  if (result > 9) {
    var mood = "happy";
    
  }
  console.log(mood);
  return result;
}

const output = sum(3, 7);
*/
//** var is hoist up variable  so that it is available from every where   */

/*
console.log(day); // result is undefined
var day = "friday"// because when we declare a variable its take only ist declaration part 
                   // i mean var  just  var day 
                   */

//** on the other hand if we use let or const the result will be error  */
console.log(day);
let dey = friday;
