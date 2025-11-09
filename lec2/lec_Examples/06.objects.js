//object
let person={
    //properties
    name: 'Jane Doe',
    age: 25,
    isStudent: false,
    languages: ['he', 'en'],
    //methods
    greet(name){
        return name ? `hello ${name}, my name is ${this.name}` : 'name is undefined'
    }
}
console.log('type:', typeof person)
console.log('object:', person)
console.log(person.greet())
console.log(person.greet('naomi'))

for(let property in person){
    let type = typeof person[property]
    console.log(`${property} : ${type}`)
}

let newPerson = {...person}
console.log('new person:', newPerson)

let {name, age} = person
console.log(name, age)

let {name:name1, age:age1, ...Rest} = person
console.log(name1, age1)
console.log('Rest', Rest)
