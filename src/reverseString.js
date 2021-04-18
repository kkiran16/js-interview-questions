// Solution 1
function reverse1(str){
    let outStr = []
    for(var i = str.length - 1 ; i>=0 ; i-- ){
        outStr.push(str[i])
    }

    return outStr.join('')
}

// Solution 2
function reverse2(str){
    if(str === '') {
        return ''
    }

    return reverse2(str.substr(1)) + str.charAt(0)
}

// Solution 3
function reverse3(str) {
    return [...str].reverse().join('')
}

// Solution 4
String.prototype.reverse = function (){
    if(!this || this.length <2) return this;
    
    return this.split('').reverse().join('');
  }
  
'abc'.reverse();

console.log(reverse1('abc'))
console.log(reverse2('abc'))
console.log(reverse3('abc'))