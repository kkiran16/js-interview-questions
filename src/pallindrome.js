// Solution 1
function isPallindrome(str) {
    return str === [...str].reverse().join('')
}

console.log(isPallindrome('Hello') ? 'Is Pallindrome' : 'Not Pallindrome')
console.log(isPallindrome('HelleH') ? 'Is Pallindrome' : 'Not Pallindrome')

//Solution 2
function isPallindrome2(str){
    var i, len = str.length;
    for(i =0; i<len/2; i++){
      if (str[i]!== str[len -1 -i])
         return false;
    }
    return true;
}

console.log(isPallindrome2('Hello') ? 'Is Pallindrome' : 'Not Pallindrome')
console.log(isPallindrome2('HelleH') ? 'Is Pallindrome' : 'Not Pallindrome')
