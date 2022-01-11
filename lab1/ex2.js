
const Wallet = require('ethereumjs-wallet').default
const crypto = require("crypto");
const ethWallet = require ('ethereumjs-wallet');

const ethWallet = crypto.randomBytes(20);

var addressData = ethWallet.fromPrivateKey('Your private key');
console.log(`Private key = , ${addressData.getPrivateKeyString()}`);
console.log(`Address = , ${addressData.getAddressString()}`);