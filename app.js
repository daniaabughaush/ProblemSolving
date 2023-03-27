//1- Fibonacci Series:
// Write a program to print Fibonacci for a given number.
// The Fibonacci series is a series of numbers in which each is the sum of the two preceding ones, usually starting with 0 and 1. 

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
//  console.log(fibonacci(6))

// 2- The sum of Array Elements:
// Write a program that Calculates the sum of elements in an array 

function findSum(A, N) {
    if (N <= 0)
        return 0;
    return (findSum(A, N - 1) + A[N - 1]);
}
 
// Driver code
 
let A = [1, 2, 3, 4, 5];
let N = A.length;
console.log(findSum(A, N));

// 3-Write a program that Reverses a string 
function add(n){
    if(n == 1){ 
        return 1; 
    } 
    else { 
        return n + add(n - 1) //the function calls itself.
     } 
}




