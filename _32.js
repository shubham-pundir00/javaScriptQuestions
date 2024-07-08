function findAllOccurrences(text, word) {
    let occurrences = [];
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
            occurrences.push(i);
        }
    }
    
    return occurrences;
}
let text = "hello world hello";
let word = "hello";
let result = findAllOccurrences(text, word);
console.log("Occurrences of '" + word + "' in text:", result);