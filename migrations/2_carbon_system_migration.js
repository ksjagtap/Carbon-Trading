// //import "OZ_contracts/token/ERC777/ERC777.sol";

// //const ERC777 = artifacts.require("ERC777");
// const CarbonCredit = artifacts.require("CarbonCredit");
// require('@openzeppelin/test-helpers/configure')({ provider: web3.currentProvider, environment: 'truffle' });

// const { singletons } = require('@openzeppelin/test-helpers');

// module.exports = function(deployer){

//     deployer.then(()=> {
//         return deployer.deploy(ERC777, "ERC777 Token", "t", new address(0));
//     }).then((erc777Instance) => {
//     	console.log("ERC777 contract at address = " + erc777Instance.address);
//         return deployer.deploy(CarbonCredit, "Carbon Credit", "c", new address(0));
//     })

// };


// module.exports = async function(deployer, network, accounts){

//     if (network === 'development') {
//     // In a test environment an ERC777 token requires deploying an ERC1820 registry
//     await singletons.ERC1820Registry(accounts[0]);
//   }

//   await deployer.deploy(Simple777Token);
// };


const CarbonCredit = artifacts.require("CarbonCredit");
const ERC20 = artifacts.require("ERC20");
const MarketPlace = artifacts.require("MarketPlace");

// module.exports = function(deployer, network, accounts) {
//   const platform = accounts[0];
//   let collectibleInstance;
//   let tokenInstance;

//   return deployer
//     .then(() => {
//         return deployer.deploy(CarbonCredit, {from: platform});
//     }).then((_inst) => {
//         collectibleInstance = _inst;
//         return deployer.deploy(ERC20, {from: platform});
//     })
//     // .then((_inst) => {
//     //     tokenInstance = _inst;
//     //     return deployer.deploy(CollectibleMarketPlace,
//     //                           collectibleInstance.address,
//     //                           tokenInstance.address,
//     //                           100,
//     //                           {from: platform});
//     // });
// };

module.exports = function(deployer, network, accounts) {
  const platform = accounts[0];
  let collectibleInstance;
  let tokenInstance;

  return deployer
    .then(() => {
        return deployer.deploy(CarbonCredit, {from: platform});
    }).then((_inst) => {
        collectibleInstance = _inst;
        return deployer.deploy(MarketPlace, collectibleInstance.address, {from: platform});
    })
    // .then((_inst) => {
    //     tokenInstance = _inst;
    //     return deployer.deploy(CollectibleMarketPlace,
    //                           collectibleInstance.address,
    //                           tokenInstance.address,
    //                           100,
    //                           {from: platform});
    // });
};

