//Hello World

function firstNonRepeatingChar(str){
    const strFreq = new Map()
    for(let i=0 ; i < str.length; i++){
        if(strFreq.has(str[i])){
            strFreq.set(str[i], strFreq.get(str[i]) + 1)
        }else {
            strFreq.set(str[i], 1)
        }
    }

    for(let [key, value] of strFreq){
        if(value === 1){
            return key
        }
    }

    return 'No Non Repeating Characters available'
}

console.log(firstNonRepeatingChar('Hello World'))
console.log(firstNonRepeatingChar('HH'))