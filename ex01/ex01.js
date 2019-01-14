// MULTIPLES OF 3 AND 5.
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// function peulerEx1() {
//   let sum = 0;
//   let n = 1000;

//   while (n--) {
//     if (n % 3 === 0 || n % 5 === 0) {
//       sum += n;
//     }
//   }
//   return sum;
// }

// console.log(peulerEx1());

function eulerEx01() {
  let sum = 0;
  let max = 1000;

  for (let i = 0; i < max; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;  // es lo mismo que sum += i
    }
  }
  return sum;
}

console.log(eulerEx01());