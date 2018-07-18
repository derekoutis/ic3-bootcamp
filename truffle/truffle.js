var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "crawl tip sword hair master age around opera notice glow guilt draw";

/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*',
      gas: 10000000,
      gasPrice: 1
    },
    geth: {
      provider: new HDWalletProvider(mnemonic, 'http://127.0.0.1:9545', 0, 10),
      network_id: '*',
      gas: 10000000,
      gasPrice: 1
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};