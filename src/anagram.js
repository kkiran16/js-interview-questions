function checkAnagram(first, second) {
    const firstFreq = computeFrequency(first)
    const secFreq = computeFrequency(second)

    if(areMapsEqual(firstFreq, secFreq))
        console.log('They are Anagrams')
    else 
        console.log('They are not Anagrams')
}

function areMapsEqual(map1, map2) {
    if(map1.size !== map2.size){
        return false
    }else {
        for (const [key, value] of map1) {
            let other = map2.get(key)
            if( other !== value || !other){
                return false
            }
        }
        return true
    }
}
function computeFrequency(ipStr) {
    let strMap = new Map()
    for (let index = 0; index < ipStr.length; index++) {
        const key = ipStr[index];
        if(strMap.get(key)) {
            strMap.set(key, strMap.get(key) + 1)
        }else {
            strMap.set(key, 1)
        }
    }
    return strMap
}

// console.log(computeFrequency('HelloWorld'))
checkAnagram('Hello', 'Hell')