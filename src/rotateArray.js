/* 
ip : [1,2,3,4,5]
op: [4,5,1,2,3]
*/

/* Solution 1: */
function rotateArray(ip, steps){
    const subArray = ip.splice(ip.length - steps)
    console.log(subArray)
    ip = [...subArray, ...ip]
    console.log(ip)
    return ip
}

console.log('Rotate Array > ', rotateArray([1,2,3,4,5], 2))
console.log('Rotate Array > ', rotateArray([1,2,3,4,5], 6))

/* Solution 2 */
function rotateArray1(ip, steps) {
    let numberOfSteps = steps % ip.length
    for (let index = 0; index < numberOfSteps; index++) {
        const ele = ip.pop()
        ip.unshift(ele)        
    }

    return ip
}

console.log('Rotate Array1 > ', rotateArray1([1,2,3,4,5], 2))
console.log('Rotate Array1 > ', rotateArray1([1,2,3,4,5], 6))