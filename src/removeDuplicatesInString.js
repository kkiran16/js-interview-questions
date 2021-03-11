function removeDuplicates(string){
    return Array.from(new Set(string)).join('')
}

console.log(removeDuplicates('Hello'))