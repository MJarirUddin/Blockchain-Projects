import React, { useEffect, useState } from 'react'
import { useStore } from '../context/GlobalState';
import BuyerRequest from './BuyerRequest';
import { SaleStatus } from './SaleStatus';
import Loader from '../images/loader.gif'

export const Buyer = ({ PropertyId_TokenId,OwnerAddress }) => {

    const [{ contract, accounts }] = useStore();
    const [isTransactionInProcess, setTransactionInProcess] = useState(false)
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(true)
    const [transactionError, setTransactionError] = useState("")

    const [Data, setData] = useState([])
    const getOffers = async () => await contract.methods.PropertyBuyerList(PropertyId_TokenId,accounts[0]).call().then(function (result, error) {
        if (result) {
            setData({ Data: result })
        } else if (error) {
            console.log(error)
            setTransactionInProcess(false);
            setTransactionSuccessful(false)
            setTransactionError(error.message)
        }
    })
    //console.log(Data)
    useEffect(() => {
        getOffers();
    }, [])

    let states = []
    const getResponse = () => {
        Object.values(Data).map((item, index) => {
            for (var a in item) {
                states = item
                return item[a]
            }
        })
    }
    // const r = getResponse()
    getResponse()
    const responseStatus = states[3]
    const responsetoken = states.ApplyForToken
    const val = states[2]
    const BuyerAddress =states[1]
    var Id = parseInt(PropertyId_TokenId-1);
    var b = parseInt(responsetoken-1);
    return (
        <>
         <h3>{isTransactionInProcess && <img width="40px" src={Loader} alt="Loading...." />}</h3>
            {!isTransactionSuccessful && <div style={{ color: "red" }}>{transactionError}</div>}
            {
            accounts[0] != OwnerAddress &&  responsetoken != PropertyId_TokenId  ?  <BuyerRequest PropertyId_TokenId={PropertyId_TokenId} OwnerAddress={OwnerAddress} /> :<SaleStatus winStatus={states[5]}  accounts={accounts[0]} responsetoken={b} val={val} responseStatus={responseStatus} Id={Id} OwnerAddress={OwnerAddress} PropertyId_TokenId={PropertyId_TokenId} BuyerAddress={BuyerAddress} />
            }
        </>
    )
}
