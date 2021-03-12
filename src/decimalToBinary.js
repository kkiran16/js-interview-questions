let result = []
function decimalToBinary(num){
    let val = num/2
    if(val > 1){
        result.push(num%2)
        decimalToBinary(Math.floor(val))
    }else {
        result.push(1)
    }
}

decimalToBinary(112)
console.log('Result > ', result.reverse().join(''))