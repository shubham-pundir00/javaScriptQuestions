let str = "SHUBHAM";
function lowerCase(str){
    let result = '';
    for(i= 0; i<str.length; i++){
        let charcode = str.charCodeAt(i);
        if(charcode >= 65 && charcode <= 90){
            charcode += 32;
        }
        result += String.fromCharCode(charcode);
    }
    return result;
}
let final = lowerCase(str)
console.log(final)
