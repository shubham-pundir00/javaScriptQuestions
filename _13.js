let str = "javascript"
function reverseString(){
    let revstr = ""
    for(i = str.length -1; i>=0;i--){
        revstr += str[i];
    }
   console.log(revstr) 
}
reverseString(str)