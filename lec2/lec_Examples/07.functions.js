function greet1(name){
    console.log('Hello ' + name + '!')
}

const greet2 = function(name){ 
    console.log(`Hello ${name}!`)
}

const greet3 = name => console.log(`Hello ${name}!`)
const greet4 = (from, to) =>{
    let g = `congratulation ${to} from ${from}`
    console.log(g)
}

let count=0
const interval = setInterval(()=>{
    if(count===5)
        clearInterval(interval)
    else
        console.log(++count)
}, 1000)

const sum = (a=20, b=10) => a+b
console.log(sum(12, 5))
console.log(sum())

const sumAll = (...all) => {
    console.log(all)
    return all.reduce((sum,a)=>{
        sum += a
        return sum
    }, 0)
}
console.log(sumAll(1,2,3,4,5,6))
