let counter = 0
let getData = () => {
    console.log('debouncing -> Fetching API > ', counter++)
}

function debouncing(fn, delay){
    let timeout
    return function(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            timeout = null
            fn(...args)
        }, delay);
    }
}

let handleKeyStroke = debouncing(getData, 300)