let str = "banana"
let char = "n"
function firstoccu(str,char){
    for(let i = 0; i<str.length; i++){
        if(str[i] === char){
            return i;
        }
        
    }
    return -1;
}

let index = firstoccu(str,char)
if(index !== -1){
    console.log(index)
}
else{
    console.log("not found")
}