/* eslint-disable no-undef */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require('dotenv').config()
const fs = require('fs');
require("dotenv").config()

const PRIVATE_KEY = "37b101a3c67aaf0dbcf6f73d2722466222cc909dad639c43edbc78d49223376a";
const REACT_APP_ALCHEMY_API_URL="https://eth-goerli.g.alchemy.com/v2/zUzhSks1AbcQy4NOUOvi1mCeZfvws1p3"

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    polygonMumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/0pkV5xq3hF2Nnbe7GMwVfamo5-TJDBuS`,
      accounts: [PRIVATE_KEY],
    },
    // matic: {
    //   url: "https://polygon-mainnet.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d",
    //   //accounts: [process.env.privateKey]
    // },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/zUzhSks1AbcQy4NOUOvi1mCeZfvws1p3",
      // accounts:process.env.REACT_APP_PRIVATE_KEY
      accounts: [PRIVATE_KEY],

    }
  },
  solidity: {
      version: "0.8.4",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000,
        },
      },
    },

  etherscan: {
    apiKey: {
      goerli  : "FGXX2WTEVRBK1UX4SBA2NI4WX3YBDSNBZ9"
      // polygonMumbai: "3391CKHWE6SNZRKMCJE7QPTWJE7J5MTJWA"
    }
  }
};