let str = "hello world"
let char = "o"
function allOccu(str,char){
    let indeces = []
    for(let i =0; i<str.length; i++){
        if(str[i] === char){
             indeces.push(i)
        }
    }
    return indeces;
}
let final = allOccu(str,char)
console.log(final)
