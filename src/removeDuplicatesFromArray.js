/*Solution 1: */
function removeDuplicatesFromArray(arr){
    console.log(Array.from(new Set(arr)))
}

removeDuplicatesFromArray([1,1,1,2,3,3,5,7,7,9])

/*Solution 2: */
function removeDuplicatesFromArray2(arr){
    let objArr = {}
    let outputArr = []
    for(let i=0; i<arr.length;i++){
        const ele = arr[i]
        if(!objArr[ele]){
            objArr[ele] = true
            outputArr.push(ele)
        }
    }
    
    return outputArr
}
console.log(removeDuplicatesFromArray2([1,1,1,2,3,3,5,7,7,9]))