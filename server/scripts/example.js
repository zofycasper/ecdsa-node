const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { utf8ToBytes } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

function hashMessage(message) {
    const bytes = utf8ToBytes(message);
    return keccak256(bytes);
}

const privateKey = secp256k1.utils.randomPrivateKey();
const message = "Some message";
const messageHash = hashMessage(message);

// Sign the message
const signature = secp256k1.sign(messageHash, privateKey);

// Recover the public key
const recoveredPublicKey = secp256k1.recover(signature, messageHash);

console.log(recoveredPublicKey);
