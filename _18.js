let str = "hello world"
let char = "o"
let indeces = []
for(let i =0; i<str.length; i++){
    if(str[i] === char){
        indeces.push(i)
    }
}
console.log(indeces)