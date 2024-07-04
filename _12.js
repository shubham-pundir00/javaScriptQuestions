let str = "program to count total number of words in a string"
function trimString(str){
    let newstr = 0;
    for(i=0; i<str.length; i++){
        if(str[i] === ' '){
            newstr = +1;
        }
        newstr += 1;
    }
    console.log(newstr)
}
trimString(str)
