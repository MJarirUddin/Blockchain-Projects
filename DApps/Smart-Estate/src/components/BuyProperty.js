import React, { useState } from 'react'
import { useStore } from '../context/GlobalState';
import Web3 from 'web3'
import Loader from '../images/loader.gif'
import BuyerRequest from './BuyerRequest'

export const BuyProperty = ({ PropertyId_TokenId, val, OwnerAddress, BuyerAddress,responseStatus }) => {

    const [{ contract, accounts }, ] = useStore();
    const [isTransactionInProcess, setTransactionInProcess] = useState(false)
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(true)
    const [transactionError, setTransactionError] = useState("")
    const buy_Property = async () => {
        const Buy = await contract.methods.BuyProperty(PropertyId_TokenId).send({ from: accounts[0], to: OwnerAddress, value: Web3.utils.toWei(val, 'ether') })
        console.log(Buy, "buy_Property Function Run Successfully")
    }


    return (
        <>
            <h3>{isTransactionInProcess && <img width="40px" src={Loader} alt="Loading...." />}</h3>
           
            {
                responseStatus == "1"  ?  <div className="center">  {!isTransactionSuccessful && <div style={{ color: "red" }}>{transactionError}</div>} <span>Your Bid has been Approved! Now you can buy this property </span> <button className="contractBtn" onClick={() => buy_Property()} style={{ background: "blue", color: "white" }}> Buy Property</button><br/></div> : <BuyerRequest PropertyId_TokenId={PropertyId_TokenId} OwnerAddress={OwnerAddress} />
            }
        </>
    )
}

