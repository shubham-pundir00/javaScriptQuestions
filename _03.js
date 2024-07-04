function concatStr(str1,str2){
    for(char in str2){
        str1+=str2[char]
    }
    console.log(str1)

}
let str1 = "shub"
let str2 = "bham"
concatStr(str1,str2)