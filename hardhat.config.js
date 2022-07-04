/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim()
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/a912b2b2c5804888bfcf6a1cc5205bfa',
      accounts: [privateKey]
    },
    mainnet:{
      url: 'https://polygon-mumbai.infura.io/v3/a912b2b2c5804888bfcf6a1cc5205bfa',
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}