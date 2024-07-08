let str = "shubham"
function removeRepeated(str){
    let result = '';
    let seenchar = {};

    for(let i = 0; i < str.length;i++){
        let char = str[i];
        if(!seenchar[char]){
            seenchar[char] = 1;
            result += char;

        }else{
            seenchar[char]++;
        }
    }
    let finalresult = '';
    for(let i = 0; i < result.length; i++){
        if(seenchar[result[i]] === 1){
            finalresult += result[i];

        }
    }
    return finalresult;
}
let newstr = removeRepeated(str)
console.log(newstr)