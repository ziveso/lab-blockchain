const Block = require('./Block')

class BlockChain {
    constructor() {
        this.chain = []
    }

    addBlock(data) {
        let index = this.chain.length
        let prevHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].hash : 0
        let block = new Block(index, data,prevHash)

        this.chain.push(block)
    }

    chainIsValid() {
        for(var i = 0 ; i < this.chain.length ; i++) {
            if(this.chain[i].hash !== this.chain[i].getHash()) {
                return false
            }
            if(i > 0 && this.chain[i - 1].hash !== this.chain[i].prevHash) {
                return false
            }
        }
        return true
    }
}

module.exports = BlockChain