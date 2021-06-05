// What is the output : sum(1)(2)(3)(4)...()

function sum(a) {
    return function(b){
        if(b !== null && b != undefined){
            return sum(a + b)
        }else {
            return a
        }
    }
}

console.log(sum(1)(2)(3)(4)())