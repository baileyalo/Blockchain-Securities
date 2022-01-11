const EthUtil = require('ethereumjs-util');
const Keccak256 = require('keccak256');
const crypto = require('crypto');
const { Buffer } =  require('buffer');
function findAddress() {
    let i = 0;
    while(1){
        i++;
        // generating 32 byte private key
        const privateKey = crypto.randomBytes(32);
        // generating a 64 byte public key
        const publicKey = EthUtil.privateToPublic(privateKey);
        //slicing the last 20 bytes of hashed(32 bytes) of public key
        const address = Keccak256(Buffer.from(publicKey, 'hex')).slice(12);
        const buf1 = Buffer.from([0x12, 0x34]);
        const buf2 = address.slice(0,2);
        if(buf1.equals(buf2)){
            console.log(`Address found after ${i} iterations`);
            return address;
        }
    }
}
console.log(`Address: ${findAddress().toString('hex')}`);