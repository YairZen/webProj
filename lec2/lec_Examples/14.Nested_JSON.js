const universityJSON = `{
    "name": "Tech University",
    "departments": {
        "computerScience": {
            "head": "Dr. Smith",
            "students": 300,
            "programs": ["BS", "MS", "PhD"]
        },
        "engineering": {
            "head": "Dr. Johnson",
            "students": 500,
            "programs": ["BE", "ME"]
        }
    }
}`;

const university = JSON.parse(universityJSON);
console.log(university.departments.computerScience.head);
