
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "spirit supply whale amount human item harsh scare congress discover talent hamster";

module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/3dcdaf1f465349de808952fc19d6a27a")
      },
      network_id: 4
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      // from: "0xbd3ff2e3aded055244d66544c9c059fa0851da44",
      // gas: 0xbd3ff2e3aded055244d66544c9c059fa0851da44,
      // gasLimit: 6721975,
      // gasPrice: 100000
    }
  }
};
