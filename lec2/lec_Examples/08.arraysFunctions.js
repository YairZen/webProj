//array methods
const numbers = [-3, -2, -1, 0, 2, 4, 5, 7, 8, 12]
console.log('original:', numbers)
//map array
const doubled1 = numbers.map(function(n){return n**2})
console.log('doubled:', doubled1)
const doubled2 = numbers.map(n => n**2)
console.log('doubled:', doubled2)
//sort array
const sorted = numbers.sort((a,b)=>b-a)
console.log('sorted:', sorted)
//filter array
const filtered = numbers.filter(a=>a>0)
console.log('filtered:', filtered)
//accoumulated (reduce) array
const sum = numbers.reduce((acc,element,index,arr)=>{
    acc += element
    return acc
}, 0)
console.log('sum:', sum)
//loop
numbers.forEach((a,i)=>console.log(`element ${i} is ${a}`))

for(let el of numbers)
    console.log(el)
