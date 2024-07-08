function countOccurrences(text, word) {
    let count = 0;
    let textLength = text.length;
    let wordLength = word.length;
    
    for (let i = 0; i <= textLength - wordLength; i++) {
        let match = true;
        
        for (let j = 0; j < wordLength; j++) {
            if (text[i + j] !== word[j]) {
                match = false;
                break;
            }
        }
        
        if (match) {
            count++;
        }
    }
    
    return count;
}

let text = "hello world hello";
let word = "hello";
let result = countOccurrences(text, word);
console.log("Occurrences of '" + word + "' in text:", result);