/*
function stopWatch(){
    let count = 0
    return function(){
count ++
return count
    }
}

const clock1 = stopWatch()
console.log(clock1); // The result show us that this is a function (anonymous)
                     // if we call this function then for each calling it add 1 plus value
  
*/
function stopWatch() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const clock1 = stopWatch();
//clock1() // we call the function
//console.log(clock1()); // here we call the function ane console .log it also so that result is 2
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
// now if we call the same function in a deferent name clock2 and call it then the result will be deferent
const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1()); // this is clock one normally for each call the value have to be added but here after 3 when we call clock 1 again the result is 5 because last time we stop calling at 4 position

console.log(clock2()); // as like as the clock2 will continuing from 3 and so the result will be 4

//in conclusion we can sat that if from inside a function we call another function or return it it will make a close environment and then when the function call the other variable from other side , it himself posed a value and make a close environment
//** A closure is when you create an internal scope but can't access from outside and call a function inside a function or return a function from another  */
