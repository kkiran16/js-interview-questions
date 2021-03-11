function mul(a, b, c){
    return a * b * c
}

function curried(fn){
    return function handler(...args) {
        if(args.length >= fn.length){
            return fn(...args)
        }else {
            return function(...argsLeft){
                return handler(...args.concat(argsLeft))
            }
        }
    }
}

let curriedFunc = curried(mul)

console.log(curriedFunc(2)(2)(2))