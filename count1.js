let str = "mynew@123"
let al = 0
let num = 0
let spec = 0
for(let i=0; i<str.length; i++){
    // let char = str[i];
    let newstr = str.charCodeAt(i)
    if((newstr>=65 && newstr<=90)||(newstr>=97 && newstr<=122)){
        al++;
    }
    else if (newstr>= 48 && newstr<= 57){
        num++;
    }
    else{
        spec++;
    }
    
}
console.log(al)
console.log(num)
console.log(spec)