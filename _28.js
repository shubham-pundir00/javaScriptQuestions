let str = "shubham";
let oldChar = "h";
let newChar = "m";

function replaceLastOccu(str, oldChar, newChar) {
    let result = '';
    let lastOccurrenceIndex = -1;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === oldChar) {
            lastOccurrenceIndex = i;
        }
    }

    for(let i = 0; i < str.length; i++) {
        if(i === lastOccurrenceIndex) {
            result += newChar;
        } else {
            result += str[i];
        }
    }

    return result;
}
let newstr = replaceLastOccu(str,oldChar,newChar)
console.log(newstr)