const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

const privateKey =
    "6ebfa9a235c948f907805c5a8badee4c7b08befe5aac070ff25932e6e2f11531";

function hashMessage(message) {
    const bytes = utf8ToBytes(message);
    return keccak256(bytes);
}

const messageHash = hashMessage("transfer");

async function signMessage(messageHash, privateKey) {
    const signature = await secp256k1.sign(messageHash, privateKey);
    // console.log(signature);
    return signature;

    // const isSigned = secp256k1.verify(signature, messageHash, publicKey);
    // console.log(isSigned);
}

signMessage(messageHash, privateKey).then((signature) => {
    console.log(signature);
    const recoverKey = secp256k1.recoverPublicKey(messageHash, signature);
    console.log(recoverKey);
});
