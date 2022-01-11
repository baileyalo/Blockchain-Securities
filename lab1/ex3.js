

const ethers = require('ethers');  
const crypto = require('crypto');
const util = require ('ethereumjs-util');

let id = crypto.randomBytes(32).toString('hex');
console.log ("Before convert to public:"+ id);

const publicKey= util.privateToPublic(id);

const isValidPublic = util.isValidPublic(publicKey)


let privateKey = "0x"+id;
console.log("Private Key:", privateKey);

//let wallet = new ethers.Wallet(privateKey);
console.log("Address: " + wallet.address);