import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import { useStore } from '../context/GlobalState'
import { buyer_Request, transfer_Info } from '../store/asyncActions';
import Loader from '../images/loader.gif'
import Typography from '@material-ui/core/Typography';

function BuyerRequest({ PropertyId_TokenId, OwnerAddress }) {

    const [{ contract, accounts }, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInProcess] = useState(false)
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(true)
    const [transactionError, setTransactionError] = useState("")

    const [value, setvalue] = useState("0")
    const [events, setEvents] = useState([{}])	
    const [Data, setData] = useState()

    useEffect(() => {	
        function getData() {	
            getProperty()	
        }	
        getData();	
    }, [contract])	

    useEffect(() => {
        const newOwner =  contract.methods.ownerOf(PropertyId_TokenId).call().then(function (result, error) {
            if (result) {
                setData(result)
            } else if (error) {
                console.log(error)
                setTransactionInProcess(false);
                setTransactionSuccessful(false)
                setTransactionError(error.message)
            }
        })
        
    }, [contract,PropertyId_TokenId])

    const getProperty = async () => {	
        const response = await transfer_Info(contract)	
        setEvents(response)	
    }	

    let returnValues = []	
    const alldata = () => {	
        if (events) {	
            Object.values(events).map((item, index) => {	
                return returnValues[index] = item.returnValues	
            })	
            return returnValues	
        }	
        else {	
            return getProperty()	
        }	
    }	
    returnValues = alldata()	
    // const val = id - 1;	

    let dataItem = []	
    dataItem = returnValues[PropertyId_TokenId - 1]	
    let status = false	
    const data = () => {	
        if (!dataItem) {	
            return <h3>Sold Out!</h3>	
        }	
        if (dataItem) {	
            for (var a in dataItem) {	
                // const valueInEthers = Web3.utils.fromWei(dataItem[3])	
                status = dataItem[5]	
            }	
        }	
    }	
   // const runFunc = data()	
   data();
   // console.log(runFunc, status)	

    const onSubmit = async (e) => {
        e.preventDefault();
        setTransactionSuccessful(true)
        setTransactionError("")
        try {
            setTransactionInProcess(true)
            const newOffer = {
                PropertyId_TokenId,
                value
            }
            const result = await buyer_Request(contract, accounts, newOffer, dispatch);
           // console.log(result)
            setTransactionInProcess(false)
            setTransactionSuccessful(true)

        } catch (error) {
            console.log(error)
            setTransactionInProcess(false);
            setTransactionSuccessful(false)
            setTransactionError(error.message)
        }

    }
//console.log(Data)
    return <div> 
        <h3>{isTransactionInProcess && <img width="40px" src={Loader} alt="Loading...." />}</h3>
        {!isTransactionSuccessful && <div style={{ color: "red" }}>{transactionError}</div>}
        <br/>
        <form onSubmit={onSubmit} >
            <div className="center">
                {
                   Data != OwnerAddress ?<div style={{background: "#01bf71",
                   margin: "10px auto 10px auto",
                   width: "58%"}}> <h3>Sold Out</h3></div> : <div className="center">
                        <h3>Make a Bid?</h3>
                        <input type="text" required onChange={(e) => setvalue(e.target.value)} />
                        <button className="contractBtn" style={{ background: "blue", color: "white" }}> Buy Request</button></div>
                }
            </div>
        </form>
        <br/>
    </div>
}

export default BuyerRequest;