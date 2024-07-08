function findLastOccurrence(str, word) {
    let words = [];
    let currentWord = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char !== ' ') {
            currentWord += char;
        } else {
            words.push(currentWord);
            currentWord = ""; 
        }
    }

    words.push(currentWord);
    let lastIndex = -1;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            lastIndex = i; 
        }
    }

    return lastIndex; 
}

let str = "Hello world, hello universe, hello";
let word = "hello";

let index = findLastOccurrence(str, word);
if (index !== -1) {
    console.log(index);
} else {
    console.log('not found');
}