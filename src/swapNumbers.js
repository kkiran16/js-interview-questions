function swap(a, b){
    console.log('Before > ', a,b)
    
    b = b - a
    a = a + b
    b = a - b

    console.log('after > ', a,b)
}