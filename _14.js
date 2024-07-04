let str = "level"
function reverseString(){
    let revstr = ""
    for(i = str.length -1; i>=0;i--){
        revstr += str[i];
    }
    if(str===revstr){
        console.log("string is palandrom")
    }
    else{
        console.log("string is not palandrom")
    }
    
}
reverseString(str)