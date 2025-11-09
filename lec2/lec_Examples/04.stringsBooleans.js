const position='lecturer'
const firstName = 'naomi'
const lastName = 'shpigel'
let str1 = 'My ' + position + ' is ' + firstName + ' ' + lastName
let str2 = `My ${position} is ${firstName} ${lastName}`
console.log(str2)

//classic
let res1
if(firstName==='naomi' && lastName==='shpigel')
    res1='yay'
else
    res1 = 'not so yay'
console.log(res1)
//ternary operator - new
let res2 = (firstName==='naomi' && lastName==='shpigel')?'yay':'not so yay'
console.log(res2)
