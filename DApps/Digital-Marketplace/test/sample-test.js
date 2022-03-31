// const { expect } = require("chai");

describe("NFTMarket", function () {
  it("Should return and execute market sales", async function () {
    const Market = await ethers.getContractFactory("NFTMarket");
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address;
    console.log("NFT Market deployed at:", marketAddress);
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(marketAddress);
    await nft.deployed();
    const nftContractAddress = nft.address;
    console.log("NFT Contract deployed at:", nftContractAddress);

    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString();
    // console.log(listingPrice);
    const auctionPrice = ethers.utils.parseUnits('1', 'ether');
    // console.log(auctionPrice);
    await nft.createToken("https://www.google.com.pk");
    const transaction = await nft.createToken("https://www.facebook.com");
    let tx = await transaction.wait();
    // console.log(tx);
    const events = await tx.events[0];
    const event = events.args[2]
    console.log(events);
    const value = event.toNumber();
    console.log(value);
    const item1 = await market.createMarketItem(nftContractAddress, 1, auctionPrice, { value: listingPrice })
    const item2 = await market.createMarketItem(nftContractAddress, 2, auctionPrice, { value: listingPrice })
    // console.log(item);

    const [_, buyerAddress] = await ethers.getSigners();
    await market.connect(buyerAddress).createMarketSale(nftContractAddress, 2, { value: auctionPrice })

    items = await market.fetchMarketItems();
    items = await Promise.all(items.map(async i => {
      const tokenUri = await nft.tokenURI(i.tokenId);
      // console.log(i);
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        owner: i.owner,
        seller: i.seller,
        tokenUri
      }

      return item;
    }))
    // console.log("Items: ",items);
  });
});
