/* var foo = 1;
var change = () => {
  this.foo = 2;
  console.log(this.foo);
};
var obj = {
  foo: 3
};
var bounded = change.bind(obj);

// What would be the output of the following?
console.log(foo);
console.log(change());
console.log(foo);
console.log(obj.foo);
console.log(bounded()); */


/**
 * Check if a string is a palindrome

 // Approach 1:
function checkPalindrome(str){
  if([...str].reverse().join('') === str){
    return 'It is Palindrome'
  }else {
    return 'It is not Palindrome'
  }
}

console.log('Palindrome Check > ', checkPalindrome('aba'))

// Approach 2: Without any inbuilt methods
function isPalindrome(inputStr) {
  let lo = 0;
  let hi = inputStr.length;
  let mid = Math.floor((lo + hi) / 2);
  // Check until the mid element
  for (let i = 0, j = hi-1; i < mid; i += 1, j -= 1) {
    if (inputStr[i] !== inputStr[j]) {
      return false;
    }
  }
  // If we got in here then we know that the string is palindrome
  return true;
}
 */


/**
 * Function should accept a list of objects with the following type structure
  {
    id: number,
    accountType: "user" | "admin" | "root"
    name: string
  }
  return the list of objects grouped by their accountType in this order. 
  For example it should return a list with a list of user followed by a list of admin and a list of root accounts.


 let arr = [
  {
    id:1,
    accountType:'user',
    name: 'Edward'
  },
  {
    id:4,
    accountType:'admin',
    name: 'Jack'
  },
  {
    id:2,
    accountType:'root',
    name: 'Stewart'
  },
  {
    id:3,
    accountType:'user',
    name: 'Edward'
  },
  {
    id:4,
    accountType:'admin',
    name: 'Edward'
  }
]
function groupAccountType(list){
  let output = {user: [], admin: [], root:[]}
  list.forEach((item) => {
    output[item.accountType].push(item)
  })
  return output
}

console.log(groupAccountType(arr))
 */

/**
 * Check a number is prime or not.
function checkPrime(num){
  let i = 2
  if(num <= 1 || !Number.isInteger(num)) return 'Not Prime'

  while(i <= num/2){
    if(num % i == 0) {
      return 'Not Prime'
    }
    ++i
  }
  return 'Prime'
 }

 console.log('Check Number Prime > ', checkPrime(-11))
*/


/**
 * Funtion accept a string and return a map with the string character frequency
 
 // Approach 1:
 const str = 'Hello'
 function frequency(strIp){
  let arr = [...strIp]
  let op = {}
  arr.forEach((ele) => {
    op[ele] = arr.reduce((total, item) => {
      if(item === ele ){
        return total + 1
      }
      return total
    }, 0)
  })
  return op
 }

 console.log('Character Frequency > ', frequency(str))

// Approach 2:
function computeFrequency(s) {
  // Create the freq hashtable
  const freqTable = new Map();

// for each char in the string
  for (ch of s) {
    // Check if we have seen it already
    if (!freqTable.has(ch)) {
      freqTable.set(ch, 1);
    } else {
      // Just increase the existing entry
      freqTable.set(ch, freqTable.get(ch) + 1);
    }
  }
  // Return result
  return freqTable;
}

console.info(computeFrequency("abrakatabra"));
*/

/**
 * Compute fibonacci number N

function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n-1) + fib(n-2);
  }
}

//Prints 4th fibonacci
console.log('Fibonaci > ', fib(4))

// Prints Series
for(i=0; i<=4; i++){
  console.log('Fibonaci > ', fib(i))
}
 */


/**
 * Search and element in a sorted list:  

function binarySearch(arr, item){
  let lo = 0
  let hi = arr.length-1
  while(lo <= hi) {
    let m = Math.floor((lo + hi)/2)
    if(arr[m] === item){
      return 'Found'
    }
    if(arr[m] < item){
      lo = m + 1
    }else if(arr[m] > item) {
      hi = m - 1
    } 
  }

  return 'Not Found'
}

console.log('Binary Search Item > ', binarySearch([1,3,5,7,9,11,14,18,22], 3))
*/

/**
 * Flatten a list : [1, [2,3,[4]]] to [1,2,3,4] or [[1, 2, [3]], 4] to [1,2,3,4]

 //let arr = [1, [2,3,[4]]]
 //let arr = []
 let arr = [[1, 2, [3]], 4]
 let output = []
 function mainArr(arr){
 Array.isArray(arr) && arr.forEach(item => {
    if(Array.isArray(item)){
      mainArr(item)
    }else {
      output.push(item)
    }
  })
 }

 mainArr(arr)
 console.log('Flatten O/P > ', output)
 */

/**
 * Filter numbers from a list
 
let numArr = [1,'h',2,'e']
let filterOutput = numArr.filter(item => isFinite(item))
console.log(filterOutput)
*/

/* Reverse a String
let testStr = 'HelloWorld'
let strArr = [...testStr].reverse().join('')
console.log(testStr)
console.log(strArr)
 */

/*Advantages of closures
Encapsulation
Memoization once
Higher Order Functions/Components

Disadvantages:
Garbage collection will not happen untill the functions dies.
There can be memory leaks
Memory cosumption issues
*/

/*2
Output: It logs the value 10 either the variable a is declared as var or let
function outter() {
    console.log(a1);
    function inner() {
      console.log(a);
    }
    var a = 10;
    // let a = 10;
    return inner;
  }
  
var a1 = 1;
outter()();
*/

/*1. 
Error: Cannot access a before intilization, if a is declared as 'let' variable. 
No Error: If a is declared as 'var' then it prints as undefined.

function outter() {
    console.log(a1);
    function inner() {
      console.log(a);
    }
    inner(); // Cannot access a before intilization.
    let a = 10;
    return inner;
  }
  
  var a1 = 1;
  outter()();
  */

  /* 
  Output : 
  yomesh
  undefined
  undefined
  undefined

  in the first case this === yomesh and in rest of the cases this === Person.prototype during invocation.

  function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayName = function () {
    console.log(this.name);
  }
  
  var yomesh = new Person('yomesh');
  
  console.log(yomesh.sayName());
  console.log(Person.prototype.sayName());
  console.log(Object.getPrototypeOf(yomesh).sayName());
  console.log(yomesh.__proto__.sayName()); */



  /* 
  // Revrese a String
  function reverse(string) {
    let i;
    let temp;
    const limit = parseInt(string.length / 2, 10);
  
    for (i = 0; i < limit; i++) {
      temp = string[i];
      string[i] = string[string.length - i - 1];
      string[string.length - i - 1] = temp;
    }
  
    return string;
  }
  
  const reversed = reverse("hello");
  console.log(reversed); */