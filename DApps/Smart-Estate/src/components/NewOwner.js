import React,{useEffect,useState} from 'react'
import { useStore } from '../context/GlobalState';
import OfferStatus from './OfferStatus';

export const NewOwner = ({PropertyId_TokenId}) => {
    const [{ contract, accounts }] = useStore();
    const [Data, setData] = useState()
    useEffect(() => {
        const getData =()=>{
            NewOwnerOfProperty()
        }
       getData()
    }, [contract,accounts])
    
    const NewOwnerOfProperty = async() =>{
        await contract.methods.ownerOf(PropertyId_TokenId).call().then(function (result, error) {
            if (result) {
               // console.log(JSON.stringify(result),result)
                setData(result)
            } else if (error) {
                console.log(error)
                // setTransactionInProcess(false);
                // setTransactionSuccessful(false)
                // setTransactionError(error.message)
            }
        })
    }

console.log(Data,PropertyId_TokenId)
   
    return (
        <div>
            {Data == accounts ? <OfferStatus PropertyId_TokenId={PropertyId_TokenId} /> : <h3 style={{background: "#01bf71",
                   margin: "10px auto 10px auto",
                   width: "58%"}}>Sold Out</h3> }
        </div>
    )
}
