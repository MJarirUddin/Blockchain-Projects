import React, { useState } from 'react'
import { useStore } from '../context/GlobalState'
import { enablePropertySale } from '../store/asyncActions'
import Loader from '../images/loader.gif'

export function EnablePropertySale({ PropertyId_TokenId }) {

    const [{ contract, accounts }, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInProcess] = useState(false)
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(true)
    const [transactionError, setTransactionError] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();
        setTransactionSuccessful(true)
        setTransactionError("")
        try {
            await enablePropertySale(contract, accounts, PropertyId_TokenId, dispatch)
            console.log(PropertyId_TokenId)
            setTransactionInProcess(false)
            setTransactionSuccessful(true)
        } catch (error) {
            console.log(error)
            setTransactionInProcess(false);
            setTransactionSuccessful(false)
            setTransactionError(error.message)
        }
    }

    return (
        <>
            <hr />
            <h3>Enable Property <strong>FOR SALE</strong>{isTransactionInProcess && <img width="40px" src={Loader} alt="Loading...." />}</h3>
            {!isTransactionSuccessful && <div style={{ color: "red" }}>{transactionError}</div>}
            <form onSubmit={onSubmit} className="form">
                {
                    isTransactionInProcess ?
                        <div className="btn" style={{ background: "blue", color: "white" }}> Transaction in Process...</div> :
                        <div className="center">   <button className="btn" style={{ background: "blue", color: "white" }}> Enable For Sale</button></div>
                }
            </form>
            <hr />
        </>

    )

}

export default EnablePropertySale;
