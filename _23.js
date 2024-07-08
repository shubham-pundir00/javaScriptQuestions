let str = "hello world"
let charToRemove = 'o'
function remove(str,charToRemove){
    let result = '';
    let found = false;
    for(let i = 0; i< str.length;i++){
        if(str[i] === charToRemove && !found){
            found = true;
        }else{
            result += str[i];
        }
    }return result;
}
let newstr = remove(str,charToRemove)
console.log(newstr)