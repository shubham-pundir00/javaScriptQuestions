let str = "hello world"
function countFrequency(str){
    let ndic = {}
for(char of str){
    if(ndic[char]){
        ndic[char]++;
    }
    else{
        ndic[char] = 1;
    }
}
return ndic;
}
let final = countFrequency(str)
console.log(final)

