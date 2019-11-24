const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "alien amateur soap alarm search mercy version bitter harsh change flight erosion";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }, 
    rinkeby: {
      provider: () => 
        new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/9999999999Mykey69e9999999999c792'),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets ) 
      },
  }
};