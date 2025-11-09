// Example of JSON array
const coursesJSON = `{
    "courses": [
        {
            "id": "CS101",
            "name": "Introduction to Programming",
            "credits": 3
        },
        {
            "id": "CS102",
            "name": "Data Structures",
            "credits": 4
        }
    ]
}`;
const coursesObj = JSON.parse(coursesJSON);
coursesObj.courses.forEach(course => {
    console.log(`${course.id}: ${course.name}`);
});
