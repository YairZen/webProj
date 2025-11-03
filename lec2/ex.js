let person ={
    name: "Yair"
    ,mail: "yairzen@gmail.com"
}
let newPerson = {...person, age: 30}

console.log(person);
console.log(newPerson);

let department ={
    name: "SE",
    courses:[ 
            {"number":61738, "name": "WEB"},
            {"name": "123123", "name": "DB"}
        ]
};

let obj = JSON.parse(department);
obj.courses.array.forEach(c => {
    console.log(c.number + ": " + c.name);
});

