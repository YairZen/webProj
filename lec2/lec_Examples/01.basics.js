console.log('Hello Braude')
//array basic methods
let numbers = [1,,3,4,"five",true]
console.log('array:',numbers)
console.log('type:',typeof numbers)
console.log('size:',numbers.length)
console.log('type of element in index 1:', numbers[1])
//add first element
numbers.unshift(0)
//add last element
numbers.push(20)
//simple find
let n = numbers.indexOf(2) //-1 if not found
console.log(n)
console.log('array after changes:',numbers)