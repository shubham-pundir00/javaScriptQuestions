function reverseWords(str) {

    let trimmedStr = trimSpaces(str);

    let reversedStr = reverseString(trimmedStr);

    let result = reverseEachWord(reversedStr);

    return result;
}


function trimSpaces(str) {
    let start = 0, end = str.length - 1;

    while (str[start] === ' ') {
        start++;
    }

    while (str[end] === ' ') {
        end--;
    }
    return str.substring(start, end + 1);
}


function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function reverseEachWord(str) {
    let words = [];
    let start = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            words.push(reverseString(str.substring(start, i)));
            start = i + 1;
        }
    }

    words.push(reverseString(str.substring(start)));

    return words.join(' ');
}


let input = "  Hello   World  ";
console.log(reverseWords(input)); 
