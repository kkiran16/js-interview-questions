/* 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0] 
*/

/*  Solution 1: */
function movingZeros1(ip){
    let zerosCount = 0
    for(let i = 0; i <= ip.length-1; i++){
        if(ip[i] === 0){
            ip.splice(i,1)
            ++zerosCount
            i=i-1
        }
    }

    for(let i=1; i <= zerosCount; i++){
        ip.push(0)
    }

    return ip
}

console.log('Solution 1 >', movingZeros1([0,1,0,3,12]))

/* Solution 2: */
function movingZeros2(ip){
    for (let i = ip.length - 1; i >= 0; i--) {
        ip[i] === 0 && ip.splice(i,1) && ip.push(0)        
    }

    return ip
}

console.log('Solution 2 > ', movingZeros2([0,1,0,3,12]))