require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

 const privateKey = "c785117a1da4787f34a10b4ae32aa565d25d474fe342e9636d8eeb155be5b08b";
const infuraId = "d968eabf0c2f44d2a7d2a1416dd78b23";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      accounts: [privateKey],
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
};
