function greatestCommonDivisor(num1, num2){
    let smallestNumber
    if(num1 > num2){
        smallestNumber = num2
    }else {
        smallestNumber = num1
    }

    const i = Math.floor(smallestNumber / 2)
    let j = 1
    let commonDivisor = j
    while(j <= i){
        if(num1 % j === 0 && num2 % j === 0){
            commonDivisor = j
        }
        ++j
     }

     return commonDivisor
}

console.log(greatestCommonDivisor(69, 169))