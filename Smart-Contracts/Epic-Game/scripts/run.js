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

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
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
