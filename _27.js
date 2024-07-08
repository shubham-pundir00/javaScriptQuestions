let str = "shubham"
let oldChar = "h";
let newChar = "m";
function replaceChar(str,oldChar,newChar){
    let result = '';
    let replaced = false;
    for(let i = 0; i < str.length; i++){
        if(str[i] === oldChar && !replaced){
            result += newChar;
            replaced = true;
        }else{
            result += str[i];
        }
    }
    return result;

}

let newstr = replaceChar(str,oldChar,newChar)
console.log(newstr)