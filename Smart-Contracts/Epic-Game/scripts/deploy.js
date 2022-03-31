// const main = async () => {
//   const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
//   const gameContract = await gameContractFactory.deploy(
//     ["Leo", "Bonk Doge", "Pikachu"], // Names
//     [
//       "https://i.imgur.com/pKd5Sdk.png", // Images
//       "https://i.imgur.com/ht26sUf.png",
//       "https://i.imgur.com/WMB6g9u.png",
//     ],
//     [100, 200, 300], // HP values
//     [100, 50, 25], // Attack damage values
//     [5, 1, 20], // Luck values
//     "Amazed Jake", // Boss name
//     "https://i.imgur.com/P88Dnvd.png", // Boss image
//     10000, // Boss hp
//     50 // Boss attack damage
//   );
//   await gameContract.deployed();
//   console.log("Contract Deployd to: ", gameContract.address);

//   let txn;
//   txn = await gameContract.mintCharacterNFT(0);
//   await txn.wait();
//   console.log("Minted NFT #1");

//   txn = await gameContract.mintCharacterNFT(1);
//   await txn.wait();
//   console.log("Minted NFT #2");

//   txn = await gameContract.mintCharacterNFT(2);
//   await txn.wait();
//   console.log("Minted NFT #3");

//   txn = await gameContract.mintCharacterNFT(1);
//   await txn.wait();
//   console.log("Minted NFT #4");

//   console.log("Done deploying and minting!");
// };

const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Leo", "Bonk Doge", "Pikachu"], // Names
    [
      "https://i.imgur.com/pKd5Sdk.png", // Images
      "https://i.imgur.com/ht26sUf.png",
      "https://i.imgur.com/WMB6g9u.png",
    ],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    [5, 1, 20], // Luck values
    "Amazed Jake", // Boss name
    "https://i.imgur.com/P88Dnvd.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract Deployd to: ", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
