// /* hardhat.config.js */
// require("@nomiclabs/hardhat-waffle");
// const fs = require("fs");
// const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
// const projectId = "eef942d247ee46a98bcf2a98fc4b021f";

// module.exports = {
//   defaultNetwork: "hardhat",
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//     mumbai: {
//       url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
//       accounts: [privateKey],
//     },
//     mumbai: {
//       url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
//       accounts: [privateKey],
//     },
//   },
//   solidity: {
//     version: "0.8.4",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };

require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey =
  fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
