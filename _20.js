let str = "shubham"
function frequency(str){
let newstr = {}
let maxfreq = 0
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
    if(newstr[char]>maxfreq){
        maxfreq = newstr[char];
        freqchar = char;
    }
    
 }
 return freqchar;
}

let final = frequency(str)
console.log(final)
