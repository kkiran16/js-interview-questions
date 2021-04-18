const SPACE_STR = ' '

function reverseStr(str) {
    return [...str].reverse().join('')
}

function revreseWordsInSentence(sent) {
    const words = sent.split(SPACE_STR)
    const reverseWords = words.map(word => reverseStr(word))
    return reverseWords.join(SPACE_STR)
}

console.log(revreseWordsInSentence('Hello World'))

function reverseWords(str){
    return str.split(' ').reverse();
}

console.log(reverseWords('Hello World'))