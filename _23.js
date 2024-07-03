let str = "shubham"
let char = 'h'
let index = str.indexOf("h")
let newarr = str.split('')
let first = newarr.slice(0,index) 
let second = newarr.slice(index + 1)
console.log(first.concat(second))