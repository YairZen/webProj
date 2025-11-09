//object
let person={
    //properties
    name: 'Jane Doe',
    age: 25,
    isStudent: false,
    languages: ['he', 'en'],
    //methods
    greet(name){
        return name ? `hello ${name}, my name is ${this.name}` 
        : 'name is undefined'
    }
}

let logger = {
    keys(){
        console.log(Object.keys(this))
    },
    keysAndValues(){
        Object.keys(this).forEach((k,i,ar)=>{
            console.log(`${k} : ${this[k]}`)
        })
    }
}

logger.keysAndValues.call(person)

