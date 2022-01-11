


/* const crypto = require('crypto');
const base64url = require('base64url');
const keccak256 = require('keccak256');



function randomStringAskeccak256(size) {
  return keccak256(crypto.randomBytes(1234).toString('hex'));
}

console.log(randomStringAskeccak256());
//console.log(keccak256('hello').toString('hex')) 

 */
const util  = require('ethereumjs-util');
const { buffer } = require('buffer');
const crypto = require("crypto");

const privteKey = crypto.randomBytes(20);


const privatKeyBuffer = new buffer(privteKey,'hex');

var isValidPrivate = util.isValidPrivate(privatKeyBuffer);

//console.log("is valid private key ",isValidPrivate);

const publicKey = util.privateToPublic(privatKeyBuffer);

const isValidPublic = util.isValidPublic(publicKey);

//console.log("is valid public key ",isValidPublic);



for(x = 0;x < 2;x++) {

var address = util.generateAddress(publicKey);
	console.log("address",util.addHexPrefix(address).toString('hex'));	
}