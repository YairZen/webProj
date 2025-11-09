const jsonString = '{"language": "JavaScript", "IDE": "VisualCode", "theme":"dark"}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj);

const jsonObject = {
    language : 'JavaScript',
    IDE : 'VisualCode',
    theme : 'dark'
}
let jsonStr = JSON.stringify(jsonObject)
console.log('json string: ', jsonStr)

