let str = "hello world"
let ndic = {}
for(char of str){
    if(ndic[char]){
        ndic[char]++;
    }
    else{
        ndic[char] = 1;
    }
}
console.log(ndic)