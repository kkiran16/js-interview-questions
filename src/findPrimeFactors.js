// import verifyPrimeNumber from './verifyPrimeNumber'

export default function verifyPrimeNumber(num){
    const i = num/2
    let j = 2
    while(j <= i){
        if(num%2 === 0){
            return false
        } 
        else {
            j = j + 1
        }
    }
    return true
}

function findPrimeFactors(num){
    const i = Math.floor(num/2)
    let j = 2
    const primeFactors = []
    while(j <= i ){
        if(num % j === 0 && verifyPrimeNumber(j)){
            primeFactors.push(j)
        }
    }

    if(primeFactors.length === 0){
        console.log(`No Prime Factors`)
        return
    } 

    console.log(`Prime Factors of ${num} are `)
}