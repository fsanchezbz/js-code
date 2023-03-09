console.log('Estas con fibonacci.js');
//We can also write a Javascript code to find the Fibonacci sequence up to a certain number as shown below.
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34;

//const number = parseInt(prompt('Enter a positive number: '));

// const fibonacciSequence = (number) => {
// let n1 = 0, n2 = 1, nextTerm;
// console.log('Fibonacci Series:');
// console.log(n1); // print 0
// console.log(n2); // print 1
// nextTerm = n1 + n2;
// while (nextTerm <= number) {
//     // print the next term
//     console.log(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }
// };

// fibonacciSequence(35);



// F0	F1	F2	F3	F4	F5	F6	F7	F8	F9	F10	F11	F12	F13	F14	F15	F16	F17	F18	F19
// 0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	610	987	1597	2584	4181

// Under some older definitions the value F0 = 0 is omitted, so that the sequence start with F1 = F2 =1...than n>2;

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34;
//With a recursive function create the 10 first elements of this sequence.

const fibonacci_series = function (number) {
    if (number === 0) {
      return [0];
    } else if (number === 1) {
      return [0, 1];
    } else {
      let array = fibonacci_series(number - 1);
      array.push(array[array.length - 1] + array[array.length - 2]);
      return array;
    }
  };
  
  console.log(fibonacci_series(9));
