let str = "shubham"
function lowestFrequency(){

let newstr = {}
let minfreq = Infinity
let freqchar = ''
for(let char of str){
    if(newstr[char]){
          newstr[char]++; 
    }
    else{
        newstr[char] = 1;
    }
}

for (let char in newstr){
    if(newstr[char]<minfreq){
        minfreq = newstr[char];
        freqchar = char;
    }
    
}
return freqchar;

}

let final = lowestFrequency(str)
console.log(final)


