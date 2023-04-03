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
// function getMinimum(str){
//   let stack=[];
//   let minStack=[];
//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];
    
//     if(stack.length==0){
//     stack.push(element);
//     minStack.push(element);
//     }
   
//     else{
//         stack.push(element);
//         if(Math.min(minStack[minStack.length-1])>element){
//             minStack.push(element)
//         }else{
//             minStack.push(minStack[minStack.length-1])
//         }
//     }
    
// }
// return minStack.pop()
// }   
// console.log(getMinimum([1,-5,-6,-7,8]));


let stackQ1=[];
let count=0;
let min=0;
start0=0;
function push0(element){
  stackQ1[count]=element;
  count++;
  console.log(`${element} added to ${count}`);
  if(min==0 && start0==0){
   min=element;
   start0=1;
  }else if(min> element){
   min=element;
 }
   return count -1
}

push0(400)
push0(200)
push0(300)

console.log(`${min} is the minimum element`)
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


// linked list
// Create a function that takes a LinkedList and deletes the middle node in it and returns it
// / Javascript program to delete the 
// middle of a linked list
  
  
    /* Link list Node */
     class Node {
        constructor() {
            this.data = 0;
            this.next = null;
        }
    }
    // Deletes middle node and returns
    // head of the modified list
    function deleteMid( head) {
        // Base cases
        if (head == null)
            return null;
        if (head.next == null) {
            return null;
        }
  
        // Initialize slow and fast pointers
        // to reach middle of linked list
        let slow_ptr = head;
        let fast_ptr = head;
  
        // Find the middle and previous of middle.
        let prev = null;
  
        // To store previous of slow_ptr
        while (fast_ptr != null && fast_ptr.next != null) 
        {
            fast_ptr = fast_ptr.next.next;
            prev = slow_ptr;
            slow_ptr = slow_ptr.next;
        }
  
        // Delete the middle node
        prev.next = slow_ptr.next;
  
        return head;
    }
  
    // A utility function to print
    // a given linked list
    function printList( ptr) {
        while (ptr != null) {
            document.write(ptr.data + "->");
            ptr = ptr.next;
        }
        document.write("NULL<br/>");
    }
  
    // Utility function to create a new node.
    function newNode(data) {
         temp = new Node();
        temp.data = data;
        temp.next = null;
        return temp;
    }
  
    /* Driver code */
      
        /* Start with the empty list */
         head = newNode(1);
        head.next = newNode(2);
        head.next.next = newNode(3);
        head.next.next.next = newNode(4);
  
        document.write("Given Linked List<br/>");
        printList(head);
  
        head = deleteMid(head);
  
        document.write(
        "Linked List after deletion of middle<br/>"
        );
        printList(head);


        // 2nd 
        
        // class Node
        // {
        //      constructor(){
        //     this.data = 0;
        //     this.next = null;
        // }
        // }
        var head = null;
        // Function to reverse the
        // linked list
        function reverseLL()
        {  
             
            // Create a stack "s"
            // of Node type
            var s = [];
            var temp = head;
            while (temp.next != null)
            {
                 
                // Push all the nodes
                // in to stack
                s.push(temp);
                temp = temp.next;
            }
            head = temp;
           
            while (s.length!=0)
            {
                 
                // Store the top value of
                // stack in list
                temp.next = s.pop();
               
               
               
                // update the next pointer in the
                // in the list
                temp = temp.next;
            }
            temp.next = null;
        }
         
        // Function to Display
        // the elements in List
        function printlist(temp)
        {
            while (temp != null)
            {
                document.write(temp.data+ " ");
                temp = temp.next;
            }
        }
         
        // Program to insert back of the
        // linked list
        function insert_back(  value)
        {
         
            // we have used insertion at back method
            // to enter values in the list.(eg:
            // head.1.2.3.4.Null)
            var temp = new Node();
            temp.data = value;
            temp.next = null;
             
            // If *head equals to null
            if (head == null)
            {
              head = temp;
              return;
            }
            else
            {
              var last_node = head;
              while (last_node.next != null)
              {
                last_node = last_node.next;
              }
              last_node.next = temp;
              return;
            }
        }
         
        // Driver Code
         
                insert_back(1);
                insert_back(2);
                insert_back(3);
                insert_back(4);
                document.write("Given linked list\n");
                printlist(head);
                reverseLL();
                document.write("<br/>Reversed linked list\n");
                printlist(head);
         