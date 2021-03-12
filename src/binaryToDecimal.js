function binaryToDecimal(bin){
    let result = 0
    bin = [...bin].reverse().join('')
    let str = ''
    for(let i = bin.length-1; i >= 0; i--){
        console.log(i, bin[i], bin[i] * Math.pow(2, i))
        result = result + (bin[i] * Math.pow(2, i))
    }
    return result
}

console.log(binaryToDecimal('101010'))

// 1*2^5 + 0*2^4 + 1*2^3 + 0*2^2 + 1*2^1 + 0*2^0
// 32 + 0 + 8 + 0 + 2 + 0 = 42