let str = "shubham"
let newstr = {}
for(let char of str){
    if(newstr[char]){
          newstr[char]++; 
    }
    else{
        newstr[char] = 1;
    }
}
let minfreq = Infinity
let freqchar = ''
for (let char in newstr){
    if(newstr[char]<minfreq){
        minfreq = newstr[char];
        freqchar = char;
    }
    
}
console.log(freqchar)
console.log(minfreq)
