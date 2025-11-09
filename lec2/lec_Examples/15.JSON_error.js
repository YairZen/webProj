try {
    const invalidJSON = '{"name": "John", age: 30}'; // Invalid JSON
    const obj = JSON.parse(invalidJSON);
} catch (error) {
    console.error('Error parsing JSON:', error.message);
}
