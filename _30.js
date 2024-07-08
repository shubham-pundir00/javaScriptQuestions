function findFirstOccurrence(str, word) {
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

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            return i; 
        }
    }

    return -1; 
}

let str = "Hello world, hello universe";
let word = "hello";


let index = findFirstOccurrence(str, word);
if (index !== -1) {
    console.log(index);
} else {
    console.log("word is not found");
}