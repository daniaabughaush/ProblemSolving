//1- Fibonacci Series:
// Write a program to print Fibonacci for a given number.
// The Fibonacci series is a series of numbers in which each is the sum of the two preceding ones, usually starting with 0 and 1. 

let fibonacci=function (num){
    if (num===1){
        return 0
    }
    if(num===2){
        return 1
    }
    return fibonacci(num-1)+fibonacci(num-2)
}
 console.log(fibonacci(6))
/* num fib
1  0
2  1
3  1
4  2
5   3
6   5
7   8
8   13

// 2- The sum of Array Elements:
// Write a program that Calculates the sum of elements in an array */

const sum =function(arr){
    if(arr.length<1) return 1
    return arr.pop()+sum(arr)
}
console.log(sum([4,5,6,7]))

// 3-Write a program that Reverses a string 
function reverseString(str){
    if(!str){
        return""
    }
    return reverseString(str.substring(1))+str.charAt(0)
}
console.log(reverseString("hello"))
// substring(from index,to index) بتعطي جزء الي حددتو من السترينغ 
// chartAt() بتعطي الحرف الموجود في الانديكس المطلوب
/* Implement a function that returns the minimum element in a stack in constant time complexity.*/
function getMinimum(str){
  let stack=[];
  let minStack=[];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    
    if(stack.length==0){
    stack.push(element);
    minStack.push(element);
    }
   
    else{
        stack.push(element);
        if(Math.min(minStack[minStack.length-1])>element){
            minStack.push(element)
        }else{
            minStack.push(minStack[minStack.length-1])
        }
    }
    
}
return minStack.pop()
}   
console.log(getMinimum([1,-5,-6,-7,8]));
// Given a queue of integers, reverse the order of the elements in the queue.

function reverse(int) {
    let queue=[]
    let qurRev=[]
   if (queue.length==0) {
   for (let i = 0; i < int.length; i++) {
    const element = int[i];
    queue.push(element)
    
   } 
   }
console.log(queue)
   for (let i = 0; i < int.length; i++) {
    const element = queue.pop();
    qurRev.push(element)
    
   }    

   return qurRev
}

console.log(reverse([1,2,3,4,5]))



//Implement a Queue using 2 stacks s1 and s2.
// queue lifo

function stackToQueue(str){
    let s1=[];
    let s2=[];
    while (s1.length!=0) {
        for (let i = 0; i < s1.length; i++) {
            let element = s1[i];
            s2.push(s1.pop())      }
    }
    while(s1.length==0){
     for (let i = 0; i < str.length; i++) {
         element = str[i];
     s1.push(element)
    }
    for (let i = 0; i < str.length; i++) {   
    {
        s2.push(s1.pop())  
//    console.log(s2)
}
}
return s2
   
}
}
console.log(stackToQueue([1,2,3,4]))
