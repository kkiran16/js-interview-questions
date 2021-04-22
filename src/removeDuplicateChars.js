function removeDuplicateChars(str) {
    const strFreq = new Map()
    let output = ''
    for (let i = 0; i < str.length; i++) {
        if(strFreq.has(str[i])){
            strFreq.set(str[i], strFreq.get(str[i]) + 1)
        }else {
            strFreq.set(str[i], 1)
        }        
    }

    for (const [key, value] of strFreq) {
        if(value === 1){
            output = output.concat(key)
        }
    }

    return output
}

console.log(removeDuplicateChars('Learn more javascript dude'))