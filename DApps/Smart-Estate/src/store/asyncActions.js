import { setupWeb3, web3LoadingError, addEthereumAccounts,owners, Lands,TransferEvent, RegisterProperty, setupContract, EnablePropertySale, BuyingRequest, OfferStatus } from './actions';
import Web3 from 'web3';
import SmartEstate from "../abis/SmartEstate.json";

export const loadBlockchain = async (dispatch) => {

    try {
        console.log("web3.givenProvider = ", Web3.givenProvider);
        if (Web3.givenProvider) {
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            const networkId = await web3.eth.net.getId();
            const network = SmartEstate.networks[networkId];
            const contract = new web3.eth.Contract(SmartEstate.abi, network.address)
            dispatch(setupContract(contract));
            console.log(contract)
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(accounts))

            
            const TokenId = await contract.methods.tokenId().call().then(function (result, error) {
                if (result) {
                    for (let i = 1; i <= result; i++) {
                        if (contract) {
                            const land = contract.methods.AllPropertyList(i).call().then(function (data, error) {
                                if (data) {
                                    dispatch(Lands(data))
                                      // console.log(data)
                                } else if (error) {
                                    console.log(error)
                                }
                            })
                        }
                    }
                    let allData = []
                    for (let i = 1; i <= result; i++) {
                        if (contract) {
                            const ownerList = contract.methods.ownerOf(i).call().then(function (data, error) {
                                if (data) {
                                    allData[i] = data
                                      dispatch(owners(data))
                                } else if (error) {
                                    console.log(error)
                                }
                            })
                        }
                    }
                } else if (error) {
                    console.log(error)
                }
            })

            const eventsList =  await contract.getPastEvents('property_detail', { fromBlock: 0, toBlock: "latest" });
          
            let OwnershipsTransferList= []
            const TransferList =  await contract.getPastEvents('Transfer', { fromBlock: 0, toBlock: "latest" },(errors,events)=>{
                if(!errors){
                    OwnershipsTransferList = events;
                    OwnershipsTransferList.map((item,index)=>{
                        OwnershipsTransferList[index] = item.returnValues;
                    })
                }
            }); 
            
             dispatch(TransferEvent(TransferList))



        } else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like Metamask to use this DAPP"))
        }
    }
    catch (error) {
        console.log("Error in loading Web3 = ", error);
        if (error.code === 4001)
            dispatch(web3LoadingError(error.message))
    }
}

export const PropertyList = async (contract, accounts, Lands, dispatch) => {

    console.log("before transaction")

    const receipt = await contract.methods.tokenId().call({ from: accounts[0] }).then(function (result, error) {
        if (result) {
            // console.log(result);

            for (let i = 1; i <= result; i++) {
                const land = contract.methods.AllPropertyList(i).call()
                .then(function (data, error) {
                    if (data) {
                        dispatch(Lands(data))
                        console.log(data)
                        return data
                    } else if (error) {
                        console.log(error)
                    }
                })
                return land
            }
            return result
        } else if (error) {
            console.log(error)
        }
    })
    console.log("after transaction", receipt)
    return receipt
}

export const registerPropertyAsync = async (contract, accounts, property, dispatch) => {
    console.log("before transaction")

    const receipt = await contract.methods.RegisterProperty(property._propertyAddress, property._city, property._room, property._area, property._priceInEther, property._propertyType, property._image, property._saleStatus, property._tokenUri).send({ from: accounts[0] });
   // console.log("after transaction ", receipt)
    dispatch(RegisterProperty(property))
}

export const enablePropertySale = async (contract, accounts, tokenId, dispatch) => {
    console.log("before transaction")
    const receipt = await contract.methods.EnablePropertySale(tokenId).send({ from: accounts[0] })
   // console.log("after transaction ", receipt)
    dispatch(EnablePropertySale(tokenId))
}


export const property_Detail = async (contract) => {

    // console.log("before transaction");
    const receipt = contract ? await contract.getPastEvents('property_detail', { fromBlock: 0, toBlock: "latest" }) : null;
   // console.log("after transaction");
    return receipt;
}

export const transfer_Info = (contract) => {

    const receipt = contract ? contract.getPastEvents('Transfer', { fromBlock: 0, toBlock: "latest" }) : null
    //  dispatch(TransferEvent(receipt))
   // console.log("after transaction", receipt);

    // console.log("before transaction");

    return receipt;
}

export const buyer_Request = async (contract, accounts, offer, dispatch) => {
    //console.log("before transaction")
    const receipt = await contract.methods.BuyingRequest(offer.PropertyId_TokenId, offer.value).send({ from: accounts[0] });
   // console.log("after transaction ", receipt)
    dispatch(BuyingRequest(offer))
}

export const offerStatus = async (contract, PropertyId_TokenId, dispatch) => {
   // console.log("before transaction")
    const receipt = await contract.methods.OfferStatus(PropertyId_TokenId).call()

   // console.log("after transaction ", receipt)
    dispatch(OfferStatus(PropertyId_TokenId))
}
