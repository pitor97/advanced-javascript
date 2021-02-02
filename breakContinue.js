/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 11];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (numbers[i] > 4) {
    break;
  }
}
*/
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 11];
for (let i = 0; i < numbers.length; i++) {
  
  if (numbers[i] > 3) {
    break;
  }
  console.log(numbers[i]);
}
*/


const numbers = [1, -2, 3, 4, -5, -6, 7, -8, 9, 1, 2, 11];
for (let i = 0; i < numbers.length; i++) {
  
  if (numbers[i] < 0) {
   continue
  }
  console.log(numbers[i]);
}
// by break and continue we can stop our condition or continue 