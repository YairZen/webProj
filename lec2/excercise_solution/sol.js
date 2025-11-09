let person = {
    name : "Moran Kupfer",
    mail: "morkupfer@braude.ac.il"
}
let copy = {...person, age:25}
console.log(person)
console.log(copy)

let departmentString = `{"name":"Software Engineering","courses":[{"num":61751,"name":"OOP"},{"num":61755,"name":"DB"}]}`
let departmentJSON = JSON.parse(departmentString)

Object.keys(departmentJSON).forEach((k)=>{
    if(Array.isArray(departmentJSON[k])){
        console.log(k)
        departmentJSON[k].forEach((item)=>{
            Object.keys(item).forEach((k)=>{console.log(`${k} : ${item[k]}`)})
        })
    }
    else
        console.log(`${k} : ${departmentJSON[k]}`)
})
