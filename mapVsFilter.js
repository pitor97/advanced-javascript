//const number = [3, 4, 8, 6, 2, 4, 5];
//const output = [];
//
//for (let i = 0; i < number.length; i++) {
//  const element = number[i];
//  const result = element * element;
//  output.push(result);
//}
//console.log(output);  //* in this method we can get the square number or  multiply by multiply number

/// by this method we learn the map
//const numbers = [3, 4, 8, 6, 2, 4, 5];
//function square(element) {
//  return element * element;
//}
//
//numbers.map(square); // we pass the square function or we can writ the function here
//

/*  const numbers = [3, 4, 8, 6, 2, 4, 5];

function square(element) {
  return element * element;
}

numbers.map(function (element) { /// in a map there is tree parameter element is one of them the rest we will discuss below
  console.log(element);
});  */

/*
const numbers = [3, 4, 8, 6, 2, 4, 5];

function square(element) {
  return element * element;
}

numbers.map(function (element, index) {
  console.log(element, index); // this index will so us the position of the array 
});
 */

/*
const numbers = [3, 4, 8, 6, 2, 4, 5];

function square(element) {
  return element * element;
}

numbers.map(function (element, index, array) { // this three parameter give us the full array 
  console.log(element, index, array);
}); 
 // if we pass the  function in a map we can take upto 3 parameter  
  */

/*   
const numbers = [3, 4, 8, 6, 2, 4, 5];

function square(element) {
  return element * element;
}

const result = numbers.map(function (element) {
  return element * element;
});
console.log(result);  // we got the square number 
 */

/*
const numbers = [3, 4, 8, 6, 2, 4, 5];

const result = numbers.map(x => x * x);  // function in short way 
console.log(result);
 */

/// there are other branch of map also  such as filter
// and we use the filter for select  something

/*
const numbers = [9, 16, 64, 36, 4, 16, 25];

const bigger = numbers.filter((x) => x > 5); // filter is like condition // before it ful fill the condition then apply it 

console.log(bigger);
*/

/*
const numbers = [9, 16, 64, 36, 4, 16, 25];

const bigger = numbers.filter((x) => x < 5); // here it just show the 4 because we set the condition less then 5
console.log(bigger);
*/

// find is the new edition // here we go

const numbers = [9, 16, 64, 36, 4, 16, 25];

const bigger = numbers.filter((x) => x > 5);
const isThere = numbers.find((x) => x > 5); // / by find we just get only one immediate element
console.log(isThere);
