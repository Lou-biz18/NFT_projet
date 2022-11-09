require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/bfae238ac2254d61bbc3fd7e13237819",
    }

  }
};