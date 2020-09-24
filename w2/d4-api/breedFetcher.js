const request = require('request');
const userInputArr = process.argv.slice(2);

// function checking input if name have space , it will combine the input in one string
const checkInput = (userInputArr) => {

let userInput = "";
if(userInputArr.length > 1) {
    for(let i in userInputArr) {
        userInput += userInputArr[i] + " ";
    }
}
else {
    userInput += userInputArr;
}
return userInput.trim();

}


 const url = 'https://api.thecatapi.com/v1/breeds';

request(url, (error, response, body) => {

if(error) {
    console.error(error.code);
    process.exit();
}

const data = JSON.parse(body);
let userInput = checkInput(userInputArr);
let description;
for(let i=0;i < data.length;i++) {
    if(data[i]['name'] === userInput) {
        description = data[i]['description'];
    }
        
}
if(description === undefined) {
    console.log('Breed not found');
}
else {
    console.log(description);
}
    
});

