let str = "Hello World"

function toggleStr(str){
    let toggleStr = ""
    for(i=0; i<str.length; i++){
        let char = str[i];
        if(char === char.toUpperCase()){
            toggleStr += char.toLowerCase();
        }
        else{
            toggleStr += char.toUpperCase();
        }
    }
    console.log(toggleStr)
}
toggleStr(str)