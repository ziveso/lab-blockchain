const BlockChain = require('./BlockChain')

const CILCoin = new BlockChain();

CILCoin.addBlock({sender: "Bruce wayne", reciver: "Tony stark", amount: 100});
CILCoin.addBlock({sender: "Harrison wells", reciver: "Han solo", amount: 50});
CILCoin.addBlock({sender: "Tony stark", reciver: "Ned stark", amount: 75});
 
console.log(JSON.stringify(CILCoin, null, 4));

console.log("Validity: ", CILCoin.chainIsValid());
console.log("Check if someone edit content")
CILCoin.chain[0].data.reciver = "Joker";
console.log("Validity: ", CILCoin.chainIsValid());
console.log(JSON.stringify(CILCoin, null, 4));
