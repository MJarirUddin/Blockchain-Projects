import React, { useState, useEffect } from 'react'
import { useStore } from '../context/GlobalState'
import { property_Detail } from "../store/asyncActions";
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Web3 from 'web3'
import Loader from '../images/loader.gif'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

function NonCommercial() {
    const [events, setEvents] = useState([{}]);
    const [{ contract, accounts }, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInProcess] = useState(false)
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(true)
    const [transactionError, setTransactionError] = useState("")
    const [myData, setmyData] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await property_Detail(contract)
            setEvents(response)
        }
        getData();


    }, [contract])

    useEffect(() => {
        const getProperties = async () => {
            const response = await property_Detail(contract)
            setEvents(response)
            return response;
        }
        let returnValues = []
        const alldata = async () => {
            //console.log(events)
            if (events) {
                (events).map((item, index) => {
                    return returnValues[index] = item.returnValues
                })
                // console.log(events,returnValues)
                return returnValues
            }
            else {
                console.log("CALL AGAIN")
                return await getProperties()
            }
        }
        (
            async () => {
                //  console.log(returnValues)
                returnValues = await alldata()
                // console.log(returnValues)
                let reverseSort = returnValues ? returnValues.reverse() : []
                setmyData(reverseSort)
            }
        )();
    }, [events])
    const classes = useStyles();
    return (
        <>
            <h3>{isTransactionInProcess && <img width="40px" src={Loader} alt="Loading...." />}</h3>
            {!isTransactionSuccessful && <div style={{ color: "red" }}>{transactionError}</div>}
            <div className="Products">
                <div className={classes.root}>
                    <Grid container spacing={3} style={{display:"flex",justifyContent:"space-evenly"}}>
                        {(myData).map((item) => {
                            for (var a in item) {
                                if (item[6] === "Residential") {
                                    var id = item[1]
                                    return (
                                        <div className="ProductItem">
                                            <Link className="link" keys={id} to={`/property/${id}`} >
                                                <div className="center">
                                                    <img src={`https://ipfs.infura.io/ipfs/${item[8]}`} width="320px" height="240px" maxWidth="100%" /></div>
                                                <Paper className={classes.paper} elevation={3} >
                                                    <div >
                                                        <h6>Property Address: {item[2]}</h6>
                                                        <h6>City: {item[3]}</h6>
                                                        {/* <h6>Area: {item[5]}</h6>
                                                        <h6>Property Type: {item[6]}</h6> */}
                                                        <h6>Price: {Web3.utils.fromWei(item[7].toString(), 'Ether')} Eth</h6>
                                                    </div>
                                                </Paper>
                                            </Link>
                                        </div>
                                    )
                                }
                            }
                        })
                        }
                    </Grid>
                </div>
            </div>
            <br />
        </>
    )
}
export default NonCommercial;