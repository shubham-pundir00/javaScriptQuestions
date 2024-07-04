let str = "shubham"
let vow = ['a','e','i','o','u']
function countVowel(str,vow){
    let vowel = 0
for(let i=0; i<str.length; i++){
    for(let j = 0; j<=i; j++){
        if(str[i]==vow[j]){
            vowel++;
        }
    }
}
  console.log(vowel)
}
countVowel(str,vow)
