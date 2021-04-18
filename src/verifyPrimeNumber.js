export default function verifyPrimeNumber(num){
    const i = num/2
    let j = 2
    while(j <= i){
        if(num%2 === 0){
            return 'Not a Prime'
        } 
        else {
            j = j + 1
        }
    }
    return `${num} is Prime`
}

console.log(verifyPrimeNumber(4))