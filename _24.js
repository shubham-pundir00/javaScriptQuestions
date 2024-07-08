let str = "hello world";
let charToRemove = 'o';

function remove(str, charToRemove) {
    let lastindex = -1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === charToRemove) {
            lastindex = i;
        }
    }

    if (lastindex === -1) {
        return str;
    }

    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i !== lastindex) {
            result += str[i];
        }
    }

    return result;
}
let newstr = remove(str,charToRemove)
console.log(newstr)