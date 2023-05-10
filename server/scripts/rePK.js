const { secp256k1 } = require("ethereum-cryptography/secp256k1");

// async function recoverKey(message, signature, recoveryBit) {
//     return secp.recoverPublicKey(hashMessage(message), signature, recoveryBit)
//

// console.log(secp256k1);

const message = "transfer"
const signature = "Signature {
    r: 34555602840847798627177231529875036156573296612350554002359758958533583146756n,
    s: 18619299596031098823921649229835615450722634785804871370606870038609404288290n,
    recovery: 0
  }"