let str = "shubham";
function upperCase(str){
    let result = '';
    for(i= 0; i<str.length; i++){
        let charcode = str.charCodeAt(i);
        if(charcode >= 97 && charcode <= 122){
            charcode -= 32;
        }
        result += String.fromCharCode(charcode);
    }
    return result;
}
let final = upperCase(str)
console.log(final)
