import { ethers } from "ethers";
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useState } from 'react'
import Web3Modal from 'web3modal'

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";
import { nftmarketaddress, nftaddress } from '../config';
import { useRouter } from "next/router";
import Web3 from "web3";

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

const CreatedItems = () => {

    const [fileUrl, setfileUrl] = useState(null)
    const [formInput, setformInput] = useState({ price: "", name: "", description: "" })
    const router = useRouter()

    async function onChange(e) {
        const file = e.target.files[0];
        try {
            const added = await client.add(
                file, {
                progress: (prog) => console.log(`recieved: ${prog}`)
            }
            )
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setfileUrl(url);
        } catch (error) {
            console.log("Error on uploading File: ", error);
        }
    }

    async function createSale(url) {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)    
        const signer = provider.getSigner()

        let contract = new ethers.Contract(nftaddress, NFT.abi, signer)

        let transaction = await contract.createToken(url)

        let tx = await transaction.wait()

        let event = tx.events[0]
        let value = event.args[2]
        let tokenId = value.toNumber()
    
        const price = ethers.utils.parseUnits(formInput.price, 'ether')

       let contractMarket = new ethers.Contract(nftmarketaddress, Market.abi, signer)

        let listingPrice = await contractMarket.getListingPrice()
        listingPrice = listingPrice.toString()
    
        transaction = await contractMarket.createMarketItem( nftaddress, tokenId, price , {value:listingPrice} )
        await transaction.wait()
        router.push('/')
    }

    async function createMarket() {
        const { name, description, price } = formInput;
        if (!name || !description || !price || !fileUrl) return
        const data = JSON.stringify({
            name, description, image: fileUrl
        })
        try {
            const added = await client.add(data);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`

            createSale(url);

        } catch (error) {
            console.log("Error Uploading File", error);
        }
    }

    return (
        <div className="flex justify-center">
            <div className="w-1/2 flex flex-col pb-12">
                <input className="mt-8 border rounded p-4" placeholder="Asset Name" onChange={e => setformInput({ ...formInput, name: e.target.value })} />
                <textarea className="mt-2 border rounded p-4" placeholder="Asset Description" onChange={e => setformInput({ ...formInput, description: e.target.value })} />
                <input className="mt-2 border rounded p-4" placeholder="Asset Price in ETH" onChange={e => setformInput({ ...formInput, price: e.target.value })} />
                <input className="my-4" placeholder="Asset " type="file" onChange={onChange} />
                {fileUrl && (
                    <img src={fileUrl} className="rounded mt-4" width="350" />
                )}

                < button onClick={createMarket} className="font-bold mt-4 bg-blue-500 text-white rounded p-4 shadow-lg" >Create Digital Asset</ button>

            </div>
        </div>
    )
}

export default CreatedItems