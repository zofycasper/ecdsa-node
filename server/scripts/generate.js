const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

const privateKey = secp256k1.utils.randomPrivateKey();
const publicKey = secp256k1.getPublicKey(privateKey);

function getAddress(publicKey) {
    return keccak256(publicKey.slice(1)).slice(-20);
}

function hashMessage(message) {
    const bytes = utf8ToBytes(message);
    return keccak256(bytes);
}

function signMessage(message) {
    const messageHash = hashMessage(message);
    const signature = secp256k1.sign(messageHash, privateKey);
    return signature;
}

const messageHash = hashMessage("send 10btc");

const address = getAddress(publicKey);

console.log(`Private key is: ${toHex(privateKey)}`);
console.log(`Public key is: ${toHex(publicKey)}`);

console.log(`Address is: ${toHex(address)}`);
console.log(`Message hash: ${toHex(messageHash)}`);

// (async () => {
//     const signature = await secp256k1.sign(messageHash, privateKey);
//     console.log(signature);
// })();

async function signMessage(messageHash, privateKey) {
    const signature = await secp256k1.sign(messageHash, privateKey);
    return signature;
    // console.log(signature);

    // const isSigned = secp256k1.verify(signature, messageHash, publicKey);
    // console.log(isSigned);
}

async function recoverKey(messageHash, signature) {
    return secp256k1.recoverPublicKey(messageHash, signature);
}
