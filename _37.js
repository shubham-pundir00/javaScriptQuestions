let str = "   shubham"
function trimstr(str){
    let result = ''
    for(let i = 0; i<str.length;i++){
    if(str[i] !== ' '){
        result += str[i];
    }
    }
    return result;

}
let newstr = trimstr(str)
console.log(newstr)